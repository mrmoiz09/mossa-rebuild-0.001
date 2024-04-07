import React, { useEffect } from 'react';
import AOS from 'aos';
import { image2svg } from '../../utilsfunctions/Svg';
import { urls } from '../../config/constants';
import Slider from 'react-slick'; // Import Slick React Slider

const Umbrella = () => {

  useEffect(() => {
    image2svg();
    AOS.init();
    AOS.refresh();
  }, []);

  // Slick React Slider settings
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 2500,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <>
      <section className="epp--block bg-white pb-5" style={{ paddingTop: "205px" }}>
        <div className="container">
          <div className="page__title">
            <h2 className="h6 text-uppercase">OUR UMBRELLA</h2>
          </div>
          <Slider {...sliderSettings}> {/* Use Slick React Slider */}
            <div className="col-md-3">
              <a href="https://gmc.moosagroup.com/" target="_blank" >
                <img src='https://api.moosagroup.com/public/images/default/GMC.jpg' alt="GMC" />
              </a>
            </div>
            <div className="col-md-3">
              <a href="https://frontend.moosagroup.com/suzuki" target="_blank" >
                <img src='https://api.moosagroup.com/public/images/default/SUZUKI.jpg' alt="SUZUKI" />
              </a>
            </div>
            <div className="col-md-3">
              <a href="https://www.sixt.global/php/reservation/home?language=en_GB&posl=OM&land=OM&fir=412" target="_blank" >
                <img src='https://api.moosagroup.com/public/images/default/SIXT.jpg' alt="SIXT" />
              </a>
            </div>
            <div className="col-md-3">
              <a href="https://frontend.moosagroup.com/home/part-enquiry" target="_blank" >
                <img src='https://api.moosagroup.com/public/images/default/SERVICES.jpg' alt="SERVICES" />
              </a>
            </div>
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Umbrella;
