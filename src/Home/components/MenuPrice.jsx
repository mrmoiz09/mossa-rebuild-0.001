import React, { useState, useEffect, useCallback } from 'react';
import AOS from 'aos';
import { image2svg } from '../../utilsfunctions/Svg';
import { urls } from '../../config/constants';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { defaultHeader, toastError, toastSuccess, validateJsonString } from '../../services/CommonFunction';
import { callApi } from '../../services/ApiService';
import { CommonApi } from '../../config/api';

const MenuPrice = () => {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const res = await callApi(CommonApi.getSettings.method, CommonApi.getSettings.url, null, null, defaultHeader());

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

  useEffect(() => {
    fetchData();
    image2svg();
    AOS.init();
    AOS.refresh();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    appendDots: dots => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <>
      <section className="epp--block bg-white pb-5" style={{ paddingTop: "205px" }}>
        <div className="container">
          <div className="page__title">
            <h2 className="h6 text-uppercase">Menu Pricing</h2>
          </div>
          <div className="row">
            <Slider {...settings}>
              {data.map((d, i) =>
                d?.types === '1' ? (
                  <div key={i}>
                    <a href={`${urls.dir_url}/${d?.key_value}`} target="_blank">
                      <img style={{ width: "100%" }} src={`${urls.dir_url}/${d?.key_value}`} alt={`Slide ${i}`} />
                    </a>
                  </div>
                ) : null
              )}
            </Slider>
          </div>
        </div>
      </section>
    </>
  )
}

export default MenuPrice;
