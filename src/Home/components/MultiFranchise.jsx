import MultiFranchiseForm from './Forms/MultiFranchiseForm'
import React, { useState, useEffect, useCallback, memo } from 'react'
import { CommonApi, HomeApi } from '../../config/api';
import { defaultHeader, toastError, toastSuccess } from '../../services/CommonFunction';
import { urls } from '../../config/constants';
import { callApi } from '../../services/ApiService';
import { commonRoutes, HomeRoutes, SuzukiRoutes } from '../../config/RouteConfig';
import MoveCursorToTop from '../../services/MoveCursorToTop'

const MultiFranchise = () => {
     MoveCursorToTop();
    const [data,setData] = useState([]);
    const [data2,setData2] = useState([]);
     const [banner,setBanner] = useState([]);
    const fetchData = useCallback(async ()=>{
    await callApi(CommonApi.getSettings.method,CommonApi.getSettings.url,null,null,defaultHeader()).then((res) => {
    if (!res?.data?.error) {
      const arr = [];
           const payload = res?.data?.data;
           if(Array.isArray(payload) && payload?.length>0){
              
              for(let p of payload)
                {
                    if(p?.key_name=='multi-franchise'){
                        setData(p?.key_value);
                        console.log(p?.key_value);
                    }
                    if(p?.key_name=='multi-franchise-content'){
                        setData2(p?.key_value);
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
  useEffect(() => {
      fetchData();
    
  }, []);
  return (
    <section className="enquiry--block enquiry_shop" style={{ backgroundImage: `url(${urls.dir_url}/${data})` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
            <div className="enquiry__form bg-white">
                 <span  dangerouslySetInnerHTML={{ __html: data2 }}></span>  
            
			   
            </div>
            </div>
            <div className="col-lg-7">
              <div className="enquiry__form bg-white">
               <div class="page__title mb-3" style={{textAlign:"center"}}>
                            <h2 className="h6 text-uppercase text-black mb-0" style={{borderBottom: "2px solid #000000"}} >Multi Franchise Body Shop Enquiry</h2>
                        </div>
                <MultiFranchiseForm/>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default MultiFranchise