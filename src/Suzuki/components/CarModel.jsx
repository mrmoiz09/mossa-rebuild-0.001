import React, { useState, useEffect, useCallback, memo, useMemo } from 'react'
import { Link ,useParams,useNavigate} from 'react-router-dom'
import { siteLogos, urls } from '../../config/constants'
import { HomeRoutes, SuzukiRoutes } from '../../config/RouteConfig'
// import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import { FreeMode, Navigation, Thumbs, Autoplay, Pagination, EffectFade } from "swiper";
import { image2svg } from '../../utilsfunctions/Svg';
import Iframe from 'react-iframe'
import AOS from 'aos';
import "aos/dist/aos.css";
import { callApi } from '../../services/ApiService'
import { CommonApi } from '../../config/api'
import { defaultHeader, removeUnderScoreAndToUpperCase, toastError, validateJsonString } from '../../services/CommonFunction'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


//Suzuki Home
const CarModel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const params = useParams();
    const navigate = useNavigate();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const obj = useMemo(()=>({
        main:{
            type:0,
            banner_images:null,
            image:null,
            description:null
        },
        interior:{
            type:1,
            banner_images:null,
            image:null

        },
        exterior:{
            type:2,
            banner_images:null,
            image:null
        },
        bodycolor:{
            type:3,
            banner_images:null,
            image:null
        }
    }));

    const [details,setDetails] = useState(()=>obj);
    const [headerBanners,setHeaderBanners] = useState([]);
    const [description,setDescription] = useState('');
    const [brochure,setBrochure] = useState('');

    const setCarDetails = (typeNum,p) =>{
        switch(typeNum){
            case 0:{
                setDetails((prevState)=>({...prevState,main:{type:0,banner_images:validateJsonString(p?.banner_images),image:p?.image,description:p?.description}}))
            }break;
            case 1:{
                setDetails((prevState)=>({...prevState,interior:{type:1,banner_images:validateJsonString(p?.banner_images),image:p?.image}}))
            }break;
            case 2:{
                setDetails((prevState)=>({...prevState,exterior:{type:2,banner_images:validateJsonString(p?.banner_images),image:p?.image}}))
            }break;
            case 3:{
                setDetails((prevState)=>({...prevState,bodycolor:{type:3,banner_images:validateJsonString(p?.banner_images),image:p?.image}}))
            }break;
            default:setCarDetails((prevState)=>prevState);
        }
         
    }

    
    
    const getCarDetails  = async () =>{
        await callApi(CommonApi.getCarDetailsById.method,CommonApi.getCarDetailsById.url,params?.id,null,defaultHeader())
        .then((res)=>{
            if(!res?.data?.error){
                const payload = res?.data?.data;
                if(Array.isArray(payload) && payload.length>0){
                    
                    setHeaderBanners(validateJsonString(payload[0]?.banners));
                    setBrochure(payload[0]?.brochure);
                    setDescription(validateJsonString(payload[0]?.desc))

                    for(let p of payload)
                    {   
                        setCarDetails(parseInt(p?.type),p);
                    }
                    
                }
                else
                {
                    setDetails(obj);
                }
            }
            else
            {
                setDetails(obj);
                // navigate(`/${SuzukiRoutes.carmodelNotFound}/${params?.id}`);
            }
        }).catch((err)=>{
            console.log(err);
            toastError(err?.response?.data?.message);
        })
    }

    useEffect(() => {
        console.log("Params ID "+params.id+"");
        image2svg();
    }, []);

    useEffect(()=>{
        getCarDetails();
        setHeaderBanners([]);
        setThumbsSwiper(null);
    },[params?.id]);
    
  return (
    <>
        <section className="hero__banner--block">
        
        

            <Slider className="car__model__slider swiper" >
  
                  {headerBanners.map((h,i)=>(
                      <>
                       <Slider {...settings}>
                    {headerBanners.map((h, i) => (
                        <div key={i} className="hero__banner--img centered-img-wrapper" data-aos="fade-down" data-aos-duration="1300">
                            <img className="lazy-load centered-img" src={`${urls.dir_url}/${h?.image}`} width="1920" height="940" alt="Hero Banner" />
                        </div>
                    ))}
                </Slider>
                      </>
                  ))}
  
                 
                  <div className="swiper-pagination"></div>
              </Slider>     

            

        </section>

        
         
        
        

        <section className="model__view--block">
            <div className="container-fluid pr-0">
                <div className="row">
                    <div className="col-lg-5 col-md-12">
                        <div className="model__view--sliderThumb nav">
                            <div className="model__view--item active" id="nav-model-1" data-toggle="tab" href="#model-1" role="tab" aria-controls="model-1" aria-selected="true">
                                <div className="model__view--image centered-img-wrapper">
                                    {details.exterior.image ? 
                                    <img className="centered-img" width="1030" height="618" src={`${urls.dir_url}/${details.exterior.image}`} alt="Exterior"/>
                                    :
                                    <img className="centered-img" width="1030" height="618" src={`${siteLogos.suzukiLogo}`} alt="Exterior"/>
                                    }
                                </div>
                                <h4 className="text-uppercase mb-0">EXTERIOR <img className="circle_arrow in-svg" src={`${urls.frontendUrl}/images/circle-arrow1.svg`} alt="Arrow"/></h4>
                            </div>   
                            <div className="model__view--item" id="nav-model-2" data-toggle="tab" href="#model-2" role="tab" aria-controls="model-2" aria-selected="true">
                                <div className="model__view--image centered-img-wrapper">
                                {details.interior.image ? 
                                    <img className="centered-img" width="1030" height="618" src={`${urls.dir_url}/${details.interior.image}`} alt="Exterior"/>
                                    :
                                    <img className="centered-img" width="1030" height="618" src={`${siteLogos.suzukiLogo}`} alt="Exterior"/>
                                    }
                                    {/* <img className="centered-img" width="1030" height="618" src={`${urls.dir_url}/${details.interior.image}`} alt="Exterior"/> */}
                                </div>
                                <h4 className="text-uppercase mb-0">INTERIOR <img className="circle_arrow in-svg" src={`${urls.frontendUrl}/images/circle-arrow1.svg`} alt="Arrow"/></h4>
                            </div>
                            <div className="model__view--item" id="nav-model-3" data-toggle="tab" href="#model-3" role="tab" aria-controls="model-3" aria-selected="true">
                                <div className="model__view--image centered-img-wrapper">
                                {details.bodycolor.image ? 
                                    <img className="centered-img" width="1030" height="618" src={`${urls.dir_url}/${details.bodycolor.image}`} alt="Exterior"/>
                                    :
                                    <img className="centered-img" width="1030" height="618" src={`${siteLogos.suzukiLogo}`} alt="Exterior"/>
                                    }
                                    {/* <img className="centered-img" width="1030" height="618" src={`${urls.dir_url}/${details.main.image}`} alt="Exterior"/> */}
                                </div>
                                <h4 className="text-uppercase mb-0">body color <img className="circle_arrow in-svg" src={`${urls.frontendUrl}/images/circle-arrow1.svg`} alt="Arrow"/></h4>
                            </div>
                            <div className="model__view--item" id="nav-model-4" data-toggle="tab" href="#model-4" role="tab" aria-controls="model-4" aria-selected="true">
                                <div className="model__view--image centered-img-wrapper">
                                   {details.main.image ? 
                                    <img className="centered-img" width="1030" height="618" src={`${urls.dir_url}/${details.main.image}`} alt="Exterior"/>
                                    :
                                    <img className="centered-img" width="1030" height="618" src={`${siteLogos.suzukiLogo}`} alt="Exterior"/>
                                    }
                                </div>
                                <h4 className="text-uppercase mb-0">360 <sup>O</sup> <sub>view</sub> <img className="in-svg" src={`${urls.frontendUrl}/images/360-environment.svg`} alt="360"/></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12">
                        <div className="model__view tab-content">
                            <div className="tab-pane fade show active" id="model-1" role="tabpanel" aria-labelledby="nav-model-1">
                            <Slider className="mySwiper">
    {details?.exterior?.banner_images?.map((f, i) => (
        <div key={i} className="model__view__banner centered-img-wrapper">
            {f?.image ? (
                <img className="centered-img" width="1030" height="618" src={`${urls.dir_url}/${f?.image}`} alt="Exterior" />
            ) : (
                <img className="centered-img" width="1030" height="618" src={`${siteLogos.suzukiLogo}`} alt="Exterior" />
            )}
        </div>
    ))}
</Slider>

                            </div>
                            <div className="tab-pane fade" id="model-2" role="tabpanel" aria-labelledby="nav-model-2">
                            <Slider className="mySwiper">
    {details?.interior?.banner_images?.map((g, i) => (
        <div key={i} className="model__view__banner centered-img-wrapper">
            {g?.image ? (
                <img className="centered-img" width="1030" height="618" src={`${urls.dir_url}/${g?.image}`} alt="Interior" />
            ) : (
                <img className="centered-img" width="1030" height="618" src={`${siteLogos.suzukiLogo}`} alt="Interior" />
            )}
        </div>
    ))}
</Slider>

                            </div>
                            
                            
                            <div className="tab-pane fade" id="model-3" role="tabpanel" aria-labelledby="nav-model-3">
                                <div className="modal__color__item">
                                <Slider className="model__view__color">
    {details?.bodycolor?.banner_images?.map((j, i) => (
        <div key={i} className="model__view__banner centered-img-wrapper">
            {j?.image ? (
                <img className="centered-img" src={`${urls.dir_url}/${j?.image}`} alt="Body Color" />
            ) : (
                <img className="centered-img" width="1030" height="618" src={`${siteLogos.suzukiLogo}`} alt="Body Color" />
            )}
        </div>
    ))}
</Slider>

                                    <div className="model__view__colorT">
                                    <Slider
    onInit={setThumbsSwiper}
    slidesToShow={6}
    slidesToScroll={1}
    infinite={false}
    className="model__view__Thumb"
>
    {details?.bodycolor?.banner_images?.map((k, i) => (
        <div key={i} className="model__view__thumb bg-white p-1">
            <div className="centered-img-wrapper">
                {k?.image ? (
                    <img className="centered-img" src={`${urls.dir_url}/${k?.image}`} alt="Body Color" />
                ) : (
                    <img className="centered-img" src={`${siteLogos.suzukiLogo}`} alt="Body Color" />
                )}
            </div>
            {/* <h5 className="model__name mb-0">Red</h5> */}
        </div>
    ))}
</Slider>

                                    </div>
                                </div>
                            </div>
                            
                              {details.main.description?
                              <>
                            <div className="model__view__banner centered-img-wrapper tab-pane fade" id="model-4" role="tabpanel" aria-labelledby="nav-model-4">
                            <Iframe url={details.main.description} 
                                width="1030px"
                                height="618px"
                                id="1"
                                className="centered-img"/>
                            </div>
                            </>
                           :
                           null
                            }
                           
                          
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>

         <section className="car_model__details--block bg-white pb-5">
            <div className="container">
            
            
                <div class="download_brochure py-3 text-center">
                {brochure?
                    <>
                    <a href={`${urls.dir_url}/${brochure}`} target="_blank" class="btn download_btn">
                        <svg width="25px" height="25px" viewBox="0 0 0.75 0.75" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.375 0.063a0.031 0.031 0 0 1 0.031 0.031v0.331l0.072 -0.072a0.031 0.031 0 0 1 0.044 0.044l-0.125 0.125a0.031 0.031 0 0 1 -0.044 0l-0.125 -0.125a0.031 0.031 0 1 1 0.044 -0.044L0.344 0.425V0.094a0.031 0.031 0 0 1 0.031 -0.031zM0.156 0.531a0.031 0.031 0 0 1 0.031 0.031v0.063h0.375v-0.063a0.031 0.031 0 1 1 0.063 0v0.063a0.063 0.063 0 0 1 -0.063 0.063H0.188a0.063 0.063 0 0 1 -0.063 -0.063v-0.063a0.031 0.031 0 0 1 0.031 -0.031z" fill="#0D0D0D"/></svg>
                        Download Brochure
                    </a>
                    </>
                   :
                   ""
                    }   
                </div>
             
                
                <div className="col-md-12">
                    <div className="row">
                        <div className="car_model__details w-100">
                            {!headerBanners.length
                            ?
                             <h1>Not data found</h1>
                            :
                                <PreviewTabView description={description}/>
// ""
                        //   <span  dangerouslySetInnerHTML={{ __html: description }}></span>  
                            }
                        </div>
                     </div>
                </div>
            </div>
        </section>
    </>
  )
}

const PreviewTabView = ({description}) =>{
    return (

        <>

        {description ? 

        <>

        <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
            
            
            
            <TabList>
                {Object.keys(description).map((obj,i)=>(
                    <Tab>
                        {removeUnderScoreAndToUpperCase(obj)}
                    </Tab>
                ))}
            </TabList>

            
                {Object.keys(description).map((obj,i)=>(
                    <TabPanel dangerouslySetInnerHTML={{ __html: description[obj] }}></TabPanel>
                ))}
            <TabList>
                {Object.keys(description).map((obj,i)=>(
                    <Tab>
                        {removeUnderScoreAndToUpperCase(obj)}
                    </Tab>
                ))}
            </TabList>

            {/* <TabPanel>
                <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 3</h2>
            </TabPanel> */}

        </Tabs>

        </>

        :""}

        </>
    )
}

export default CarModel