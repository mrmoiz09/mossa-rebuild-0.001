import React, { useState,useEffect,useCallback } from 'react'
import AOS from 'aos';
import { image2svg } from '../../utilsfunctions/Svg';
import { urls } from '../../config/constants';
import { Navigation,Pagination, EffectFade, Autoplay } from 'swiper'
import { defaultHeader, toastError, toastSuccess, validateJsonString } from '../../services/CommonFunction';
import { callApi } from '../../services/ApiService';
import { CommonApi } from '../../config/api'

const MenuPrice = () => {

  const [data,setData] = useState([]);

  const fetchData = useCallback(async ()=>{
   try
   {
       const res = await callApi(CommonApi.getSettings.method,CommonApi.getSettings.url,null,null,defaultHeader());

       if(!res?.data?.error)
       {
           const payload = res?.data?.data;
           if(Array.isArray(payload) && payload?.length>0){
              const rows = [];  
            payload.forEach((p,i)=>{
                if(p?.key_name=="suzuki")
                {
                  rows.push(p);
                }
              })
              setData(rows);
           }
       }
   }
   catch(err)
   {
       console.log(err);
   }
  },[]);

  useEffect(()=>{
    fetchData();
    image2svg();
    AOS.init();
    AOS.refresh();
  },[]);

  return (
    <>
     <section className="epp--block bg-white pb-5"  style={{paddingTop:"205px"}}>
            <div className="container">
            <div className="page__title">
                <h2 className="h6 text-uppercase">Menu Pricing</h2>
            </div>
                <div className="row">
                  {data.map((d,i)=>
                    (d?.types=='1')?
                       <div className="col-md-6 offset-md-3">
                          <a href={`${urls.dir_url}/${d?.key_value}`} target="_blank"> <img style={{width:"100%"}} src={`${urls.dir_url}/${d?.key_value}`} /></a>
                      </div>
                      :
                      null
                    )}
                    {/* <div className="col-md-6 offset-md-3">
                        <a href="https://frontend.moosagroup.com/public/images/menuprice2.jpg" target="_blank"><img style={{width:"100%"}} src="https://frontend.moosagroup.com/public/images/menuprice2.jpg" /></a>
                    </div> */}
                </div>    
            </div>
        </section>
        
    </>
  )
}

export default MenuPrice