import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from "react-helmet";
// import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';
import { CommonApi } from '../../config/api';
import { callApi } from '../../services/ApiService';
import { defaultHeader } from '../../services/CommonFunction';
import { urls } from '../../config/constants';
import GMCCurrentOffersForm from './Forms/GMCCurrentOffersForm';
import MoveCursorToTop from '../../services/MoveCursorToTop';
import { image2svg } from '../../utilsfunctions/Svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GMCCurrentOffers = () => {
  MoveCursorToTop();

  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const res = await callApi(CommonApi.getPageBanner.method, CommonApi.getPageBanner.url, null, null, defaultHeader());
      if (!res?.data?.error) {
        const payload = res?.data?.data;
        if (Array.isArray(payload) && payload?.length > 0) {
          setData(payload);
        }
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  const fetchData1 = useCallback(async () => {
    try {
      const res = await callApi(CommonApi.getSettings.method, CommonApi.getSettings.url, null, null, defaultHeader());
      if (!res?.data?.error) {
        const payload = res?.data?.data;
        if (Array.isArray(payload) && payload?.length > 0) {
          for (let p of payload) {
            if (p?.key_name === 'gmc-offer') {
              setData1(p?.key_value);
            }
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchData();
    fetchData1();
    image2svg();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    }
  };

  return (
    <section className="enquiry--block" style={{ backgroundImage: `url(${urls.dir_url}/${data1})` }}>
      <Helmet>
        {/* Google Tag Manager script */}
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="enquiry__form bg-white mt">
              <div className="car__model__slider swiper">
              <Slider className="car__adventure__slider" fade={true} nextArrow={<div className="swiper-button-next swiper-button"></div>} prevArrow={<div className="swiper-button-prev swiper-button"></div>}>
    {/* {middle_images.map((e, i) => (
        <div className="car__adventure--item" key={i} style={{backgroundImage: `url(${urls.dir_url}/${e?.image})`}}>
            <div className="container">
                <div className="car__adventure--details">
                    <h4 className="text-uppercase text-white" data-aos="fade-up">{e?.title}</h4>
                    <p data-aos="fade-up">{e?.description}</p>
                    <p className="mt-5 mb-0" data-aos="fade-up">
                        <a href={`${e?.link}`} target="_blank" className="btn">View More</a>
                    </p>
                </div>
            </div>
        </div>
    ))} */}
</Slider>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="enquiry__form bg-white">
              <div className="page__title mb-3" style={{ textAlign: "center" }}>
                <h2 className="h6 text-uppercase text-black mb-0" style={{ borderBottom: "2px solid #000000" }}>GMC Current Offers</h2>
              </div>
              <GMCCurrentOffersForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GMCCurrentOffers;
