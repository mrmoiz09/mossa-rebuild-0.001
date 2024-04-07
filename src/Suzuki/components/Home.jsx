import React, { useState, useEffect, useCallback, memo } from 'react'
import { Link } from 'react-router-dom'
import { urls } from '../../config/constants'
import { commonRoutes, HomeRoutes, SuzukiRoutes } from '../../config/RouteConfig'
import { image2svg } from '../../utilsfunctions/Svg';
import AOS from 'aos';
import "aos/dist/aos.css";
import { callApi } from '../../services/ApiService'
import { SuzukiApi } from '../../config/api'
import { defaultHeader, toastError } from '../../services/CommonFunction'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GetSuzukiCar from '../../images/Models/GetSuzukiCar';

//Suzuki Home
const Home = () => {

    const [banners, setBanners] = useState([]);
    const [gmctruck_section,set_gmc_truck_section] = useState([]);
    const [cars, setCars] = GetSuzukiCar();
    const [blogs,setBlogs] = useState([]);

    const fetchBanners = useCallback(async () => {
        await callApi(SuzukiApi.getBannerOfTypeSuzuki.method, SuzukiApi.getBannerOfTypeSuzuki.url, null, null, defaultHeader())
            .then((res) => {
                const payload = res?.data?.data;
                setBanners(payload);
                set_gmc_truck_section(res?.data?.gmcTruck);
            }).
            catch((err) => {
                console.log(err);
                toastError(err?.response?.data?.message);
            })
    }, []);

    const fetchBlogs = useCallback(async ()=>{
        await callApi(SuzukiApi.getBlogs.method, SuzukiApi.getBlogs.url, null, null, defaultHeader()).then((res) => {
            if (!res?.data?.error) {
              // toastSuccess(res?.data?.message);
              const payload = res?.data?.data;
              if (Array.isArray(payload)) {
                setBlogs(payload);
              }
            } else {
            //   toastError(res?.data?.message);
            }
          }).catch((err) => {
            // toastError(err?.response?.data?.message);
          })
      },[]);

    useEffect(() => {
        // fetchData();
        fetchBanners();
        fetchBlogs();
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
        autoplaySpeed: 2500,
        fade: true,
        pauseOnHover: true,
    };
// 
const settingb = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <div className="swiper-button-next"></div>,
    prevArrow: <div className="swiper-button-prev"></div>,
    responsive: [
        {
            breakpoint: 0,
            settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
                dots: true,
                autoplay: true,
                autoplaySpeed: 5000,
                pauseOnHover: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4.5,
                slidesToScroll: 1,
            }
        }
    ]
};

    // 
    return (
        <>
            <section className="hero__banner--block">

            <Slider {...settings}>
            {banners.map((banner, index) => (
                <div key={index}>
                    <div className="hero__banner--img centered-img-wrapper responsive_wrapper" data-aos="fade-down" data-aos-duration="1300">
                        <img className="lazy-load centered-img responsive_img" src={`${urls.dir_url}/${banner.image}`} width="1920" height="940" alt="Hero Banner" />
                    </div>
                </div>
            ))}
        </Slider>
            </section>

            <section className="car_model--block pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="text-white text-center text-uppercase mb-5 mt-5" data-aos="fade-up">FIND YOUR DREAM CAR with us</h4>
                        </div>
                    </div>
                   
                    <div className="row mb-5">
                         {/* {cars.map((c, i) => (
                            <div className="col-md-4 mb-5" data-aos="fade-up" data-aos-duration="600">
                                <div className="car__cetegory--item position-relative">
                                    <div className="car__cetegory--img centered-img-wrapper">
                                        <Link to={`/${SuzukiRoutes.carmodelRoute}/${c?.id}`}><img className="lazy-load centered-img" src={`${urls.dir_url}/${c?.image}`} width="350" height="405" alt="Category" /></Link>
                                    </div>
                                    <div className="car__cetegory--name bg-white w-100">
                                        <h4 className="h6 text-uppercase mb-0"><img className="in-svg" src={`${urls.frontendUrl}/images/service.svg`} alt="Side Menu Icon" /> {c?.title}</h4>
                                        <div className="car__cetegory__btns row">
                                            <div className="col-md-4">
                                                <Link to={`/${SuzukiRoutes.carmodelRoute}/${c?.id}`} className="circle__arrow">
                                                    <span className="text-uppercase mb-0 mr-1" style={{ fontSize: "12px" }}>Model info</span>
                                                    <img className="in-svg" src={`${urls.frontendUrl}/images/circle-arrow1.svg`} alt="Arrow" />
                                                </Link>
                                            </div>
                                            <div className="col-md-4">
                                                <Link to={`/${SuzukiRoutes.enquiryRoute}/${c?.id}`} className="circle__arrow">
                                                    <span className="text-uppercase mb-0 mr-1" style={{ fontSize: "12px" }}>Enquire Now</span>
                                                    <img className="in-svg" src={`${urls.frontendUrl}/images/circle-arrow1.svg`} alt="Arrow" />
                                                </Link>
                                            </div>
                                            <div className="col-md-4">
                                                <Link to={`/${SuzukiRoutes.enquiryRoute}`} className="circle__arrow">
                                                    <span className="text-uppercase mb-0 mr-1" style={{ fontSize: "12px" }}>Book test Drive</span>
                                                    <img className="in-svg" src={`${urls.frontendUrl}/images/circle-arrow1.svg`} alt="Arrow" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))} */}

                        {cars.map((c, i) => (
                            <div className="col-md-4 mb-5" data-aos="fade-up" data-aos-duration="600">
                            <div className="car__cetegory--item position-relative">
                                <div className="car__cetegory--img centered-img-wrapper">
                                    {/* <a href="#"><img className="lazy-load centered-img" data-src="images/category-banner-1.jpg" width="350" height="405" alt="Category"></a> */}
                                    
                                    {
                                        (c?.id=='2')?
                                    
                                    <Link to={`/${SuzukiRoutes.requestQuoteRoute}`}><img className="lazy-load centered-img" src={`${urls.dir_url}/${c?.image}`} width="350" height="405" alt="Category" /></Link>
                                    :
                                       <Link to={`/${SuzukiRoutes.carmodelRoute}/${c?.alias}`}><img className="lazy-load centered-img" src={`${urls.dir_url}/${c?.image}`} width="350" height="405" alt="Category" /></Link>
                                     
                                    }
                                </div>
                                
                                <div className="car__cetegory--name car__cetegory--btn bg-white w-100">       
                                    <div className="row align-content-center justify-content-between"     >                        
                                        <div className="col-lg-6">
                                            <h5 className="h6 text-uppercase mb-0"><img className="in-svg" src={`${urls.frontendUrl}/images/car_small.svg`} alt="Side Menu Icon" /> {c?.title}</h5>
                                        </div>                                    
                                        <div className="col-lg-6">
                                            <span className="text-uppercase mb-0">Model info</span>
                                            {
                                            (c?.id=='2')?
                                            <Link to={`/${SuzukiRoutes.requestQuoteRoute}`} className="circle__arrow"><img src={`${urls.frontendUrl}/images/circle-arrow1.svg`} alt="Arrow" />    
                                            </Link>
                                            :
                                            <Link to={`/${SuzukiRoutes.carmodelRoute}/${c?.alias}`} className="circle__arrow"><img src={`${urls.frontendUrl}/images/circle-arrow1.svg`} alt="Arrow" />    
                                            </Link>
                                            }
                                                {/* <img style="width:24px" src="./images/circle-arrow.svg" alt="Arrow"> */}
                                                
                                        </div>
                                        <div className="col-lg-6">
                                            <span className="text-uppercase mb-0">Enquire Now</span>
                                            <Link to={`/${SuzukiRoutes.enquiryRoute}/${c?.id}`} className="circle__arrow">
                                                {/* <img src="./images/circle-arrow.svg" style="width:24px" alt="Arrow"> */}
                                                <img src={`${urls.frontendUrl}/images/circle-arrow1.svg`} alt="Arrow" />    
                                            </Link>
                                        </div>
                                        <div className="col-lg-6">
                                            <span className="text-uppercase mb-0">Book test Drive</span>
                                            <Link to={`/${SuzukiRoutes.enquiryRoute}`} className="circle__arrow">
                                                {/* <img src="./images/circle-arrow.svg" style="width:24px" alt="Arrow"> */}
                                                <img src={`${urls.frontendUrl}/images/circle-arrow1.svg`} alt="Arrow" />    
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                            
                        ))}


                        
                        {/* <div className="col-md-4" data-aos="fade-up" data-aos-duration="600">
                        <div className="car__cetegory--item position-relative">
                            <div className="car__cetegory--img centered-img-wrapper">
                                <Link to={`/${SuzukiRoutes.carModel}`}><img className="lazy-load centered-img" src="images/suzuki/swift-model.jpg" width="350" height="405" alt="Category"/></Link>
                            </div>
                            <div className="car__cetegory--name bg-white w-100">
                                <h4 className="h6 text-uppercase mb-0">Swift</h4>
                                <div className="car__cetegory__btns row">
                                    <div className="col-md-4">
                                        <Link to={`/${SuzukiRoutes.carModel}`} className="circle__arrow">
                                            <span className="text-uppercase mb-0 mr-1" style={{fontSize:"12px"}}>Model info</span>
                                            <img className="in-svg"  src={`${urls.frontendUrl}/images/circle-arrow1.svg`} alt="Arrow"/>
                                        </Link>
                                    </div>
                                    <div className="col-md-4">
                                        <Link to={`/${SuzukiRoutes.enquiryRoute}`} className="circle__arrow">
                                            <span className="text-uppercase mb-0 mr-1" style={{fontSize:"12px"}}>Enquire Now</span>
                                            <img className="in-svg" src={`${urls.frontendUrl}/images/circle-arrow1.svg`} alt="Arrow"/>
                                        </Link>
                                    </div>
                                    <div className="col-md-4">
                                        <Link to={`/${SuzukiRoutes.enquiryRoute}`} className="circle__arrow">
                                            <span className="text-uppercase mb-0 mr-1" style={{fontSize:"12px"}}>Book test Drive</span>
                                            <img className="in-svg" src={`${urls.frontendUrl}/images/circle-arrow1.svg`} alt="Arrow"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-duration="600">
                        <div className="car__cetegory--item position-relative">
                            <div className="car__cetegory--img centered-img-wrapper">
                                <Link to={`/${SuzukiRoutes.carModel}`}><img className="lazy-load centered-img" src="images/suzuki/vitara-model.jpg" width="350" height="405" alt="Category"/></Link>
                            </div>
                            <div className="car__cetegory--name bg-white w-100">
                                <h4 className="h6 text-uppercase mb-0">Vitara</h4>
                                <div className="car__cetegory__btns row">
                                    <div className="col-md-4">
                                        <Link to={`/${SuzukiRoutes.carModel}`} className="circle__arrow">
                                            <span className="text-uppercase mb-0 mr-1" style={{fontSize:"12px"}}>Model info</span>
                                            <img className="in-svg"  src={`${urls.frontendUrl}/images/circle-arrow1.svg`} alt="Arrow"/>
                                        </Link>
                                    </div>
                                    <div className="col-md-4">
                                        <Link to={`/${SuzukiRoutes.enquiryRoute}`} className="circle__arrow">
                                            <span className="text-uppercase mb-0 mr-1" style={{fontSize:"12px"}}>Enquire Now</span>
                                            <img className="in-svg" src={`${urls.frontendUrl}/images/circle-arrow1.svg`} alt="Arrow"/>
                                        </Link>
                                    </div>
                                    <div className="col-md-4">
                                        <Link to={`/${SuzukiRoutes.enquiryRoute}`} className="circle__arrow">
                                            <span className="text-uppercase mb-0 mr-1" style={{fontSize:"12px"}}>Book test Drive</span>
                                            <img className="in-svg" src={`${urls.frontendUrl}/images/circle-arrow1.svg`} alt="Arrow"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-duration="600">
                        <div className="car__cetegory--item position-relative">
                            <div className="car__cetegory--img centered-img-wrapper">
                                <Link to={`/${SuzukiRoutes.carModel}`}><img className="lazy-load centered-img" src="images/suzuki/jimmy-model.jpg" width="350" height="405" alt="Category"/></Link>
                            </div>
                            <div className="car__cetegory--name bg-white w-100">
                                <h4 className="h6 text-uppercase mb-0">Jimny</h4>
                                <div className="car__cetegory__btns row">
                                    <div className="col-md-4">
                                        <Link to={`/${SuzukiRoutes.carModel}`} className="circle__arrow">
                                            <span className="text-uppercase mb-0 mr-1" style={{fontSize:"12px"}}>Model info</span>
                                            <img className="in-svg" src={`${urls.frontendUrl}/images/circle-arrow1.svg`} alt="Arrow"/>
                                        </Link>
                                    </div>
                                    <div className="col-md-4">
                                        <Link to={`/${SuzukiRoutes.enquiryRoute}`} className="circle__arrow">
                                            <span className="text-uppercase mb-0 mr-1" style={{fontSize:"12px"}}>Enquire Now</span>
                                            <img className="in-svg" src={`${urls.frontendUrl}/images/circle-arrow1.svg`} alt="Arrow"/>
                                        </Link>
                                    </div>
                                    <div className="col-md-4">
                                        <Link to={`/${SuzukiRoutes.enquiryRoute}`} className="circle__arrow">
                                            <span className="text-uppercase mb-0 mr-1" style={{fontSize:"12px"}}>Book test Drive</span>
                                            <img className="in-svg" src={`${urls.frontendUrl}/images/circle-arrow1.svg`} alt="Arrow"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    </div>
                    {/* <div className="row">
                        <div className="col-md-4" data-aos="fade-up" data-aos-duration="600">
                            <div className="car__cetegory--item position-relative">
                                <div className="car__cetegory--img centered-img-wrapper">
                                    <Link to={`/${SuzukiRoutes.carModel}`}><img className="lazy-load centered-img" src="images/suzuki/ertiga-model.jpg" width="350" height="405" alt="Category" /></Link>
                                </div>
                                <div className="car__cetegory--name bg-white w-100">
                                    <h4 className="h6 text-uppercase mb-0">Ertiga</h4>
                                    <div className="car__cetegory__btns row">
                                        <div className="col-md-4">
                                            <Link to={`/${SuzukiRoutes.carModel}`} className="circle__arrow">
                                                <span className="text-uppercase mb-0 mr-1" style={{ fontSize: "12px" }}>Model info</span>
                                                <img className="in-svg" src={`${urls.frontendUrl}/images/circle-arrow1.svg`} alt="Arrow" />
                                            </Link>
                                        </div>
                                        <div className="col-md-4">
                                            <Link to={`/${SuzukiRoutes.enquiryRoute}`} className="circle__arrow">
                                                <span className="text-uppercase mb-0 mr-1" style={{ fontSize: "12px" }}>Enquire Now</span>
                                                <img className="in-svg" src={`${urls.frontendUrl}/images/circle-arrow1.svg`} alt="Arrow" />
                                            </Link>
                                        </div>
                                        <div className="col-md-4">
                                            <Link to={`/${SuzukiRoutes.enquiryRoute}`} className="circle__arrow">
                                                <span className="text-uppercase mb-0 mr-1" style={{ fontSize: "12px" }}>Book test Drive</span>
                                                <img className="in-svg" src={`${urls.frontendUrl}/images/circle-arrow1.svg`} alt="Arrow" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-duration="600">
                            <div className="car__cetegory--item position-relative">
                                <div className="car__cetegory--img centered-img-wrapper">
                                    <Link to={`/${SuzukiRoutes.carModel}`}><img className="lazy-load centered-img" src="images/suzuki/dzire-model.jpg" width="350" height="405" alt="Category" /></Link>
                                </div>
                                <div className="car__cetegory--name bg-white w-100">
                                    <h4 className="h6 text-uppercase mb-0">Dzire</h4>
                                    <div className="car__cetegory__btns row">
                                        <div className="col-md-4">
                                            <Link to={`/${SuzukiRoutes.carModel}`} className="circle__arrow">
                                                <span className="text-uppercase mb-0 mr-1" style={{ fontSize: "12px" }}>Model info</span>
                                                <img className="in-svg" src={`${urls.frontendUrl}/images/circle-arrow1.svg`} alt="Arrow" />
                                            </Link>
                                        </div>
                                        <div className="col-md-4">
                                            <Link to={`/${SuzukiRoutes.enquiryRoute}`} className="circle__arrow">
                                                <span className="text-uppercase mb-0 mr-1" style={{ fontSize: "12px" }}>Enquire Now</span>
                                                <img className="in-svg" src={`${urls.frontendUrl}/images/circle-arrow1.svg`} alt="Arrow" />
                                            </Link>
                                        </div>
                                        <div className="col-md-4">
                                            <Link to={`/${SuzukiRoutes.enquiryRoute}`} className="circle__arrow">
                                                <span className="text-uppercase mb-0 mr-1" style={{ fontSize: "12px" }}>Book test Drive</span>
                                                <img className="in-svg" src={`${urls.frontendUrl}/images/circle-arrow1.svg`} alt="Arrow" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-duration="600">
                            <div className="car__cetegory--item position-relative">
                                <div className="car__cetegory--img centered-img-wrapper">
                                    <Link to={`/${SuzukiRoutes.carModel}`}><img className="lazy-load centered-img" src="images/suzuki/ciaz-model.jpg" width="350" height="405" alt="Category" /></Link>
                                </div>
                                <div className="car__cetegory--name bg-white w-100">
                                    <h4 className="h6 text-uppercase mb-0">Ciaz</h4>
                                    <div className="car__cetegory__btns row">
                                        <div className="col-md-4">
                                            <Link to={`/${SuzukiRoutes.carModel}`} className="circle__arrow">
                                                <span className="text-uppercase mb-0 mr-1" style={{ fontSize: "12px" }}>Model info</span>
                                                <img className="in-svg" src={`${urls.frontendUrl}/images/circle-arrow1.svg`} alt="Arrow" />
                                            </Link>
                                        </div>
                                        <div className="col-md-4">
                                            <Link to={`/${SuzukiRoutes.enquiryRoute}`} className="circle__arrow">
                                                <span className="text-uppercase mb-0 mr-1" style={{ fontSize: "12px" }}>Enquire Now</span>
                                                <img className="in-svg" src={`${urls.frontendUrl}/images/circle-arrow1.svg`} alt="Arrow" />
                                            </Link>
                                        </div>
                                        <div className="col-md-4">
                                            <Link to={`/${SuzukiRoutes.enquiryRoute}`} className="circle__arrow">
                                                <span className="text-uppercase mb-0 mr-1" style={{ fontSize: "12px" }}>Book test Drive</span>
                                                <img className="in-svg" src={`${urls.frontendUrl}/images/circle-arrow1.svg`} alt="Arrow" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>

            {gmctruck_section.map((e,i)=>(
                <section className="gmc__truck--block bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12" data-aos="fade-right">
                            <div className="gmc__truck--banner reveal centered-img-wrapper">
                                <img className="lazy-load centered-img" src={`${urls.dir_url}/${e?.image}`} width="535" height="430" alt="GMC Truck" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12" data-aos="fade-left">
                            <div className="gmc__truck--details">
                                <h4 className="text-uppercase">{e?.title}</h4>
                                <p>{e?.description}</p>
                                {/* <Link to={`/${SuzukiRoutes.aboutusRoute}`} className="btn">view more</Link> */}
                                <a href={`${e?.Link}`} className="btn">View More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            ))}

            {/* <section className="gmc__truck--block bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12" data-aos="fade-right">
                            <div className="gmc__truck--banner reveal centered-img-wrapper">
                                <img className="lazy-load centered-img" src={`${urls.frontendUrl}/images/story-banner-3.jpg`} width="535" height="430" alt="GMC Truck" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12" data-aos="fade-left">
                            <div className="gmc__truck--details">
                                <h4 className="text-uppercase">Welcome to Moosa Group</h4>
                                <p>Here at Moosa Group, we're proud to be able to showcase the complete range of new models from the iconic GMC selection. Our state-of-the-art showrooms are
                                    the perfect environment in which to discover more about each individual vehicle, getting behind the wheel for an unforgettable test drive and trying out some
                                    of the best technology the industry has to offer.. Here at Moosa Group, we’re proud to be able to showcase the complete range of new models from the iconic GMC
                                    selection. Our state-of-the-art showrooms are the perfect environment in which to discover more about each individual vehicle, getting behind the wheel for an
                                    unforgettable test drive and trying out some of the best technology the industry has to offer. Here at Moosa Group, we’re proud to be able to showcase the
                                    complete range of new models from the iconic GMC selection. Our state-of-the-art showrooms are the perfect environment in which to discover more about each
                                    individual vehicle, getting behind the wheel for an unforgettable test drive and trying out some of the best technology the industry has to offer. Here at Moosa
                                    Group, we're proud to be able to showcase the complete range of new models from the iconic GMC selection. Our state-of-the-art showrooms are the perfect environment
                                    in which to discover more about each individual vehicle, getting behind the wheel for an unforgettable test drive and trying out some of the best technology the
                                    industry has to offer. Here at Moosa Group, we’re proud to be able to showcase the complete range of new models from the iconic GMC selection. Our state-of-the-art
                                    showrooms are the perfect environment in which to discover more about each individual vehicle, getting behind the wheel for an unforgettable test drive and trying
                                    out some of the best technology the industry has to offer.</p>
                                <Link to={`/${SuzukiRoutes.aboutusRoute}`} className="btn">view more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="our__stories--block blue-bg">
                <div className="main__title">
                    <h4 className="text-uppercase text-white" data-aos="fade-up">GLOBAL NEWS</h4>
                    <p className="text-white font-weight-light" data-aos="fade-up"></p>
                </div>

                <Slider {...settingb}>
            {blogs.map((blog, index) => (
                <div key={index}>
                    <div className="our__stories--item bg-white" data-aos="fade-up">
                        <div className="our__stories--images centered-img-wrapper">
                            <a href={`/${SuzukiRoutes.blogs}/${blog.alias}`}><img className="lazy-load centered-img" src={`${urls.dir_url}/${blog.image1}`} width="370" height="210" alt="Stories" /></a>
                        </div>
                        <div className="our__stories--details">
                            <h4>{blog.title}</h4>
                            <p className="font-weight-light">{blog.short_description}</p>
                            <a href={`/${SuzukiRoutes.blogs}/${blog.alias}`} className="font-weight-bold">Read More {">>"}</a>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
            </section>


        </>
    )
}

const CarModelRow = ({ cars }) => {
    return (
        <div className="row">
            {cars.map((car,i)=>(
                {car}
            ))}
        </div>
    )
}

const CarModelBlock = ({ car }) => {
    return (
        <div className="col-md-4" data-aos="fade-up" data-aos-duration="600">
            <div className="car__cetegory--item position-relative">
                <div className="car__cetegory--img centered-img-wrapper">
                    <Link to={`/${SuzukiRoutes.carModel}`}><img className="lazy-load centered-img" src={`${urls.dir_url}/${car?.image}`} width="350" height="405" alt="Category" /></Link>
                </div>
                <div className="car__cetegory--name bg-white w-100">
                    <h4 className="h6 text-uppercase mb-0">{car?.title}</h4>
                    <div className="car__cetegory__btns row">
                        <div className="col-md-4">
                            <Link to={`/${SuzukiRoutes.carModel}`} className="circle__arrow">
                                <span className="text-uppercase mb-0 mr-1" style={{ fontSize: "12px" }}>Model info</span>
                                <img className="in-svg" src={`${urls.frontendUrl}/images/circle-arrow1.svg`} alt="Arrow" />
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to={`/${SuzukiRoutes.enquiryRoute}`} className="circle__arrow">
                                <span className="text-uppercase mb-0 mr-1" style={{ fontSize: "12px" }}>Enquire Now</span>
                                <img className="in-svg" src={`${urls.frontendUrl}/images/circle-arrow1.svg`} alt="Arrow" />
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to={`/${SuzukiRoutes.enquiryRoute}`} className="circle__arrow">
                                <span className="text-uppercase mb-0 mr-1" style={{ fontSize: "12px" }}>Book test Drive</span>
                                <img className="in-svg" src={`${urls.frontendUrl}/images/circle-arrow1.svg`} alt="Arrow" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home