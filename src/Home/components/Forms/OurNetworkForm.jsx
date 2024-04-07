import React,{useMemo,useState} from 'react'
import { useForm } from "react-hook-form";
import { HomeApi } from '../../../config/api';
import { callApi } from '../../../services/ApiService';
import { displayError, formclass } from '../../../services/FormCommon';
import { defaultHeader, toastError, toastSuccess } from '../../../services/CommonFunction';
import MoonLoader from "react-spinners/MoonLoader";
import {useNavigate} from 'react-router-dom';
import { commonRoutes, HomeRoutes, SuzukiRoutes } from '../../../config/RouteConfig';

const OurNetworkForm = () => {
const navigate = useNavigate();

    const { handleSubmit, register, formState: { errors } ,reset} = useForm({
        mode: "onChange"
      });

      const [loading,setLoading] = useState(false);

    
      const resetObject = useMemo(()=>{
        const obj = {
          first_name:"",
          last_name:"",
          email:"",
          website:"",
          comment:""
        };
        return obj;
      });
    
      const onSubmit = async (data) => {
        console.log(data);
        setLoading(true);
        await callApi(HomeApi.ourNetwork.method,HomeApi.ourNetwork.url,null,data,defaultHeader())
        .then((res)=>{
          if(!res?.data?.error)
          {
           setLoading(false);
            reset(resetObject);
            toastSuccess(res?.data?.message);
            navigate(`/${HomeRoutes.thankyou}/our-network`);
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

  return (
    <>
    {!loading ? 


<form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              {...register("first_name", {
                required: true
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
                required: true
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
                required: true
              })}
              className={formclass(errors?.email)}
            />
            {displayError(errors?.email?.message)}
          </div>
        </div>
        <div className="col">
        <div className="form-group">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              name="website"
              id="website"
              {...register("website", {
                required: false
              })}
              className={formclass(errors?.website)}
            />
            {displayError(errors?.website?.message)}
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

export default OurNetworkForm