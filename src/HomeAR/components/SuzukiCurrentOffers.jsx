
import React, { useEffect } from 'react';
import AOS from 'aos';
import { image2svg } from '../../utilsfunctions/Svg';
import { urls } from '../../config/constants';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SuzukiCurrentOffersForm from './Forms/SuzukiCurrentOffersForm';

const SuzukiCurrentOffers = () => {
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
      <section className="enquiry--block" style={{ backgroundImage: `url(${urls.frontendUrl}/images/swift-banner.jpg)` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="enquiry__form bg-white">
                <Slider {...settings}>
                  <div className="hero__banner--img centered-img-wrapper" data-aos="fade-down" data-aos-duration="1300">
                    <img className="lazy-load centered-img" src={`${urls.frontendUrl}/images/suzuki_offer1.jpg`} width="1920" height="940" alt="Hero Banner" />
                  </div>
                  <div className="hero__banner--img centered-img-wrapper" data-aos="fade-down" data-aos-duration="1300">
                    <img className="lazy-load centered-img" src={`${urls.frontendUrl}/images/suzuki_offer1.jpg`} width="1920" height="940" alt="Hero Banner" />
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="enquiry__form bg-white">
                <div class="page__title mb-3" style={{ textAlign: "center" }}>
                  <h2 className="h6 text-uppercase text-black mb-0" style={{ borderBottom: "2px solid #000000" }}>Suzuki Current Offer</h2>
                </div>
                <SuzukiCurrentOffersForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SuzukiCurrentOffers;
