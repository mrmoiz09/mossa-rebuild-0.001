import React,{useCallback, useEffect, useMemo,useState} from 'react'
import { useForm } from "react-hook-form";
import { CommonApi, HomeApi } from '../../../config/api';
import { callApi } from '../../../services/ApiService';
import { displayError, formclass } from '../../../services/FormCommon';
import { defaultHeader, toastError, toastSuccess } from '../../../services/CommonFunction';
import { phonePattern } from '../../../services/Patterns';
import { validationMsg } from '../../../config/constants';
import MoonLoader from "react-spinners/MoonLoader";
import { commonRoutes, HomeRoutes, SuzukiRoutes } from '../../../config/RouteConfig';
import {useNavigate} from 'react-router-dom';

const OffersForm = () => {
const navigate = useNavigate();
      const { handleSubmit, register, formState: { errors } ,reset} = useForm({
        mode: "onChange"
      });

      const [loading,setLoading] = useState(false);
      const [choice,setChoice] = useState([]);
      const [location,setLocation] = useState([]);

    
      const resetObject = useMemo(()=>{
        const obj = {
          first_name:"",
          last_name:"",
          email:"",
          choice_id:"",
          location_id:"",
          comment:""
        };
        return obj;
      });
    
      const onSubmit = async (data) => {
        console.log(data);

        const finalData = {...data,section_type:2}

        setLoading(true);
        await callApi(HomeApi.currentOffers.method,HomeApi.currentOffers.url,null,finalData,defaultHeader())
        .then((res)=>{
          if(!res?.data?.error)
          {
            setLoading(false);
            reset(resetObject);
            toastSuccess(res?.data?.message);
            navigate(`/${SuzukiRoutes.thankyou}/offers`);
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

      const fetchChoice = useCallback(async () => {
        await callApi(CommonApi.getChoice.method, CommonApi.getChoice.url, null, null, defaultHeader()).then((res) => {
          if (!res?.data?.error) {
            const payload = res?.data?.data;
            if (Array.isArray(payload)) {
              setChoice(payload);
            }
          } 
        }).catch((err) => {
          console.log(err);
        })
      }, []);

      useEffect(()=>{
        fetchLocation();
        fetchChoice();
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
        
        
      </div>
      <div className="row">
        <div className="col">
            <div className="form-group">
                <label htmlFor="choice_id">Vehicle choice<span class="text-danger"> *</span></label>
                <select 
                    name="choice_id" 
                    id="choice_id"
                    {...register("choice_id", {
                        required: "Required"
                    })}
                    className={formclass(errors?.choice_id)}
                >
                    <option value={""}>--Please Select--</option>
                    {choice.length>0 ? 
                      choice.map((v,i)=>(
                        <option value={v?.id}>{v?.title}</option>
                      ))
                    :""}
                </select>
                {displayError(errors?.choice_id?.message)}
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

export default OffersForm