import React, { useState, useEffect, useCallback, memo } from 'react'
import { CommonApi, HomeApi } from '../../config/api';
import { defaultHeader, toastError, toastSuccess } from '../../services/CommonFunction';
import { urls } from '../../config/constants';
import { callApi } from '../../services/ApiService';
import { commonRoutes, HomeRoutes, SuzukiRoutes } from '../../config/RouteConfig';
import MoveCursorToTop from '../../services/MoveCursorToTop'
import  aboutherobanner from "../../images/aboutherobanner.jpg"

const History = () => {
  MoveCursorToTop();
  const [data,setData] = useState([]);
    const fetchData = useCallback(async ()=>{
    await callApi(CommonApi.getSettings.method,CommonApi.getSettings.url,defaultHeader()).then((res) => {
    if (!res?.data?.error) {
      
           const payload = res?.data?.data;
           if(Array.isArray(payload) && payload?.length>0){
              setData(payload);
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
      <>
        <section className="hero__banner_inner--block" style={{backgroundImage: `url(${aboutherobanner})`}}>
          <div className="container">
              <div className="page__title">
                  <h2 className="h6 text-white mb-0">Our History</h2>
              </div>
          </div>
        </section>
        <section className="about_us--block py-5 bg-white">
          <div className="container">
          {data.map((d,i)=>
                (d?.key_name=='history-page')?
                <p dangerouslySetInnerHTML={{ __html:  d?.key_value }}></p>
               
              :
              null
            )}
          </div>
        </section>
      </>
  )
}

export default History