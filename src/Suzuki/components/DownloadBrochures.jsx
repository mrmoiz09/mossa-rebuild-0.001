
import DownloadBrochuresForm from './Forms/DownloadBrochuresForm'
import { Link } from "react-router-dom";
import React, { useState, useEffect, useCallback, memo } from 'react'
import { CommonApi, HomeApi } from '../../config/api';
import { defaultHeader, toastError, toastSuccess } from '../../services/CommonFunction';
import { urls } from '../../config/constants';
import { callApi } from '../../services/ApiService';
import { commonRoutes, HomeRoutes, SuzukiRoutes } from '../../config/RouteConfig';
import MoveCursorToTop from '../../services/MoveCursorToTop'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const DownloadBrochures = () => {



  MoveCursorToTop();
const [data,setData] = useState([]);
    const fetchData = useCallback(async ()=>{
    await callApi(CommonApi.getSettings.method,CommonApi.getSettings.url,null,null,defaultHeader()).then((res) => {
    if (!res?.data?.error) {
      const arr = [];
           const payload = res?.data?.data;
           if(Array.isArray(payload) && payload?.length>0){
              
              for(let p of payload)
                {
                    if(p?.key_name=='suzuki-download-brochure'){
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
   const [data1,setData1] = useState([]);

   const fetchData1 = useCallback(async ()=>{
    try
    {
        const res = await callApi(CommonApi.getPageBanner.method,CommonApi.getPageBanner.url,null,null,defaultHeader());

        if(!res?.data?.error)
        {
            const payload = res?.data?.data;
            console.log(payload);
            if(Array.isArray(payload) && payload?.length>0){
                setData1(payload);
            }
        }
    }
    catch(err)
    {
        console.log(err);
    }
   },[]);
  
  useEffect(() => {
      fetchData();
      fetchData1();
    
  }, []);
   const settings = {
        dots: true,
        infinite: true,
        speed: 1300,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        pauseOnHover: true
    };

  return (
    <section className="enquiry--block" style={{ backgroundImage: `url(${urls.dir_url}/${data})` }}>
    <div className="container">
        <div className="row">
            <div className="col-lg-7">
                <div className="enquiry__form bg-white">
                    <Slider className="car__model__slider" {...settings}>
                        {data1.map((d, i) => (
                            <div key={i}>
                                <div className="hero__banner--img centered-img-wrapper" data-aos="fade-down" data-aos-duration="1300">
                                    <img className="lazy-load centered-img" src={`${urls.dir_url}/${d?.image}`} width="1920" height="940" alt="Hero Banner" />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="col-lg-5">
                <div className="enquiry__form bg-white">
                    <div className="page__title dark-line mb-5 text-center">
                        <h2 className="h6 text-uppercase mb-0">Download Brochures</h2>
                    </div>
                    <DownloadBrochuresForm />
                    <div className="tool__free text-center my-4">
                        <a href="tel:80076200"><img className="in-svg" src={`${urls.frontendUrl}/images/toll-free-icon.svg`} alt="Toll Free" /> 80076200</a>
                    </div>
                    <p className="download__link text-center h6 mb-0"><Link to={`/${SuzukiRoutes.download}`}>Click here to download the brochures</Link></p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default DownloadBrochures