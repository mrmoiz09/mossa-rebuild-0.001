import React, { useState, useEffect, useCallback, memo } from 'react'
import { CommonApi, HomeApi } from '../../config/api';
import { urls } from '../../config/constants';
import { callApi } from '../../services/ApiService';
import { defaultHeader, toastError, toastSuccess } from '../../services/CommonFunction';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import { Navigation,Pagination, EffectFade, Autoplay } from 'swiper'
import { image2svg } from '../../utilsfunctions/Svg';
import { commonRoutes, HomeRoutes, SuzukiRoutes } from '../../config/RouteConfig';
import { Link } from "react-router-dom";
import AOS from 'aos';
import "aos/dist/aos.css";
import MoveCursorToTop from '../../services/MoveCursorToTop';
const Home = () => {

  MoveCursorToTop();

  const [banners, setBanners] = useState([]);

  const fetchData = useCallback(async () => {
    await callApi(HomeApi.getBannerOfTypeHome.method, HomeApi.getBannerOfTypeHome.url, null, null, defaultHeader()).then((res) => {
      if (!res?.data?.error) {
        // toastSuccess(res?.data?.message);
        const payload = res?.data?.data;
        if (Array.isArray(payload)) {
          setBanners(payload);
        }
      } else {
        toastError(res?.data?.message);
      }
    }).catch((err) => {
      toastError(err?.response?.data?.message);
    })
  }, []);



  useEffect(() => {
    // fetchData();
    image2svg();
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>

      <section className="hero__banner--block overlay gradient-overlay">
            <div className="hero__banner--img centered-img-wrapper" data-aos="fade-down" data-aos-duration="1300">
                <img className="lazy-load centered-img" src={`${urls.frontendUrl}/images/GMC_MY22-Sierra_Denali-Ultimate_Hero_30s_16x9_EN.gif`} width="1920" height="1172" alt="Hero Banner"/>
            </div>
            <div className="hero__banner--content text-center">
                <div data-aos="fade-up" data-aos-duration="1100">
                    <h1 className="text-white text-uppercase h4">Road trips aren’t measured by mile markers, but by moments.</h1>
                    {/* <a href="#" className="btn">view More</a> */}
                    <Link to={`/${commonRoutes.aboutusRoute}`} className="btn">view More</Link>
                </div>
            </div>
        </section>

        <section className="car__cetegory--block blue-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="text-white text-center text-uppercase mb-5" data-aos="fade-up">FIND YOUR DREAM CAR with us</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4" data-aos="fade-up" data-aos-duration="600">
                        <div className="car__cetegory--item position-relative">
                            <div className="car__cetegory--img centered-img-wrapper">
                                {/* <a href="#"><img className="lazy-load centered-img" src={`${urls.frontendUrl}/images/category-banner-1.jpg`} width="350" height="405" alt="Category" /></a> */}
                                <a href="https://gmc.moosagroup.com/" target="_blank"><img className="lazy-load centered-img" src={`${urls.frontendUrl}/images/new_images/gmc/gmc-findyourdreamcar2-508x598.png`} width="350" height="405" alt="Category" /></a>
                            </div>
                            <div className="car__cetegory--name d-flex align-content-center justify-content-between bg-white w-100" style={{padding:"15px"}}>
                                <h4 className="text-uppercase mb-0">gmc</h4>
                                <a href="https://gmc.moosagroup.com/" target="_blank" className="circle__arrow"><img className="in-svg" src={`${urls.frontendUrl}/images/circle-arrow.svg`} alt="Arrow" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-duration="900">
                        <div className="car__cetegory--item position-relative">
                            <div className="car__cetegory--img centered-img-wrapper">
                                {/* <a href="#"><img className="lazy-load centered-img" src={`${urls.frontendUrl}/images/category-banner-2.jpg`} width="350" height="405" alt="Category"/></a> */}
                                <Link to={`/${SuzukiRoutes.home}`}><img className="lazy-load centered-img" src={`${urls.frontendUrl}/images/new_images/suzuki/suzuki-find-your-dream-car1-508x598.png`} width="350" height="405" alt="Category"/></Link>
                            </div>
                            <div className="car__cetegory--name d-flex align-content-center justify-content-between bg-white w-100" style={{padding:"15px"}}>
                                <h4 className="text-uppercase mb-0">suzuki</h4>
                                <Link to={`/${SuzukiRoutes.home}`} className="circle__arrow"><img className="in-svg" src={`${urls.frontendUrl}/images/circle-arrow.svg`} alt="Arrow"/></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-duration="1200">
                        <div className="car__cetegory--item position-relative">
                            <div className="car__cetegory--img centered-img-wrapper">
                                {/* <a href="#"><img className="lazy-load centered-img" src={`${urls.frontendUrl}/images/category-banner-3.jpg`} width="350" height="405" alt="Category"/></a> */}
                                <Link to={`/${HomeRoutes.service_enquiry}`}><img className="lazy-load centered-img" src={`${urls.frontendUrl}/images/svs-findyourdreamcar-508x598-2.png`} width="350" height="405" alt="Category"/></Link>
                            </div>
                            <div className="car__cetegory--name d-flex align-content-center justify-content-between bg-white w-100" style={{padding:"15px"}}>
                                <h4 className="text-uppercase mb-0">Service</h4>
                                <Link to={`/${HomeRoutes.service_enquiry}`} className="circle__arrow"><img className="in-svg" src={`${urls.frontendUrl}/images/circle-arrow.svg`} alt="Arrow"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

     <section className="about__marh--block blue-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12" data-aos="fade-right">
                        <div className="about__marh--col">
                            <h4 className="text-uppercase text-white">About Moosa Abdul Rahman Hassan & Company</h4>
                            <p>Oman’s affinity for cars has its origins in the entrepreneurial spirit of the Moosa Group, a family-owned business that pioneered the growth of the automotive sector in pre-renaissance times.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12" data-aos="fade-left">
                        <div className="about__marh--col">
                            <h4 className="text-uppercase text-white">Our history</h4>
                            <p>The late Sheikh Moosa AbdulRahman Hassan was a well known Omani businessman, tribal leader, landlord, and a Gulf icon; he was born in an old town Muscat in1902 and finished his studies in the American Mission School. He established a firm in 1927 in supplying coals and foodstuffs to British ships & frigates in Muscat.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12" data-aos="fade-left">
                        <div className="about__marh--col">
                            <h4 className="text-uppercase text-white">Our vision</h4>
                            <p>Moosa is one of the oldest business groups in Oman having been formed in 1927. Steeped in Automotive, Moosa was, in the 1950’s the agent for Holden, from the 60’s the distributor for BEDFORD, from the 70’s the GMC distributor in Oman and more recently from the 80’s, 90’s and 2000 the distributor for Opel & Suzuki amongst others.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mt-4 text-center">
                        <Link to={`/${commonRoutes.aboutusRoute}`} className="btn">view More</Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="gmc__truck--block bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12" data-aos="fade-right">
                        <div className="gmc__truck--banner reveal centered-img-wrapper">
                            {/* <img className="lazy-load centered-img" src={`${urls.frontendUrl}/images/GMC-Truck.jpg`} width="535" height="430" alt="GMC Truck"/> */}
                            <img className="lazy-load centered-img" src={`${urls.frontendUrl}/images/new_images/gmc/gmc-trucks-770x616.png`} width="535" height="430" alt="GMC Truck"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12" data-aos="fade-left">
                        <div className="gmc__truck--details">
                            <h4 className="text-uppercase">GMC TRUCKS</h4>
                            <p>The GMC name is synonymous with quality, with the iconic carmaker responsible for some of the most luxurious and capable vehicles around. Among its selection, you’ll be able to discover a variety of brand-new trucks that are ready and waiting to be taken for a test drive. These bold and capable pickup trucks include the Sierra SLE/SLT, Sierra AT4 and Sierra Denali - each of which comes packed with the style and performance one expects from such a renowned marque.</p>
                            <p>All new trucks are currently available to discover at Moosa Group today. Our welcoming showrooms are the ideal environments in which to get up close to view the full range of attributes of each model, with the infotainment systems, driving aids, and responsive engines all designed to impress the most discerning of drivers. There’s also the practicality of the loadspace to consider, so if you’re looking for a commercial vehicle that doesn’t compromise, look no further than GMC.</p>
                            <p>Click on any of the vehicles listed on this page to find out more about the attributes on offer and to schedule a test drive with a member of our team. We’ll also be delighted to advise you on the various purchasing options that are currently available as well as inform you of any special offers that may be available on your chosen vehicle.</p>
                            <a href="https://gmc.moosagroup.com/" target="_blank" className="btn">view More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="car__adventure--block">
        
        <Swiper className="car__adventure__slider swiper" modules={[EffectFade, Navigation]} navigation={{
                    nextEl: ".swiper-button-next.swiper-button",
                    prevEl: ".swiper-button-prev.swiper-button",
                  }}>
                <SwiperSlide>
                
                        {/* <div className="car__adventure--item" style={{backgroundImage: "url('/images/cta-banner.jpg')"}}> */}
                        <div className="car__adventure--item" style={{backgroundImage: "url('/images/new_images/suzuki/suzuki-command-every-adventure-1920x570.png')"}}>
                            <div className="container">
                                <div className="car__adventure--details">
                                    <h4 className="text-uppercase text-white" data-aos="fade-up">COMMAND EVERY ADVENTURE. </h4>
                                    <p data-aos="fade-up">The Stunning New Coloured Multi-Information Display provides you with all the stets as you barrel around the corners. Coloured Multi-Information Display Cruise Control Auto Gear and Automatic Climate Control </p>
                                    <p className="mt-5 mb-0" data-aos="fade-up">
                                        <Link to={`/${SuzukiRoutes.home}`} className="btn">view More</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                </SwiperSlide> 
                <SwiperSlide>    
                        <div className="car__adventure--item" style={{backgroundImage: "url('/images/cta-banner.jpg')"}}>
                            <div className="container">
                                <div className="car__adventure--details">
                                    <h4 className="text-uppercase text-white">COMMAND. </h4>
                                    <p >The Stunning New Coloured Multi-Information Display provides you with all the stets as you barrel around the corners. Coloured Multi-Information Display Cruise Control Auto Gear and Automatic Climate Control </p>
                                    <p className="mt-5 mb-0" >
                                    <Link to={`/${SuzukiRoutes.home}`} className="btn">view More</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                   </SwiperSlide> 
                <div className="swiper-button swiper-button-next"></div>
                <div className="swiper-button swiper-button-prev"></div>
            </Swiper> 
        </section>

        <section className="ceo--block" style={{backgroundImage: "url('/images/ceo_banner_bg.jpg')"}}>
            <div className="container">
                <div className="ceo__main row justify-content-between align-content-center">
                    <div className="col-lg-4" data-aos="fade-left">
                        <div className="ceo__image">
                            <img className="lazy-load" src={`${urls.frontendUrl}/images/CEO.png`} width="330" height="300" alt="MUSTANSIR LAKDAWALA I CHIEF EXECUTIVE OFFICER "/>
                        </div>
                    </div>
                    <div className="col-lg-7" data-aos="fade-right">
                        <div className="ceo__details">
                            <p className="font-weight-light mb-0">"Nurturing this proud legacy are members of the Moosa family who, through a combination of keen market insight and perceptive leadership, continue to position the Group for strong and sustained corporate growth. Success for this new generation of business leaders is determined not by sales alone, but by the strength and durability..." </p>
                            <h4 className="mt-5 text-uppercase font-weight-light">MUSTANSIR LAKDAWALA I CHIEF EXECUTIVE OFFICER </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>

       

        <section className="our__stories--block blue-bg">
            <div className="main__title">
                <h4 className="text-uppercase text-white" data-aos="fade-up">Our LATEST STORIES</h4>
                <p className="text-white font-weight-light" data-aos="fade-up">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>

            <Swiper className="our__stories__slider swiper"
             modules={[EffectFade, Navigation, Pagination]}  navigation={{
                    nextEl: ".swiper-button-next.swiper-button",
                    prevEl: ".swiper-button-prev.swiper-button", }} slidesPerView={1} loop={true}
                        spaceBetween={30}
                        breakpoints={{
                            0: {
                                spaceBetween: 15,
                                slidesPerView: 1.5,
                                pagination: {
                                    el: ".swiper-pagination",
                                    type: "progressbar",
                                    clickable: true
                                },
                                autoplay: {
                                    delay: 5000,
                                    disableOnInteraction: false
                                }
                            },
                            768: {
                                slidesPerView: 2
                            },
                            1024: {
                                slidesPerView: 4.5
                            },
                            
                        }}
                       
             >
                <div className="swiper-wrapper">
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="our__stories--item bg-white" data-aos="fade-up">
                                <div className="our__stories--images centered-img-wrapper">
                                    <Link to={`/${HomeRoutes.blogs}`}><img className="lazy-load centered-img" src={`${urls.frontendUrl}/images/new_images/gmc/blog1-gmc-acadia-370x210.png`} width="370" height="210" alt="Stories"/></Link>
                                </div>
                                <div className="our__stories--details">
                                    <h4>Moosa is one of the oldest business groups</h4>
                                    <p className="font-weight-light">Moosa is one of the oldest business groups in Oman having been formed in 1927. Steeped in Automotive.</p>
                                    <Link to={`/${HomeRoutes.blogs}`} className="font-weight-bold">Read More {">>"}</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="our__stories--item bg-white" data-aos="fade-up">
                                <div className="our__stories--images centered-img-wrapper">
                                    <Link to={`/${HomeRoutes.blogs}`}><img className="lazy-load centered-img" src={`${urls.frontendUrl}/images/new_images/gmc/blog2-gmc-terrain-370x210.png`} width="370" height="210" alt="Stories"/></Link>
                                </div>
                                <div className="our__stories--details">
                                    <h4>Moosa is one of the oldest business groups</h4>
                                    <p className="font-weight-light">Moosa is one of the oldest business groups in Oman having been formed in 1927. Steeped in Automotive.</p>
                                    <Link to={`/${HomeRoutes.blogs}`} className="font-weight-bold">Read More {">>"}</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="our__stories--item bg-white" data-aos="fade-up">
                                <div className="our__stories--images centered-img-wrapper">
                                    <Link to={`/${HomeRoutes.blogs}`}><img className="lazy-load centered-img" src={`${urls.frontendUrl}/images/new_images/gmc/blog3-gmc-yukon-370x210.png`} width="370" height="210" alt="Stories"/></Link>
                                </div>
                                <div className="our__stories--details">
                                    <h4>Moosa is one of the oldest business groups</h4>
                                    <p className="font-weight-light">Moosa is one of the oldest business groups in Oman having been formed in 1927. Steeped in Automotive.</p>
                                    <Link to={`/${HomeRoutes.blogs}`} className="font-weight-bold">Read More {">>"}</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="our__stories--item bg-white" data-aos="fade-up">
                                <div className="our__stories--images centered-img-wrapper">
                                    <Link to={`/${HomeRoutes.blogs}`}><img className="lazy-load centered-img" src={`${urls.frontendUrl}/images/new_images/gmc/blog4-gmc-sierra-370x210.png`} width="370" height="210" alt="Stories"/></Link>
                                </div>
                                <div className="our__stories--details">
                                    <h4>Moosa is one of the oldest business groups</h4>
                                    <p className="font-weight-light">Moosa is one of the oldest business groups in Oman having been formed in 1927. Steeped in Automotive.</p>
                                    <Link to={`/${HomeRoutes.blogs}`} className="font-weight-bold">Read More {">>"}</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="our__stories--item bg-white" >
                            <div className="our__stories--images centered-img-wrapper">
                                <a href="#"><img className="lazy-load centered-img" src={`${urls.frontendUrl}/images/story-banner-2.jpg`} width="370" height="210" alt="Stories"/></a>
                            </div>
                            <div className="our__stories--details">
                                <h4>Moosa is one of the oldest business groups</h4>
                                <p className="font-weight-light">Moosa is one of the oldest business groups in Oman having been formed in 1927. Steeped in Automotive.</p>
                                <a href="#" className="font-weight-bold">Read More {">>"}</a>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="our__stories--item bg-white" data-aos="fade-up">
                            <div className="our__stories--images centered-img-wrapper">
                                <a href="#"><img className="lazy-load centered-img" src={`${urls.frontendUrl}/images/story-banner-3.jpg`} width="370" height="210" alt="Stories"/></a>
                            </div>
                            <div className="our__stories--details">
                                <h4>Moosa is one of the oldest business groups</h4>
                                <p className="font-weight-light">Moosa is one of the oldest business groups in Oman having been formed in 1927. Steeped in Automotive.</p>
                                <a href="#" className="font-weight-bold">Read More {">>"}</a>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="our__stories--item bg-white" data-aos="fade-up">
                            <div className="our__stories--images centered-img-wrapper">
                                <a href="#"><img className="lazy-load centered-img" src={`${urls.frontendUrl}/images/story-banner-1.jpg`} width="370" height="210" alt="Stories"/></a>
                            </div>
                            <div className="our__stories--details">
                                <h4>Moosa is one of the oldest business groups</h4>
                                <p className="font-weight-light">Moosa is one of the oldest business groups in Oman having been formed in 1927. Steeped in Automotive.</p>
                                <a href="#" className="font-weight-bold">Read More {">>"}</a>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="our__stories--item bg-white" data-aos="fade-up">
                            <div className="our__stories--images centered-img-wrapper">
                                <a href="#"><img className="lazy-load centered-img" src={`${urls.frontendUrl}/images/story-banner-2.jpg`} width="370" height="210" alt="Stories"/></a>
                            </div>
                            <div className="our__stories--details">
                                <h4>Moosa is one of the oldest business groups</h4>
                                <p className="font-weight-light">Moosa is one of the oldest business groups in Oman having been formed in 1927. Steeped in Automotive.</p>
                                <a href="#" className="font-weight-bold">Read More {">>"}</a>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="our__stories--item bg-white" data-aos="fade-up">
                            <div className="our__stories--images centered-img-wrapper">
                                <a href="#"><img className="lazy-load centered-img" src={`${urls.frontendUrl}/images/story-banner-2.jpg`} width="370" height="210" alt="Stories"/></a>
                            </div>
                            <div className="our__stories--details">
                                <h4>Moosa is one of the oldest business groups</h4>
                                <p className="font-weight-light">Moosa is one of the oldest business groups in Oman having been formed in 1927. Steeped in Automotive.</p>
                                <a href="#" className="font-weight-bold">Read More {">>"}</a>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide> */}
                    
                </div>
                <div className="swiper-button swiper-button-next"></div>
                <div className="swiper-button swiper-button-prev"></div>
                
           
            </Swiper>
        </section>   
        
        
    
    </>
  )
}

export default Home