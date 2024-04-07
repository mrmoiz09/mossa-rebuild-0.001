import React, { useEffect } from 'react';
import AOS from 'aos';
import { image2svg } from '../../utilsfunctions/Svg';
import { urls } from '../../config/constants';
import Slider from 'react-slick';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper';

const BmEpp = () => {
  useEffect(() => {
    image2svg();
    AOS.init();
    AOS.refresh();
  }, []);

  const settings = {
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
    pauseOnHover: false,
    dots: true,
    prevArrow: <button type="button" className="swiper-button-prev swiper-button" aria-label="Previous"></button>,
    nextArrow: <button type="button" className="swiper-button-next swiper-button" aria-label="Next"></button>
  };

  return (
    <>
      <section className="hero__banner--block epp__banner bg-white">
        <div className="container1">
          <div className="car__model__slider swiper">
            <Slider {...settings}>
              <div className="hero__banner--img centered-img-wrapper" data-aos="fade-down" data-aos-duration="1300">
                <img className="lazy-load centered-img" src={`${urls.frontendUrl}/images/EMI_banner.jpg`} width="1920" height="940" alt="Hero Banner" />
              </div>
              <div className="hero__banner--img centered-img-wrapper" data-aos="fade-down" data-aos-duration="1300">
                <img className="lazy-load centered-img" src={`${urls.frontendUrl}/images/EMI_banner.jpg`} width="1920" height="940" alt="Hero Banner" />
              </div>
            </Slider>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>

      <section className="epp--block bg-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* Your content */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BmEpp;
