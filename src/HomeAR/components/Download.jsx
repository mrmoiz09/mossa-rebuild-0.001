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
  return (
    <>
     <section className="hero__banner_inner--block" style={{backgroundImage: "url('../images/downloadbanner.jpg')"}}>
          <div className="container">
              <div className="page__title">
                  <h2 className="h6 text-white mb-0">DOWNLOAD BROCHURE</h2>
              </div>
          </div>
        </section>
        <section className="about_us--block py-5 bg-white">
          <div className="container">
            <div class="row">
                <div class="col-md-3">
                    <figure class="text-center"><a href="https://frontend.moosagroup.com/public/images/new_images/gmc/GMC-YUKON.pdf" target="_blank"><img src="https://frontend.moosagroup.com/public/images/new_images/gmc/blog3-gmc-yukon-370x210.png" alt="Exterior"/><h4 style={{marginTop:'5px'}}>YUKON</h4></a></figure>
                </div>
                <div class="col-md-3">
                    <figure class="text-center"><a href="https://frontend.moosagroup.com/public/images/new_images/gmc/Sierra-Catalogue-Crew-Cab-Made-in-2021.pdf" target="_blank"><img src="https://frontend.moosagroup.com/public/images/new_images/gmc/blog4-gmc-sierra-370x210.png" alt="Exterior"/><h4 style={{marginTop:'5px'}}>SIERRA | CREW CAB</h4></a></figure>
                </div>
                <div class="col-md-3">
                    <figure class="text-center"><a href="https://frontend.moosagroup.com/public/images/new_images/gmc/Sierra-Catalogue-Reg-Cab-Made-in-2021.pdf" target="_blank"><img src="https://frontend.moosagroup.com/public/images/new_images/gmc/blog4-gmc-sierra-370x210.png" alt="Exterior"/><h4 style={{marginTop:'5px'}}>SIERRA | REGULAR CAB</h4></a></figure>
                </div>
                <div class="col-md-3">
                    <figure class="text-center"><a href="https://frontend.moosagroup.com/public/images/new_images/gmc/GMC-ACADIA.pdf" target="_blank"><img src="https://frontend.moosagroup.com/public/images/new_images/gmc/blog1-gmc-acadia-370x210.png" alt="Exterior"/><h4 style={{marginTop:'5px'}}>ACADIA</h4></a></figure>
                </div>
                
                <div class="col-md-3">
                    <figure class="text-center"><a href="https://frontend.moosagroup.com/public/images/new_images/gmc/GMC-TERRAIN-2022.pdf" target="_blank"><img src="https://frontend.moosagroup.com/public/images/new_images/gmc/blog2-gmc-terrain-370x210.png" alt="Exterior"/><h4 style={{marginTop:'5px'}}>TERRAIN</h4></a></figure>
                </div>
                <div class="col-md-3">
                    <figure class="text-center"><a href="https://frontend.moosagroup.com/public/images/new_images/gmc/YUKON-SLT-BASE.pdf" target="_blank"><img src="https://frontend.moosagroup.com/public/images/new_images/gmc/blog3-gmc-yukon-370x210.png" alt="Exterior"/><h4 style={{marginTop:'5px'}}>YUKON SLT BASE</h4></a></figure>
                </div>
                <div class="col-md-3">
                    <figure class="text-center"><a href="https://frontend.moosagroup.com/public/images/new_images/gmc/GMC-YUKON-SLT-CLASSIC2.pdf" target="_blank"><img src="https://frontend.moosagroup.com/public/images/new_images/gmc/blog3-gmc-yukon-370x210.png" alt="Exterior"/><h4 style={{marginTop:'5px'}}>YUKON SLT CLASSIC</h4></a></figure>
                </div>
            </div>
          </div>
        </section>    
     </>
  )
}

export default Download