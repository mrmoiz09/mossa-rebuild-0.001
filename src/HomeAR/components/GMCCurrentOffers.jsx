import React, { useEffect } from 'react';
import AOS from 'aos';
import { image2svg } from '../../utilsfunctions/Svg';
import { urls } from '../../config/constants';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CurrentOffersForm from './Forms/CurrentOffersForm';

const GMCCurrentOffers = () => {
  useEffect(() => {
    image2svg();
    AOS.init();
    AOS.refresh();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <section className="hero__banner--block epp__banner bg-white">
        <div className="container">
          <Slider {...settings}>
            <div>
              <div className="hero__banner--img centered-img-wrapper" data-aos="fade-down" data-aos-duration="1300">
                <img className="lazy-load centered-img" src={`${urls.frontendUrl}/images/gmc_offer2.jpg`} width="1920" height="940" alt="Hero Banner" />
              </div>
            </div>
            <div>
              <div className="hero__banner--img centered-img-wrapper" data-aos="fade-down" data-aos-duration="1300">
                <img className="lazy-load centered-img" src={`${urls.frontendUrl}/images/gmc_offer1.jpg`} width="1920" height="940" alt="Hero Banner" />
              </div>
            </div>
          </Slider>
        </div>
      </section>

      <section className="epp--block bg-white py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12">
              <p>Kindly fill in your contact details below OR Reach to us at 80076200 to know more:</p>
              <CurrentOffersForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GMCCurrentOffers;
