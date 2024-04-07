import React,{useMemo,useState,useEffect,useCallback} from 'react'
import { useForm } from "react-hook-form";
import { HomeApi,CommonApi } from '../../../config/api';
import { callApi } from '../../../services/ApiService';
import { displayError, formclass } from '../../../services/FormCommon';
import { defaultHeader, toastError, toastSuccess } from '../../../services/CommonFunction';
import MoonLoader from "react-spinners/MoonLoader";
import { phonePattern } from '../../../services/Patterns';
import { validationMsg } from '../../../config/constants';
import { commonRoutes, HomeRoutes, SuzukiRoutes } from '../../../config/RouteConfig';
import {useNavigate} from 'react-router-dom';

const RequestQuoteForm = () => {
const navigate = useNavigate();
    const { handleSubmit, register, formState: { errors } ,reset} = useForm({
        mode: "onChange"
      });

      const [loading,setLoading] = useState(false);
      const [franchise,setFranchise] = useState([]);

    
      const resetObject = useMemo(()=>{
        const obj = {
          title:"",
          first_name:"",
          last_name:"",
          phone:"",
          email:"",
          franchise:"",
          comment:""
        };
        return obj;
      });
    
      const onSubmit = async (data) => {
        console.log(data);
        const finalData = {...data,section_type:2};
        setLoading(true);
        await callApi(HomeApi.requestQuote.method,HomeApi.requestQuote.url,null,data,defaultHeader())
        .then((res)=>{
          if(!res?.data?.error)
          {
            setLoading(false);
            reset(resetObject);
            toastSuccess(res?.data?.message);
            navigate(`/${SuzukiRoutes.thankyou}/request-a-quote`);
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
                <label htmlFor="franchise">Franchise<span class="text-danger"> *</span></label>
                <select 
                    name="franchise" 
                    id="franchise"
                    {...register("franchise", {
                        required: "Required"
                    })}
                    className={formclass(errors?.franchise)}
                >
                    <option value={""}>--Please Select--</option>
                    {franchise.length>0 ? 
                      franchise.map((v,i)=>(
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

export default RequestQuoteForm