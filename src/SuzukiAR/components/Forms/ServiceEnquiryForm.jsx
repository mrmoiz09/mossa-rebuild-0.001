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


const ServiceEnquiryForm = () => {

  const { handleSubmit, register, formState: { errors } ,reset} = useForm({
    mode: "onChange"
  });

  const [loading,setLoading] = useState(false);
  const [models,setModels] = useState([]);
  const [location,setLocation] = useState([]);
  const [franchise_list,setFranchise] = useState([]);


  const resetObject = useMemo(()=>{
    const obj = {
      title:"",
      first_name:"",
      last_name:"",
      phone:"",
      email:"",
      vehicle_make:"",
      model_id:"",
      service_center_id:"",
      preferred_date:todayDate(),
      due_date:todayDate(),
      book_time:currentTime(),
      registration_no:"",
      current_mileage:"",
      comment:""
    };
    return obj;
  });

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    await callApi(HomeApi.service_enquiry.method,HomeApi.service_enquiry.url,null,data,defaultHeader())
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

  const fetchModelData = useCallback(async () => {
    await callApi(CommonApi.getCarsOfHome.method, CommonApi.getCarsOfHome.url, null, null, defaultHeader()).then((res) => {
      if (!res?.data?.error) {
        const payload = res?.data?.data;
        if (Array.isArray(payload)) {
          setModels(payload);
        }
      } 
    }).catch((err) => {
      console.log(err);
    });
  }, []);


  useEffect(()=>{
    fetchLocation();
    fetchFranchise();
    fetchModelData();
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
             {...register("last_name")}
             className={formclass(errors?.last_name)}
           />
           
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
       <div className="col">
           <div className="form-group">
               <label htmlFor="model_id">Model<span class="text-danger"> *</span></label>
               <select 
                   name="model_id" 
                   id="model_id"
                   {...register("model_id", {
                       required: "Required"
                   })}
                   className={formclass(errors?.model_id)}
               >
                   <option value={""}>--Please Select--</option>
                   {models.length>0 ? 
                     models.map((v,i)=>(
                       <option value={v?.id}>{v?.title}</option>
                     ))
                   :""}
               </select>
               {displayError(errors?.model_id?.message)}
           </div>
       </div>
     </div>
     <div className="row">
       <div className="col">
           <div className="form-group">
               <label htmlFor="service_center_id">Service Center<span class="text-danger"> *</span></label>
               <select 
                   name="service_center_id" 
                   id="service_center_id"
                   {...register("service_center_id", {
                       required: "Required"
                   })}
                   className={formclass(errors?.service_center_id)}
               >
                   <option value={""}>--Please Select--</option>
                   {location.length>0 ? 
                     location.map((v,i)=>(
                       <option value={v?.id}>{v?.title}</option>
                     ))
                   :""}
               </select>
               {displayError(errors?.service_center_id?.message)}
           </div>
       </div>
     </div>
     
     <div className="row mb-3">
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
           <label htmlFor="due_date">Due Date<span class="text-danger"> *</span></label>
           <input 
               type="date" 
               name="due_date" 
               id="due_date" 
               {...register("due_date",{
                   required:"Required"
               })}
               className={formclass(errors?.due_date)}
               defaultValue={todayDate()}
           />
           {displayError(errors?.due_date?.message)}
           </div>
       </div>
       {/* <div className="col">
           <label htmlFor="book_time">Booking Time*</label>
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
       </div> */}
     </div>
     <div className="row">
        <div className="col">
        <div className="form-group">
            <label htmlFor="registration_no">Vehicle Registration<span class="text-danger"> *</span></label>
            <input 
               type="text" 
               name="registration_no" 
               id="registration_no" 
               {...register("registration_no",{
                   required:"Required"
               })}
               className={formclass(errors?.registration_no)}
               
           />
           {displayError(errors?.registration_no?.message)}
           </div>
           </div>
        </div>
        <div className="row">
        <div className="col">
        <div className="form-group">
            <label htmlFor="current_mileage">Current Mileage<span class="text-danger"> *</span></label>
            <input 
               type="text" 
               name="current_mileage" 
               id="current_mileage" 
               {...register("current_mileage",{
                   required:"Required"
               })}
               className={formclass(errors?.current_mileage)}
           />
           {displayError(errors?.current_mileage?.message)}
        </div>
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
   :
   <div className='row'>
   <div className="col-md-12 col-sm6">
       <MoonLoader color={"#192040"} loading={true} size={60} /></div>
   </div>     
   }

   </>
  )
}

export default ServiceEnquiryForm