import React,{useCallback, useEffect, useMemo,useState} from 'react'
import { useForm } from "react-hook-form";
import { CommonApi, HomeApi } from '../../../config/api';
import { callApi } from '../../../services/ApiService';
import { displayError, formclass } from '../../../services/FormCommon';
import { defaultHeader, toastError, toastSuccess } from '../../../services/CommonFunction';
import { phonePattern } from '../../../services/Patterns';
import { validationMsg } from '../../../config/constants';
import MoonLoader from "react-spinners/MoonLoader";

const BodyShopForm = () => {

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
      vehicle_make:"",
      location_id:"",
      comment:""
    };
    return obj;
  });

  const onSubmit = useCallback( async (data) => {
    console.log(data);
    setLoading(true);
    await callApi(HomeApi.body_shop.method,HomeApi.body_shop.url,null,data,defaultHeader())
    .then((res)=>{
      if(!res?.data?.error)
      {
        setLoading(false);
        reset(resetObject);
        toastSuccess(res?.data?.message);
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
    
  } ,[]);

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
    await callApi(CommonApi.getFranchise.method, CommonApi.getFranchise.url, null, null, defaultHeader()).then((res) => {
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

 


  useEffect(()=>{
    fetchLocation();
    fetchFranchise();
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
              <label htmlFor="email">Email<span class="text-danger"> *</span></label>
              <input
                type="email"
                name="email"
                id="email"
                {...register("email", {
                  required: "Required"
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
                  <label htmlFor="vehicle_make">Vehicle Make<span class="text-danger"> *</span></label>
                  <select 
                      name="vehicle_make" 
                      id="vehicle_make"
                      {...register("vehicle_make", {
                          required: "Required"
                      })}
                      className={formclass(errors?.vehicle_make)}
                  >
                      <option value={""}>--Please Select--</option>
                      {franchise_list.length>0 ? 
                        franchise_list.map((v,i)=>(
                          <option value={v?.id}>{v?.title}</option>
                        ))
                      :""}
                  </select>
                  {displayError(errors?.vehicle_make?.message)}
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

export default BodyShopForm