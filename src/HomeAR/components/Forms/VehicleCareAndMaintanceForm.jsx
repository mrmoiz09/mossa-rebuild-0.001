import React,{useMemo,useState,useEffect,useCallback} from 'react'
import { useForm } from "react-hook-form";
import { CommonApi, HomeApi } from '../../../config/api';
import { callApi } from '../../../services/ApiService';
import { displayError, formclass } from '../../../services/FormCommon';
import { defaultHeader, toastError, toastSuccess } from '../../../services/CommonFunction';
import MoonLoader from "react-spinners/MoonLoader";
import { phonePattern } from '../../../services/Patterns';
import { validationMsg } from '../../../config/constants';


const VehicleCareAndMaintanceForm = () => {

    const { handleSubmit, register, formState: { errors } ,reset} = useForm({
        mode: "onChange"
      });

      const [loading,setLoading] = useState(false);
      const [maintenanceProduct,SetMaintenanceProduct] = useState([]);
    
      const resetObject = useMemo(()=>{
        const obj = {
          first_name:"",
          last_name:"",
          email:"",
          phone:"",
          product:"",
          comment:""
        };
        return obj;
      });
    
      const onSubmit = async (data) => {
        console.log(data);
        setLoading(true);
        await callApi(HomeApi.vehicle_care_and_maintance_product.method,HomeApi.vehicle_care_and_maintance_product.url,null,data,defaultHeader())
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
      
      const fetchMaintenanceProduct = useCallback(async () => {
        await callApi(CommonApi.getMaintenanceProduct.method, CommonApi.getMaintenanceProduct.url, null, null, defaultHeader()).then((res) => {
          if (!res?.data?.error) {
            const payload = res?.data?.data;
            if (Array.isArray(payload)) {
              SetMaintenanceProduct(payload);
            }
          } 
        }).catch((err) => {
          console.log(err);
        })
      }, []);

      useEffect(()=>{
        fetchMaintenanceProduct();
      },[]);

  return (
    <>
    {/* <h3 className='text-center'>Vehicle and Maintenance Product</h3> */}

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
                required: true
              })}
              className={formclass(errors?.email)}
            />
            {displayError(errors?.email?.message)}
          </div>
        </div>
        <div className="col">
        <div className="form-group">
            <label htmlFor="phone">phone<span class="text-danger"> *</span></label>
            <input
              type="text"
              name="phone"
              id="phone"
              {...register("phone", {
                required: true,
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
                <label htmlFor="product">Product<span class="text-danger"> *</span></label>
                <select 
                    name="product" 
                    id="product"
                    {...register("product", {
                        required: true
                    })}
                    className={formclass(errors?.product)}
                >
                    <option value={""}>--Please Select--</option>
                    {maintenanceProduct.length>0 ? 
                      maintenanceProduct.map((v,i)=>(
                        <option value={v?.id}>{v?.title}</option>
                      ))
                    :""}
                </select>
                {displayError(errors?.product?.message)}
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

export default VehicleCareAndMaintanceForm