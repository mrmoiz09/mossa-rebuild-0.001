import React, { useMemo ,useState} from 'react'
import { useForm } from "react-hook-form";
import { HomeApi } from '../../../config/api';
import { callApi } from '../../../services/ApiService';
import { defaultHeader, toastError, toastSuccess } from '../../../services/CommonFunction';
import { displayError, formclass } from '../../../services/FormCommon';
import { phonePattern } from '../../../services/Patterns';
import { validationMsg } from '../../../config/constants';
import {useNavigate} from 'react-router-dom';
import { commonRoutes, HomeRoutes, SuzukiRoutes } from '../../../config/RouteConfig';

const ContactUsForm = () => {
const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors } ,reset} = useForm({
    mode: "onChange"
  });

  const resetObject = useMemo(()=>{
    const obj = {
      first_name:"",
      last_name:"",
      email:"",
      phone:"",
      comment:""
    };
    return obj;
  });

  const onSubmit = async (data) => {
    console.log(data);

    const finalData = {...data,section_type:1}

    await callApi(HomeApi.contactUs.method,HomeApi.contactUs.url,null,finalData,defaultHeader())
    .then((res)=>{
      if(!res?.data?.error)
      {
        reset(resetObject);
        toastSuccess(res?.data?.message);
         navigate(`/${HomeRoutes.thankyou}/contact-us`);
      }
      else
      {
        toastError(res?.data?.message);
      }
      
    }).catch((err)=>{
      toastError(err?.response?.data?.message);
      console.log(err);
    });
    
  };

  return (
    <>
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
              {...register("last_name")}
              className={formclass(errors?.last_name)}
            />
            
          </div>
        </div>
      </div>
      <div className="row">
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
            <div className="col-md-12">
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" name="is_wish" id="is_wish" value="1" className="custom-control-input" {...register("is_wish")}/>
                        <label htmlFor="is_wish" className='custom-control-label'>Yes, I wish to receive information about Products and Promotional Offers</label>  
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
    </>

  )
}

export default ContactUsForm