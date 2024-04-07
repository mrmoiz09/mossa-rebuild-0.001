import React, { useEffect } from 'react'
import AOS from 'aos';
import { image2svg } from '../../utilsfunctions/Svg';
import { urls } from '../../config/constants';
// import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
// import { Navigation,Pagination, EffectFade, Autoplay } from 'swiper'

const MenuPrice = () => {

  useEffect(()=>{

    image2svg();
    AOS.init();
    AOS.refresh();
  },[]);

  return (
    <>
     <section className="epp--block bg-white py-5">
            <div className="container">
            <div className="page__title">
                <h2 className="h6 text-uppercase">Menu Price</h2>
            </div>
                <div className="row">
                    <div className="col-md-6">
                        <img style={{width:"100%"}} src="https://frontend.moosagroup.com/public/images/menuprice1.jpg" />
                    </div>
                    <div className="col-md-6">
                        <img style={{width:"100%"}} src="https://frontend.moosagroup.com/public/images/menuprice2.jpg" />
                    </div>
                </div>    
            </div>
        </section>
        
    </>
  )
}

export default MenuPrice