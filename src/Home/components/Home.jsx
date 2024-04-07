import React, { useState, useEffect, useCallback, memo } from 'react'
import { CommonApi, HomeApi } from '../../config/api';
import { urls } from '../../config/constants';
import { callApi } from '../../services/ApiService';
import { defaultHeader, toastError, toastSuccess } from '../../services/CommonFunction';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { image2svg } from '../../utilsfunctions/Svg';
import { commonRoutes, HomeRoutes, SuzukiRoutes } from '../../config/RouteConfig';
import { Link } from "react-router-dom";
import AOS from 'aos';
import "aos/dist/aos.css";
import MoveCursorToTop from '../../services/MoveCursorToTop';
import Blogs from './Blogs';
import gmcbannervideo from  "../../images/gmcbannervideo.mp4"
const Home = () => {

  MoveCursorToTop();

  const [banners, setBanners] = useState([]);
  const [blogs,setBlogs] = useState([]);


  const [topImages,setTopImages] = useState([]);
  const [gmc_suzuki_service_images,set_gmc_suzuki_service_images] = useState([]);
  const [gmc_trucks,set_gmc_trucks] = useState([]);
  const [middle_images,set_middle_images] = useState([]);
  const [owner,set_owner] = useState([]);

  const [data,setData] = useState([]);


const fetchData = useCallback(async ()=>{
    await callApi(CommonApi.getSettings.method,CommonApi.getSettings.url,null,null,defaultHeader()).then((res) => {
    if (!res?.data?.error) {
      
           const payload = res?.data?.data;
           if(Array.isArray(payload) && payload?.length>0){
              setData(payload);
           }
       } else {
        // toastError(res?.data?.message);
      }
   }).catch((err) => {
        // toastError(err?.response?.data?.message);
        console.log("from hom component ",err);
      })
  },[]);

 

  const fetchHomeImages = useCallback(async () => {
    await callApi(HomeApi.getHomePageImages.method, HomeApi.getHomePageImages.url, null, null, defaultHeader()).then((res) => {
      if (!res?.data?.error) {
        // toastSuccess(res?.data?.message);
        const payload = res?.data?.data;

        if(Array.isArray(payload?.top_banner) && payload?.top_banner?.length>0)
        {
          setTopImages(payload?.top_banner);
        }

        if(Array.isArray(payload?.gmc_suzuki_service) && payload?.gmc_suzuki_service?.length>0)
        {
            set_gmc_suzuki_service_images(payload?.gmc_suzuki_service);
        }

        if(Array.isArray(payload?.gmctruck) && payload?.gmctruck?.length>0)
        {
            set_gmc_trucks(payload?.gmctruck);
        }

        if(Array.isArray(payload?.middlebanner) && payload?.middlebanner?.length>0)
        {
            set_middle_images(payload?.middlebanner);
        }

        if(Array.isArray(payload?.owner) && payload?.owner?.length>0)
        {
            set_owner(payload?.owner);
        }

        
      } else {
        // toastError(res?.data?.message);
      }
    }).catch((err) => {
      toastError(err?.response?.data?.message);
    })
  }, []);



  const fetchBlogs = useCallback(async ()=>{
    await callApi(HomeApi.getBlogs.method, HomeApi.getBlogs.url, null, null, defaultHeader()).then((res) => {
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
      fetchData();
    fetchHomeImages();
    fetchBlogs();
    image2svg();
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>

      <section className="hero__banner--block overlay gradient-overlay">
            <div className="hero__banner--img centered-img-wrapper" data-aos="fade-down" data-aos-duration="1300">
                <video className="lazy-load centered-img" src={gmcbannervideo} autoPlay muted loop width="1920" height="1172" alt="Hero Banner"/>
                {/* <video className="lazy-load centered-img" src={`https://plus.unsplash.com/premium_photo-1711305772086-d45053d4bb69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8`} autoPlay muted loop width="1920" height="1172" alt="Hero Banner"/> */}
            </div>
            <div className="hero__banner--content text-center">
                <div data-aos="fade-up" data-aos-duration="1100">
                    <h1 className="text-white text-uppercase h4">{topImages[0]?.title}</h1>
                    {/* <a href="#" className="btn">view More</a> */}
                    <a href={`${topImages[0]?.link}`} className="btn">view More</a>
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

                    {gmc_suzuki_service_images.map((e,i)=>(
                        <div className="col-md-4" data-aos="fade-up" data-aos-duration="600">
                        <div className="car__cetegory--item position-relative">
                            <div className="car__cetegory--img centered-img-wrapper">
                            {
                            (e?.display_order!='3')?
                            (
                                <a href={`${e?.link}`} target="_blank"><img className="lazy-load centered-img" src={`${urls.dir_url}/${e?.image}`} width="350" height="405" alt="Category" /></a>
                            ):(
                                <Link to={`${e?.link}`} ><img className="lazy-load centered-img" src={`${urls.dir_url}/${e?.image}`} width="350" height="405" alt="Category" /></Link>
                            )}
                            
                            </div>
                            <div className="car__cetegory--name d-flex align-content-center justify-content-between bg-white w-100" style={{padding:"15px",alignItems: "center"}}>
                                <h4 className="text-uppercase mb-0">{e?.title}</h4>
                               
                                {
                            (e?.display_order!='3')?
                            (
                                 <a href={`${e?.link}`} target="_blank" className="circle__arrow"><img className="in-svg" src={`${urls.frontendUrl}/images/circle-arrow.svg`} alt="Arrow" /></a>
                                
                            ):(
                                <Link to={`${e?.link}`} ><img className="in-svg" src={`${urls.frontendUrl}/images/circle-arrow.svg`} alt="Arrow" /></Link>
                            )}
                            </div>
                        </div>
                        </div>
                    ))}


                </div>
            </div>
        </section>

     <section className="about__marh--block blue-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12" data-aos="fade-right">
                        <div className="about__marh--col">
                            <h4 className="text-uppercase text-white">About Moosa Abdul Rahman Hassan & Company</h4>
                            {data.map((d,i)=>(  <p>  {(d?.key_name=='about')? d?.key_value: ""} </p>)  )}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12" data-aos="fade-left">
                        <div className="about__marh--col">
                            <h4 className="text-uppercase text-white">Our history</h4>
                            {data.map((h,i)=>(  <p>  {(h?.key_name=='history')? h?.key_value: ""} </p>)  )}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12" data-aos="fade-left">
                        <div className="about__marh--col">
                            <h4 className="text-uppercase text-white">Our vision</h4>
                            {data.map((k,i)=>(  <p>  {(k?.key_name=='vision')? k?.key_value: ""} </p>)  )}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mt-4 text-center">
                        <Link to={`/${commonRoutes.historyRoute}`} className="btn">view More</Link>
                    </div>
                </div>
            </div>
        </section>

        {gmc_trucks.map((e,i)=>(
        <section className="gmc__truck--block bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12" data-aos="fade-right">
                        <div className="gmc__truck--banner reveal centered-img-wrapper">
                            <img className="lazy-load centered-img" src={`${urls.dir_url}/${e?.image}`} width="535" height="430" alt="GMC Truck"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12" data-aos="fade-left">
                        <div className="gmc__truck--details">
                            <div dangerouslySetInnerHTML={{__html:e?.description}}></div>
                            <a href={`${e?.link}`} target="_blank" className="btn">view More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        ))}


        {owner.map((e,i)=>(
            <section className="ceo--block" style={{backgroundImage: "url("+urls.dir_url+"/"+e?.bg_image+")"}}>
            <div className="container">
                <div className="ceo__main row justify-content-between align-content-center">
                    <div className="col-lg-4" data-aos="fade-left">
                        <div className="ceo__image">
                            <img className="lazy-load" src={`${urls.dir_url}/${e?.image}`} width="330" height="300" alt={e?.title} />
                        </div>
                    </div>
                    <div className="col-lg-7" data-aos="fade-right">
                        <div className="ceo__details">
                            <p className="font-weight-light mb-0">{e?.description}</p>
                            <h4 className="mt-5 text-uppercase font-weight-light">{e?.title}</h4>
                            <a href={`${e?.link}`} className="btn">view More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        ))}


        <section className="our__stories--block blue-bg">
            <div className="main__title">
                <h4 className="text-uppercase text-white" data-aos="fade-up">Our LATEST STORIES</h4>
                {/*<p className="text-white font-weight-light" data-aos="fade-up">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>*/}
            </div>

            <section className="our__stories--block blue-bg">
  <div className="main__title">
    <h4 className="text-uppercase text-white" data-aos="fade-up">Our LATEST STORIES</h4>
  </div>

  <div className="our__stories__slider swiper">
    <div className="swiper-wrapper">
      {blogs.length > 0 &&
        blogs.map((b, i) => (
          <div className="swiper-slide" key={i}>
            <div className="our__stories--item bg-white" data-aos="fade-up">
              <div className="our__stories--images centered-img-wrapper">
                <Link to={`/${HomeRoutes.blogs}/${b?.alias}`}>
                  <img
                    className="lazy-load centered-img"
                    src={`${urls.dir_url}/${b?.image1}`}
                    width="370"
                    height="210"
                    alt="Stories"
                  />
                </Link>
              </div>
              <div className="our__stories--details">
                <h4>{b?.title}</h4>
                <p className="font-weight-light">{b?.short_description}</p>
                <Link to={`/${HomeRoutes.blogs}/${b?.alias}`} className="font-weight-bold">
                  Read More &gt;&gt;
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
    <div className="swiper-button swiper-button-next"></div>
    <div className="swiper-button swiper-button-prev"></div>
  </div>
</section>

        </section>   
        
        
    
    </>
  )
}

export default Home