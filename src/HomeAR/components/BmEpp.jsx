import React, { useEffect } from 'react';
import AOS from 'aos';
import { image2svg } from '../../utilsfunctions/Svg';
import { urls } from '../../config/constants';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BmEpp = () => {
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
                <img className="lazy-load centered-img" src={`${urls.frontendUrl}/images/EMI_banner.jpg`} width="1920" height="940" alt="Hero Banner" />
              </div>
            </div>
            <div>
              <div className="hero__banner--img centered-img-wrapper" data-aos="fade-down" data-aos-duration="1300">
                <img className="lazy-load centered-img" src={`${urls.frontendUrl}/images/EMI_banner.jpg`} width="1920" height="940" alt="Hero Banner" />
              </div>
            </div>
          </Slider>
        </div>
      </section>

      <section className="epp--block bg-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4>Easy Payment Plan (EPP) applicable on Service and Parts bill of over 100 OMR</h4>
              <p>* 0% Interest on purchase and 100% ease on repayment – Bank Muscat easy payment plan is crafted to make your credit card purchases easy on your wallet for service and parts bill over 100 OMR</p>
              <h4>Features:</h4>
              <ul>
                <li>0% Interest on purchases made on service and parts bill of over 100 OMR</li>
                <li>Buy now and pay later with fixed monthly installments for 12 months</li>
                <li>No additional documents required</li>
                <li>Tie-ups with a range of merchants across Oman</li>
              </ul>
              <h4>Eligibility:</h4>
              <p>All Bank Muscat credit cardholders (excluding corporate credit card holders) are eligible to take up this offer.​</p>
              <br />
              <p>All Bank Muscat credit cardholders (excluding corporate credit card holders) are eligible to take up this offer.​</p>
              <br />
              <ul className="epp__website d-flex flex-wrap align-content-center justify-content-between list-unstyled">
                <li><a href="https://www.bankmuscat.com/en/bm-cards/Pages/epp.aspx" target="_blank" className="btn"><span>Clicke here to visit Bank Muscat website to know more about EPP</span></a></li>
                <li>
                  <a href="https://www.bankmuscat.com/en/bm-cards/Pages/epp.aspx" target="_blank"><img src={`${urls.frontendUrl}/images/bank_muscat.png`} alt="Bank Muscat" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BmEpp;
