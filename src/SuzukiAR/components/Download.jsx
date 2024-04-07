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
                    <figure class="text-center"><a href="https://frontend.moosagroup.com/public/images/suzuki/CIAZ-4.pdf" target="_blank"><img src="https://frontend.moosagroup.com/public/images/suzuki/ciaz-model.jpg" alt="Exterior"/><h4 style={{marginTop:'5px'}}>CIAZ</h4></a></figure>
                </div>
                <div class="col-md-3">
                    <figure class="text-center"><a href="https://frontend.moosagroup.com/public/images/suzuki/SWIFT-4.pdf" target="_blank"><img src="https://frontend.moosagroup.com/public/images/suzuki/swift-model.jpg" alt="Exterior"/><h4 style={{marginTop:'5px'}}>SWIFT</h4></a></figure>
                </div>
                <div class="col-md-3">
                    <figure class="text-center"><a href="https://frontend.moosagroup.com/public/images/suzuki/ERTIGA.pdf" target="_blank"><img src="https://frontend.moosagroup.com/public/images/suzuki/ertiga-model.jpg" alt="Exterior"/><h4 style={{marginTop:'5px'}}>ERTIGA</h4></a></figure>
                </div>
                <div class="col-md-3">
                    <figure class="text-center"><a href="https://frontend.moosagroup.com/public/images/suzuki/VITARA-3.pdf" target="_blank"><img src="https://frontend.moosagroup.com/public/images/suzuki/vitara-model.jpg" alt="Exterior"/><h4 style={{marginTop:'5px'}}>VITARA</h4></a></figure>
                </div>
                <div class="col-md-3">
                    <figure class="text-center"><a href="https://frontend.moosagroup.com/public/images/suzuki/DZIRE-4.pdf" target="_blank"><img src="https://frontend.moosagroup.com/public/images/suzuki/dzire-model.jpg" alt="Exterior"/><h4 style={{marginTop:'5px'}}>DZIRE</h4></a></figure>
                </div>
                <div class="col-md-3">
                    <figure class="text-center"><a href="https://frontend.moosagroup.com/public/images/suzuki/SUZUKI-BALENO.pdf" target="_blank"><img src="https://frontend.moosagroup.com/public/images/suzuki/baleno-model.jpg" alt="Exterior"/><h4 style={{marginTop:'5px'}}>BALENO</h4></a></figure>
                </div>
                <div class="col-md-3">
                    <figure class="text-center"><a href="https://frontend.moosagroup.com/public/images/suzuki/JIMNY-4.pdf" target="_blank"><img src="https://frontend.moosagroup.com/public/images/suzuki/jimmy-model.jpg" alt="Exterior"/><h4 style={{marginTop:'5px'}}>JIMNY</h4></a></figure>
                </div>
                <div class="col-md-3">
                    <figure class="text-center"><a href="https://frontend.moosagroup.com/public/images/suzuki/CARRY-4.pdf" target="_blank"><img src="https://frontend.moosagroup.com/public/images/suzuki/carry-model.jpg" alt="Exterior"/><h4 style={{marginTop:'5px'}}>CARRY</h4></a></figure>
                </div>
            </div>
        </div>
        </section>        
     </>
  )
}

export default Download