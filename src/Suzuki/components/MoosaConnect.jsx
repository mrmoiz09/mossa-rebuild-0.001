import React, { useState, useEffect, useCallback, memo } from 'react'
import { urls } from '../../config/constants'
import { CommonApi } from '../../config/api';
import { callApi } from '../../services/ApiService';
import { defaultHeader, toastError, toastSuccess, validateJsonString } from '../../services/CommonFunction';

const MoosaConnect = () => {
    const [data1,setData1] = useState([]);
      const [data2,setData2] = useState([]);
       const [data,setData] = useState([]);
    const fetchData1 = useCallback(async ()=>{
    await callApi(CommonApi.getSettings.method,CommonApi.getSettings.url,null,null,defaultHeader()).then((res) => {
    if (!res?.data?.error) {
      const arr = [];
           const payload = res?.data?.data;
           if(Array.isArray(payload) && payload?.length>0){
              
              for(let p of payload)
                {
                    if(p?.key_name=='moosa-connect'){
                        setData2(p?.key_value);
                        console.log(p?.key_value);
                    }
                    if(p?.key_name=='moosa-connect-image'){
                        setData1(p?.key_value);
                        console.log(p?.key_value);
                    }
                    if(p?.key_name=='moosa-connect-loyalty'){
                        setData(p?.key_value);
                        console.log(p?.key_value);
                    }
                }
                
              
           }
       } else {
        // toastError(res?.data?.message);
      }
   }).catch((err) => {
        // toastError(err?.response?.data?.message);
      })
  },[]);
   useEffect(()=>{
    fetchData1();
   },[]);

  return (
        <section class="moosa_connect--block pb-5"  style={{paddingTop:"205px"}}>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="page__title dark-line mb-5">
                            <h2 class="h6 mb-0">Moosa Connect</h2>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="moosa_connect__content">
                         <span  dangerouslySetInnerHTML={{ __html: data2 }}></span>  
                            
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="moosa_connect__banner">
                            {/* <img src="./images/moosa-connect-banner.png" alt="Moosa Connect Banner"/> */}
                            <img src={`${urls.dir_url}/${data1}`} alt="Moosa Connect Banner"/>
                        </div>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-md-12">
                        <div class="terms__conditions">
                            <hr/>
                            <span  dangerouslySetInnerHTML={{ __html: data }}></span>  
	
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
  )
}

export default MoosaConnect