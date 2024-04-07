import React, { useState, useEffect, useCallback, memo } from 'react'
import { CommonApi, HomeApi } from '../../config/api';
import { urls } from '../../config/constants';
import { callApi } from '../../services/ApiService';
import { defaultHeader, toastError, toastSuccess } from '../../services/CommonFunction';
// import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import { Navigation,Pagination, EffectFade, Autoplay } from 'swiper'
import { image2svg } from '../../utilsfunctions/Svg';
import { commonRoutes, HomeRoutes, SuzukiRoutes } from '../../config/RouteConfig';
import { Link } from "react-router-dom";
import AOS from 'aos';
import "aos/dist/aos.css";
import MoveCursorToTop from '../../services/MoveCursorToTop';
const Download = () => {

  MoveCursorToTop();
  const [data,setData] = useState([]);
  
  const fetchData = useCallback(async ()=>{
    await callApi(CommonApi.getBrochure.method,CommonApi.getBrochure.url,null,null,defaultHeader()).then((res) => {
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
     <section className="hero__banner_inner--block" style={{backgroundImage: "url('../images/about-hero-banner.jpg')"}}>
          <div className="container">
              <div className="page__title">
                  <h2 className="h6 text-white mb-0">DOWNLOAD BROCHURE</h2>
              </div>
          </div>
        </section>
        <section className="about_us--block py-5 bg-white">
          <div className="container">
            <div class="row">
            {data.map((d,i)=>(
                (d.type=='1')?
                
                <div class="col-md-3">
                    <figure class="text-center"><a href={`${urls.dir_url}/${d?.files}`} target="_blank"><img src={`${urls.dir_url}/${d?.image}`} alt="Exterior"/><h4 style={{marginTop:'5px'}}>{d?.title}</h4></a></figure>
                </div>
                : null
                )
                )}
                
            </div>
          </div>
        </section>    
     </>
  )
}

export default Download