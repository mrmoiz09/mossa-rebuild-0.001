import React, { useState, useEffect, useCallback } from 'react';
import { CommonApi, HomeApi } from '../../config/api';
import { defaultHeader, toastError } from '../../services/CommonFunction';
import { urls } from '../../config/constants';
import { callApi } from '../../services/ApiService';
import { commonRoutes, HomeRoutes, SuzukiRoutes } from '../../config/RouteConfig';
import MoveCursorToTop from '../../services/MoveCursorToTop';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ServiceOfferForm from './Forms/ServiceOfferForm';

const ServiceOffer = () => {
  MoveCursorToTop();

  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const res = await callApi(CommonApi.getSettings.method, CommonApi.getSettings.url, null, null, defaultHeader());

      if (!res?.data?.error) {
        const payload = res?.data?.data;

        if (Array.isArray(payload) && payload?.length > 0) {
          for (let p of payload) {
            if (p?.key_name === 'service-offer') {
              setData(p?.key_value);
            }
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  const fetchData1 = useCallback(async () => {
    try {
      const res = await callApi(CommonApi.getPageBanner.method, CommonApi.getPageBanner.url, null, null, defaultHeader());

      if (!res?.data?.error) {
        const payload = res?.data?.data;

        if (Array.isArray(payload) && payload?.length > 0) {
          setData1(payload.filter((d) => d?.type === '1' && d?.pages === '7'));
        }
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchData();
    fetchData1();
  }, []);

  const settings = {
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
    fade: true,
  };

  return (
    <section className="enquiry--block" style={{ backgroundImage: `url(${urls.dir_url}/${data})` }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="enquiry__form bg-white">
              <Slider {...settings}>
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
              <ServiceOfferForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOffer;
