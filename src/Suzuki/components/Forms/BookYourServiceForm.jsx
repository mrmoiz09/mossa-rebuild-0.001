import React,{useCallback, useEffect, useMemo,useState} from 'react'
import { useForm } from "react-hook-form";
import { CommonApi, HomeApi } from '../../../config/api';
import { callApi } from '../../../services/ApiService';
import { displayError, formclass } from '../../../services/FormCommon';
import { defaultHeader, toastError, toastSuccess } from '../../../services/CommonFunction';
import { phonePattern } from '../../../services/Patterns';
import { validationMsg } from '../../../config/constants';
import MoonLoader from "react-spinners/MoonLoader";
import { currentTime, todayDate } from '../../../services/DateAndTime';
import { commonRoutes, HomeRoutes, SuzukiRoutes } from '../../../config/RouteConfig';
import {useNavigate} from 'react-router-dom';

const BookYourServiceForm = () => {
const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors } ,reset} = useForm({
    mode: "onChange"
  });

  const [loading,setLoading] = useState(false);
  const [booking,setBooking] = useState([]);
  const [location,setLocation] = useState([]);
  const [franchise_list,setFranchise] = useState([]);


  const resetObject = useMemo(()=>{
    const obj = {
      first_name:"",
      last_name:"",
      phone:"",
      email:"",
      franchise:"",
      book_id:"",
      location_id:"",
      preferred_date:todayDate(),
      book_time:currentTime(),
      vehicle_registration:"",
      vehicle_identification_number:"",
      mileage:"",
      comment:"",
      type:"2"
    };
    return obj;
  });

  const onSubmit = async (data) => {
    console.log(data);

    const finalData = {...data,section_type:2}

    setLoading(true);
    await callApi(HomeApi.book_your_service.method,HomeApi.book_your_service.url,null,finalData,defaultHeader())
    .then((res)=>{
      if(!res?.data?.error)
      {
        setLoading(false);
        reset(resetObject);
        toastSuccess(res?.data?.message);
        navigate(`/${SuzukiRoutes.thankyou}/book_your_service`);
      }
      else
      {
        setLoading(false);
        toastError(res?.data?.message);
      }
      
    }).catch((err)=>{
      setLoading(false);
      toastError(err?.response?.data?.message);
      console.log(err);
    });
    
  }; 

  const fetchLocation = useCallback(async () => {
    await callApi(CommonApi.getLocations.method, CommonApi.getLocations.url, null, null, defaultHeader()).then((res) => {
      if (!res?.data?.error) {
        const payload = res?.data?.data;
        if (Array.isArray(payload)) {
          setLocation(payload);
        }
      } 
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  const fetchFranchise = useCallback(async () => {
    await callApi(CommonApi.getMstCar.method, CommonApi.getMstCar.url, null, null, defaultHeader()).then((res) => {
      if (!res?.data?.error) {
        const payload = res?.data?.data;
        if (Array.isArray(payload)) {
          setFranchise(payload);
        }
      } 
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  const fetchBookData = useCallback(async () => {
    await callApi(CommonApi.getBooking.method, CommonApi.getBooking.url, null, null, defaultHeader()).then((res) => {
      if (!res?.data?.error) {
        const payload = res?.data?.data;
        if (Array.isArray(payload)) {
          setBooking(payload);
        }
      } 
    }).catch((err) => {
      console.log(err);
    })
  }, []);


  useEffect(()=>{
    fetchLocation();
    fetchFranchise();
    fetchBookData();
  },[]);


  return (

    <>

    {!loading ? 
   
      <form onSubmit={handleSubmit(onSubmit)}>
          
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="first_name">First Name<span class="text-danger"> *</span></label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                {...register("first_name", {
                  required: "Required"
                })}
                className={formclass(errors?.first_name)}
              />
              {displayError(errors?.first_name?.message)}
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                {...register("last_name", {
                  required: false
                })}
                className={formclass(errors?.last_name)}
              />
              {displayError(errors?.last_name?.message)}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                {...register("email", {
                  required: false
                })}
                className={formclass(errors?.email)}
              />
              {displayError(errors?.email?.message)}
            </div>
          </div>
          <div className="col">
              <div className="form-group">
                  <label htmlFor="phone">Phone<span class="text-danger"> *</span></label>
                  <input
                  type="text"
                  name="phone"
                  id="phone"
                  {...register("phone", {
                      required: "Required",
                      pattern:{
                      value:phonePattern,
                      message:validationMsg.invalidPhone
                      }
                  })}
                  className={formclass(errors?.phone)}
                  />
                  {displayError(errors?.phone?.message)}
              </div>
          </div>
          
          
        </div>
        <div className="row">
          <div className="col">
              <div className="form-group">
                  <label htmlFor="franchise">Vehicle Choice<span class="text-danger"> *</span></label>
                  <select 
                      name="franchise" 
                      id="franchise"
                      {...register("franchise", {
                          required: "Required"
                      })}
                      className={formclass(errors?.franchise)}
                  >
                      <option value={""}>--Please Select--</option>
                      {franchise_list.length>0 ? 
                        franchise_list.map((v,i)=>(
                          <option value={v?.id}>{v?.title}</option>
                        ))
                      :""}
                  </select>
                  {displayError(errors?.franchise?.message)}
              </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
              <div className="form-group">
                  <label htmlFor="location_id">Preferred Location<span class="text-danger"> *</span></label>
                  <select 
                      name="location_id" 
                      id="location_id"
                      {...register("location_id", {
                          required: "Required"
                      })}
                      className={formclass(errors?.location_id)}
                  >
                      <option value={""}>--Please Select--</option>
                      {location.length>0 ? 
                        location.map((v,i)=>(
                          <option value={v?.id}>{v?.title}</option>
                        ))
                      :""}
                  </select>
                  {displayError(errors?.location_id?.message)}
              </div>
          </div>
        </div>
        <div className="row">
           <div className="col">
               <div className="form-group">
                 <label htmlFor="book_id">Book For<span class="text-danger"> *</span></label>
                 <select 
                       name="book_id" 
                       id="book_id"
                       {...register("book_id", {
                           required: "Required"
                       })}
                       className={formclass(errors?.book_id)}
                   >
                       <option value={""}>--Please Select--</option>
                       {booking.length>0 ? 
                         booking.map((v,i)=>(
                           <option value={v?.id}>{v?.title}</option>
                         ))
                       :""}
                   </select>
                   {displayError(errors?.book_id?.message)}
               </div>
           </div>
        </div>
        <div className="row">
        <div className="col">
           <div className="form-group">
               <label htmlFor="preferred_date">Preferred Date<span class="text-danger"> *</span></label>
               <input 
                   type="date" 
                   name="preferred_date" 
                   id="preferred_date" 
                   {...register("preferred_date",{
                       required:"Required"
                   })}
                   className={formclass(errors?.preferred_date)}
                   defaultValue={todayDate()}
               />
               {displayError(errors?.preferred_date?.message)}
               </div>
           </div>
          <div className="col">
              <div className="form-group">
              <label htmlFor="book_time">Booking Time<span class="text-danger"> *</span></label>
              <input 
                  type="time" 
                  name="book_time" 
                  id="book_time" 
                  {...register("book_time",{
                      required:"Required"
                  })}
                  className={formclass(errors?.book_time)}
                  defaultValue={currentTime()}
              />
              {displayError(errors?.book_time?.message)}
              </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
              <div className="form-group">
              <label htmlFor="vehicle_identification_number">Vehicle Identification Number</label>
              <input 
                  type="text" 
                  name="vehicle_identification_number" 
                  id="vehicle_identification_number" 
                  {...register("vehicle_identification_number",{
                      required:false
                  })}
                  className={formclass(errors?.vehicle_identification_number)}
              />
              {displayError(errors?.vehicle_identification_number?.message)}
              </div>
          </div>
        </div>
        <div className="row">
           <div className="col">
               <div className="form-group">
               <label htmlFor="vehicle_registration">Vehicle Registration</label>
               <input 
                  type="text" 
                  name="vehicle_registration" 
                  id="vehicle_registration" 
                  {...register("vehicle_registration",{
                      required:false
                  })}
                  className={formclass(errors?.vehicle_registration)}
                  
              />
              {displayError(errors?.vehicle_registration?.message)}
               </div>
           </div>
           <div className="col">
              <div className="form-group">
              <label htmlFor="mileage">Mileage</label>
               <input 
                  type="text" 
                  name="mileage" 
                  id="mileage" 
                  {...register("mileage",{
                      required:false
                  })}
                  className={formclass(errors?.mileage)}
              />
              {displayError(errors?.mileage?.message)}
              </div>
           </div>
        </div>
        <div className="row">
          <div className="col">
          <div className="form-group">
              <div className="form-group">
              <label htmlFor="comment">Comment</label>
              <textarea
                name="comment"
                id="comment"
                {...register("comment", {
                  required: false
                })}
                className={formclass(errors?.comment)}
              ></textarea>
              {displayError(errors?.comment?.message)}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
           <input
                type="hidden"
                name="type"
                id="type"
                {...register("type", {
                  required: false
                })}
                value='2'
              />
            <button className="btn">Submit</button>
          </div>
        </div>
      </form>
      :
      <div className='row'>
      <div className="col-md-12 col-sm6">
          <MoonLoader color={"#192040"} loading={true} size={60} /></div>
      </div>     
      }
   
      </>
  )
}

export default BookYourServiceForm