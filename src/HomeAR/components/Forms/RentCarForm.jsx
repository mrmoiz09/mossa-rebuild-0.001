import React,{useCallback, useEffect, useMemo,useState} from 'react'
import { useForm } from "react-hook-form";
import { CommonApi, HomeApi } from '../../../config/api';
import { callApi } from '../../../services/ApiService';
import { displayError, formclass, isDateSameOrAfter } from '../../../services/FormCommon';
import { defaultHeader, toastError, toastSuccess } from '../../../services/CommonFunction';
import { phonePattern } from '../../../services/Patterns';
import { validationMsg } from '../../../config/constants';
import { todayDate } from '../../../services/DateAndTime';
import MoonLoader from "react-spinners/MoonLoader";

const RentCarForm = () => {

     const { handleSubmit, register, formState: { errors } ,reset,getValues} = useForm({
        mode: "onChange"
      });

      const [loading,setLoading] = useState(false);

      const [location,setLocation] = useState([]);
      const [vehicleType,setVehicleType] = useState([]);
    
      const resetObject = useMemo(()=>{
        const obj = {
          first_name:"",
          last_name:"",
          email:"",
          phone:"",
          vehicle_type:"",
          location_id:"",
          preferred_data:todayDate(),
          return_date:"",
          comment:""
        };
        return obj;
      });
    
      const onSubmit = async (data) => {
        console.log(data);
        setLoading(true);
        await callApi(HomeApi.rent_car.method,HomeApi.rent_car.url,null,data,defaultHeader())
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
        
      };  
      
      const fetchLocation = useCallback(async () => {
        await callApi(CommonApi.getLocation.method, CommonApi.getLocation.url, null, null, defaultHeader()).then((res) => {
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

      const fetchVehicleType = useCallback(async () => {
        await callApi(CommonApi.getVehicleTypes.method, CommonApi.getVehicleTypes.url, null, null, defaultHeader()).then((res) => {
          if (!res?.data?.error) {
            const payload = res?.data?.data;
            if (Array.isArray(payload)) {
              setVehicleType(payload);
            }
          } 
        }).catch((err) => {
          console.log(err);
        })
      }, []);

      useEffect(()=>{
        fetchLocation();
        fetchVehicleType();
      },[]);

  return (
    <>
    {!loading ? 
    <form onSubmit={handleSubmit(onSubmit)}>
        
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label htmlFor="first_name">First Name*</label>
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
            <label htmlFor="last_name">Last Name*</label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              {...register("last_name", {
                required: "Required"
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
                required: "Required"
              })}
              className={formclass(errors?.email)}
            />
            {displayError(errors?.email?.message)}
          </div>
        </div>
        <div className="col">
        <div className="form-group">
            <label htmlFor="phone">phone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              {...register("phone", {
                required: false,
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
                <label htmlFor="vehicle_type">Vehicle Type</label>
                <select 
                    name="vehicle_type" 
                    id="vehicle_type"
                    {...register("vehicle_type", {
                        required: "Required"
                    })}
                    className={formclass(errors?.vehicle_type)}
                >
                    <option value={""}>--Please Select--</option>
                    {vehicleType.length>0 ? 
                      vehicleType.map((v,i)=>(
                        <option value={v?.id}>{v?.title}</option>
                      ))
                    :""}
                </select>
                {displayError(errors?.vehicle_type?.message)}
            </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
            <div className="form-group">
                <label htmlFor="location_id">Preferred Location</label>
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
            <label htmlFor="preferred_date">preferred_date</label>
            <input
              type="date"
              name="preferred_date"
              id="preferred_date"
              {...register("preferred_date", {
                required: "Required",
              })}
              defaultValue={todayDate()}
              className={formclass(errors?.preferred_date)}
            />
            {displayError(errors?.preferred_date?.message)}
        </div>
        <div className="col">
            <label htmlFor="return_date">return_date</label>
            <input
              type="date"
              name="return_date"
              id="return_date"
              {...register("return_date", {
                required: "Required",
                validate:(_date)=>{
                    if(!isDateSameOrAfter(_date,getValues("preferred_date"))){
                        return validationMsg.dateAfter;
                    }else{
                        return true;
                    }
                }
              })}
              className={formclass(errors?.return_date)}
            />
            {displayError(errors?.return_date?.message)}
        </div>
      </div>
      <div className="row">
        <div className="col">
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
      <div className="row">
        <div className="col">
          <button className="btn">Submit</button>
        </div>
      </div>
    </form>
    :<div className='row'>
    <div className="col-md-12 col-sm6">
        <MoonLoader color={"#192040"} loading={true} size={60} /></div>
    </div> }
    </>
  )
}

export default RentCarForm