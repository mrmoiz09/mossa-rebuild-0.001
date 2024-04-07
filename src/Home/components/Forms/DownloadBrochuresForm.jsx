import React,{useCallback, useEffect, useMemo,useState} from 'react'
import { useForm } from "react-hook-form";
import { CommonApi, HomeApi } from '../../../config/api';
import { callApi } from '../../../services/ApiService';
import { displayError, formclass, isDateSameOrAfter, unchecked_checkbox } from '../../../services/FormCommon';
import { defaultHeader, toastError, toastSuccess } from '../../../services/CommonFunction';
import { phonePattern } from '../../../services/Patterns';
import { validationMsg } from '../../../config/constants';
import { todayDate } from '../../../services/DateAndTime';
import MoonLoader from "react-spinners/MoonLoader";
import {useNavigate} from 'react-router-dom';
import { commonRoutes, HomeRoutes, SuzukiRoutes } from '../../../config/RouteConfig';

const DownloadBrochuresForm = () => {
const navigate = useNavigate();

    const { handleSubmit, register, formState: { errors } ,reset,getValues} = useForm({
        mode: "onChange"
      });

      const [loading,setLoading] = useState(false);
      const [franchise,setFranchise] = useState([]);

    
      const resetObject = useMemo(()=>{
        const obj = {
          first_name:"",
          last_name:"",
          email:"",
          phone:"",
          wish_type:"",
          enquiry:"",
        };
        return obj;
      });
    
      const onSubmit = async (data) => {
        console.log(data);
        const finalData ={...data,section_type:1}
        setLoading(true);
        await callApi(HomeApi.download_brochures.method,HomeApi.download_brochures.url,null,finalData,defaultHeader())
        .then((res)=>{
          if(!res?.data?.error)
          {
            setLoading(false);
            reset(resetObject);
            unchecked_checkbox("#is_wish");
            toastSuccess(res?.data?.message);
            navigate(`/${HomeRoutes.thankyou}/download-brochures`);
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
        fetchFranchise();
      },[]);


  return (
    <>

    {!loading ? 
    <form onSubmit={handleSubmit(onSubmit)}>
        
      <div className="row">
        <div className="col-md-6 col-sm-6">
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
        <div className="col-md-6 col-sm-6">
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
        <div className="col-md-12">
            <div className="form-group">
                {/* <label htmlFor="wish_type">wish_type</label> */}
                <select 
                    name="wish_type" 
                    id="wish_type"
                    {...register("wish_type", {
                        required: false
                    })}
                    className={formclass(errors?.wish_type)}
                >
                    <option value={""}>I WISH TO RECEIVE MORE INFORMATION ON</option>
                    {franchise.length>0 ? 
                      franchise.map((v,i)=>(
                        <option value={v?.id}>{v?.title}</option>
                      ))
                    :""}
                    
                </select>
                {displayError(errors?.wish_type?.message)}
            </div>
        </div>
      </div>
     
      
      <div className="row">
        <div className="col-md-12">
        <div className="form-group">
            <label htmlFor="enquiry">Comments/Requirement</label>
            <textarea
             
              name="enquiry"
              id="enquiry"
              {...register("enquiry", {
                required: false
              })}
              className={formclass(errors?.enquiry)}
            ></textarea>
            {displayError(errors?.enquiry?.message)}
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
    :
    <div className='row'>
    <div className="col-md-12 col-sm6">
        <MoonLoader color={"#192040"} loading={true} size={60} /></div>
    </div>    
            }
    </>
  )
}

export default DownloadBrochuresForm