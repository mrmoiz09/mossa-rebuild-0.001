import React, { useState, useEffect, useCallback, memo, useMemo } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { siteLogos, urls } from "../../config/constants";
import { HomeRoutes, SuzukiRoutes } from "../../config/RouteConfig";
import Slider from "react-slick";

import {
  FreeMode,
  Navigation,
  Thumbs,
  Autoplay,
  Pagination,
  EffectFade,
} from "swiper";
import { image2svg } from "../../utilsfunctions/Svg";
import Iframe from "react-iframe";
import AOS from "aos";
import "aos/dist/aos.css";
import { callApi } from "../../services/ApiService";
import { CommonApi } from "../../config/api";
import {
  defaultHeader,
  toastError,
  validateJsonString,
} from "../../services/CommonFunction";
// Import CSS for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Suzuki Home
const CarModel = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [details, setDetails] = useState({
    main: {
      type: 0,
      banner_images: null,
      image: null,
    },
    interior: {
      type: 1,
      banner_images: null,
      image: null,
    },
    exterior: {
      type: 2,
      banner_images: null,
      image: null,
    },
  });
  const [headerBanners, setHeaderBanners] = useState([]);
  const [description, setDescription] = useState("");

  const setCarDetails = (typeNum, p) => {
    switch (typeNum) {
      case 0:
        {
          setDetails((prevState) => ({
            ...prevState,
            main: {
              type: 0,
              banner_images: validateJsonString(p?.banner_images),
              image: p?.image,
            },
          }));
        }
        break;
      case 1:
        {
          setDetails((prevState) => ({
            ...prevState,
            interior: {
              type: 1,
              banner_images: validateJsonString(p?.banner_images),
              image: p?.image,
            },
          }));
        }
        break;
      case 2:
        {
          setDetails((prevState) => ({
            ...prevState,
            exterior: {
              type: 2,
              banner_images: validateJsonString(p?.banner_images),
              image: p?.image,
            },
          }));
        }
        break;
      case 3:
        {
          setDetails((prevState) => ({
            ...prevState,
            bodycolor: {
              type: 3,
              banner_images: validateJsonString(p?.banner_images),
              image: p?.image,
            },
          }));
        }
        break;
      default:
        setCarDetails((prevState) => prevState);
    }
  };

  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    dots: true,
    fade: true,
    infinite: true,
    speed: 1300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const getCarDetails = async () => {
    await callApi(
      CommonApi.getCarDetailsById.method,
      CommonApi.getCarDetailsById.url,
      params?.id,
      null,
      defaultHeader()
    )
      .then((res) => {
        if (!res?.data?.error) {
          const payload = res?.data?.data;
          if (Array.isArray(payload) && payload.length > 0) {
            setHeaderBanners(validateJsonString(payload[0]?.banners));
            setDescription(payload[0]?.desc_arr);
            for (let p of payload) {
              setCarDetails(parseInt(p?.type), p);
            }
          } else {
            setDetails("");
          }
        } else {
          setDetails("");
          // navigate(`/${SuzukiRoutes.carmodelNotFound}/${params?.id}`);
        }
      })
      .catch((err) => {
        console.log(err);
        toastError(err?.response?.data?.message);
      });
  };

  useEffect(() => {
    console.log("Params ID " + params.id + "");
    image2svg();
  }, []);

  useEffect(() => {
    getCarDetails();
    setHeaderBanners([]);
  }, [params?.id]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
};

  return (
    <>
      <section className="hero__banner--block">
        {/* <Swiper className="car__model__slider swiper" autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }} pagination={true} modules={[Autoplay,Pagination,EffectFade,]} >
                <SwiperSlide>
                    <div className="hero__banner--img centered-img-wrapper" data-aos="fade-down" data-aos-duration="1300">
                        <img className="lazy-load centered-img" src={`${urls.frontendUrl}/images/suzuki/swift-banner.jpg`} width="1920" height="940" alt="Hero Banner" />
                    </div>
                </SwiperSlide> 
                <SwiperSlide> 
                    <div className="hero__banner--img centered-img-wrapper" data-aos="fade-down" data-aos-duration="1300">
                        <img className="lazy-load centered-img" src={`${urls.frontendUrl}/images/suzuki/suzuki-banner.jpg`} width="1920" height="940" alt="Hero Banner" />
                    </div>
                </SwiperSlide> 
                <div className="swiper-pagination"></div>
            </Swiper>      */}

        {!headerBanners.length ? (
            <Slider {...sliderSettings}>
                    {headerBanners.map((h, i) => (
                        <div key={i} className="hero__banner--img centered-img-wrapper" data-aos="fade-down" data-aos-duration="1300">
                            <img className="lazy-load centered-img" src={`${urls.dir_url}/${h?.image}`} width="1920" height="940" alt="Hero Banner" />
                        </div>
                    ))}
                </Slider>
        ) : (
            <Slider {...sliderSettings}>
            {headerBanners.map((h, i) => (
                <div key={i} className="hero__banner--img centered-img-wrapper" data-aos="fade-down" data-aos-duration="1300">
                    <img className="lazy-load centered-img" src={`${urls.dir_url}/${h?.image}`} width="1920" height="940" alt="Hero Banner" />
                </div>
            ))}
        </Slider>
        )}
      </section>

      {headerBanners.length > 0 ? (
        <section className="model__view--block">
          <div className="container-fluid pr-0">
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <div className="model__view--sliderThumb nav">
                  <div
                    className="model__view--item active"
                    id="nav-model-1"
                    data-toggle="tab"
                    href="#model-1"
                    role="tab"
                    aria-controls="model-1"
                    aria-selected="true"
                  >
                    <div className="model__view--image centered-img-wrapper">
                      {details.exterior.image ? (
                        <img
                          className="centered-img"
                          width="1030"
                          height="618"
                          src={`${urls.dir_url}/${details.exterior.image}`}
                          alt="Exterior"
                        />
                      ) : (
                        <img
                          className="centered-img"
                          width="1030"
                          height="618"
                          src={`${siteLogos.suzukiLogo}`}
                          alt="Exterior"
                        />
                      )}
                    </div>
                    <h4 className="text-uppercase mb-0">
                      EXTERIOR{" "}
                      <img
                        className="circle_arrow in-svg"
                        src={`${urls.frontendUrl}/images/circle-arrow1.svg`}
                        alt="Arrow"
                      />
                    </h4>
                  </div>
                  <div
                    className="model__view--item"
                    id="nav-model-2"
                    data-toggle="tab"
                    href="#model-2"
                    role="tab"
                    aria-controls="model-2"
                    aria-selected="true"
                  >
                    <div className="model__view--image centered-img-wrapper">
                      {details.interior.image ? (
                        <img
                          className="centered-img"
                          width="1030"
                          height="618"
                          src={`${urls.dir_url}/${details.interior.image}`}
                          alt="Exterior"
                        />
                      ) : (
                        <img
                          className="centered-img"
                          width="1030"
                          height="618"
                          src={`${siteLogos.suzukiLogo}`}
                          alt="Exterior"
                        />
                      )}
                      {/* <img className="centered-img" width="1030" height="618" src={`${urls.dir_url}/${details.interior.image}`} alt="Exterior"/> */}
                    </div>
                    <h4 className="text-uppercase mb-0">
                      INTERIOR{" "}
                      <img
                        className="circle_arrow in-svg"
                        src={`${urls.frontendUrl}/images/circle-arrow1.svg`}
                        alt="Arrow"
                      />
                    </h4>
                  </div>
                  <div
                    className="model__view--item"
                    id="nav-model-3"
                    data-toggle="tab"
                    href="#model-3"
                    role="tab"
                    aria-controls="model-3"
                    aria-selected="true"
                  >
                    <div className="model__view--image centered-img-wrapper">
                      {details.main.image ? (
                        <img
                          className="centered-img"
                          width="1030"
                          height="618"
                          src={`${urls.dir_url}/${details.bodycolor.image}`}
                          alt="Exterior"
                        />
                      ) : (
                        <img
                          className="centered-img"
                          width="1030"
                          height="618"
                          src={`${siteLogos.suzukiLogo}`}
                          alt="Exterior"
                        />
                      )}
                      {/* <img className="centered-img" width="1030" height="618" src={`${urls.dir_url}/${details.main.image}`} alt="Exterior"/> */}
                    </div>
                    <h4 className="text-uppercase mb-0">
                      body color{" "}
                      <img
                        className="circle_arrow in-svg"
                        src={`${urls.frontendUrl}/images/circle-arrow1.svg`}
                        alt="Arrow"
                      />
                    </h4>
                  </div>
                  <div
                    className="model__view--item"
                    id="nav-model-4"
                    data-toggle="tab"
                    href="#model-4"
                    role="tab"
                    aria-controls="model-4"
                    aria-selected="true"
                  >
                    <div className="model__view--image centered-img-wrapper">
                      {details.exterior.image ? (
                        <img
                          className="centered-img"
                          width="1030"
                          height="618"
                          src={`${urls.dir_url}/${details.exterior.image}`}
                          alt="Exterior"
                        />
                      ) : (
                        <img
                          className="centered-img"
                          width="1030"
                          height="618"
                          src={`${siteLogos.suzukiLogo}`}
                          alt="Exterior"
                        />
                      )}
                    </div>
                    <h4 className="text-uppercase mb-0">
                      360 <sup>O</sup> <sub>view</sub>{" "}
                      <img
                        className="in-svg"
                        src={`${urls.frontendUrl}/images/360-environment.svg`}
                        alt="360"
                      />
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="model__view tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="model-1"
                    role="tabpanel"
                    aria-labelledby="nav-model-1"
                  >
                    <Slider
                      navigation={true}
                      modules={[Navigation]}
                      className="mySwiper"
                    >
                      {details?.exterior?.banner_images?.map((f, i) => (
                        <>
<Slider {...settings}>
  {details?.exterior?.banner_images?.map((f, i) => (
    <div key={i} className="model__view__banner centered-img-wrapper">
      {f?.image ? (
        <img
          className="centered-img"
          width="1030"
          height="618"
          src={`${urls.dir_url}/${f?.image}`}
          alt="Exterior"
        />
      ) : (
        <img
          className="centered-img"
          width="1030"
          height="618"
          src={`${siteLogos.suzukiLogo}`}
          alt="Exterior"
        />
      )}
    </div>
  ))}
</Slider>

                        </>
                      ))}
                    </Slider>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="model-2"
                    role="tabpanel"
                    aria-labelledby="nav-model-2"
                  >
                    <Slider
                    //   navigation={true}
                    //   modules={[Navigation]}
                      className="mySwiper"
                    >
                      {details?.interior?.banner_images?.map((g, i) => (
                        <>
<div className="model__view__banner centered-img-wrapper">
  {g?.image ? (
    <img
      className="centered-img"
      width="1030"
      height="618"
      src={`${urls.dir_url}/${g?.image}`}
      alt="Exterior"
    />
  ) : (
    <img
      className="centered-img"
      width="1030"
      height="618"
      src={`${siteLogos.suzukiLogo}`}
      alt="Exterior"
    />
  )}
</div>

                        </>
                      ))}
                    </Slider>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="model-3"
                    role="tabpanel"
                    aria-labelledby="nav-model-3"
                  >
                    <div className="modal__color__item">
                      <Slider
                        style={{
                          "--swiper-navigation-color": "#fff",
                          "--swiper-pagination-color": "#fff",
                        }}
                        // spaceBetween={10}
                        // thumbs={{ swiper: thumbsSwiper }}
                        // modules={[FreeMode, Navigation, Thumbs]}
                        className="model__view__color"
                      >
                        {details?.bodycolor?.banner_images?.map((j, i) => (
                          <>
                            <Slider>
                              <div className="model__view__banner centered-img-wrapper">
                                {j?.image ? (
                                  <img
                                    className="centered-img"
                                    src={`${urls.dir_url}/${j?.image}`}
                                  />
                                ) : (
                                  <img
                                    className="centered-img"
                                    width="1030"
                                    height="618"
                                    src={`${siteLogos.suzukiLogo}`}
                                    alt="Exterior"
                                  />
                                )}
                              </div>
                            </Slider>
                          </>
                        ))}
                      </Slider>
                      <div className="model__view__colorT">
                        <Slider
                        //   onSwiper={setThumbsSwiper}
                        //   spaceBetween={10}
                        //   slidesPerView={6}
                        //   freeMode={true}
                          watchSlidesProgress={true}
                          modules={[FreeMode, Navigation, Thumbs]}
                          className="model__view__Thumb"
                        >
                          {details?.bodycolor?.banner_images?.map((k, i) => (
                            <>
                              <Slider>
                                <div className="model__view__thumb bg-white p-1">
                                  <div className="centered-img-wrapper">
                                    {k?.image ? (
                                      <img
                                        className="centered-img"
                                        src={`${urls.dir_url}/${k?.image}`}
                                      />
                                    ) : (
                                      <img
                                        className="centered-img"
                                        src={`${siteLogos.suzukiLogo}`}
                                      />
                                    )}
                                  </div>
                                  {/*<h5 className="model__name mb-0">Red</h5>*/}
                                </div>
                              </Slider>
                            </>
                          ))}
                        </Slider>
                      </div>
                    </div>
                  </div>
                  {params?.id == "swift" ? (
                    <>
                      <div
                        className="model__view__banner centered-img-wrapper tab-pane fade"
                        id="model-4"
                        role="tabpanel"
                        aria-labelledby="nav-model-4"
                      >
                        <Iframe
                          url="http://html.moosagroup.com/swift/large/main.html"
                          width="1030px"
                          height="618px"
                          id=""
                          className="centered-img"
                        />
                      </div>
                    </>
                  ) : null}
                  {params?.id == "2" ? (
                    <>
                      <div
                        className="model__view__banner centered-img-wrapper tab-pane fade"
                        id="model-4"
                        role="tabpanel"
                        aria-labelledby="nav-model-4"
                      >
                        <Iframe
                          url="http://html.moosagroup.com/vitara/large/main.html"
                          width="1030px"
                          height="618px"
                          id=""
                          className="centered-img"
                        />
                      </div>
                    </>
                  ) : null}
                  {params?.id == "3" ? (
                    <>
                      <div
                        className="model__view__banner centered-img-wrapper tab-pane fade"
                        id="model-4"
                        role="tabpanel"
                        aria-labelledby="nav-model-4"
                      >
                        <Iframe
                          url="http://html.moosagroup.com/jimmy/large/main.html"
                          width="1030px"
                          height="618px"
                          id=""
                          className="centered-img"
                        />
                      </div>
                    </>
                  ) : null}
                  {params?.id == "4" ? (
                    <>
                      <div
                        className="model__view__banner centered-img-wrapper tab-pane fade"
                        id="model-4"
                        role="tabpanel"
                        aria-labelledby="nav-model-4"
                      >
                        <Iframe
                          url="http://html.moosagroup.com/ertiga/large/main.html"
                          width="1030px"
                          height="618px"
                          id=""
                          className="centered-img"
                        />
                      </div>
                    </>
                  ) : null}
                  {params?.id == "5" ? (
                    <>
                      <div
                        className="model__view__banner centered-img-wrapper tab-pane fade"
                        id="model-4"
                        role="tabpanel"
                        aria-labelledby="nav-model-4"
                      >
                        <Iframe
                          url="http://html.moosagroup.com/dzire/large/main.html"
                          width="1030px"
                          height="618px"
                          id=""
                          className="centered-img"
                        />
                      </div>
                    </>
                  ) : null}

                  {params?.id == "8" ? (
                    <>
                      <div
                        className="model__view__banner centered-img-wrapper tab-pane fade"
                        id="model-4"
                        role="tabpanel"
                        aria-labelledby="nav-model-4"
                      >
                        <Iframe
                          url="http://html.moosagroup.com/baleno/large/main.html"
                          width="1030px"
                          height="618px"
                          id=""
                          className="centered-img"
                        />
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}

      <section className="car_model__details--block bg-white py-5">
        <div className="container">
          <div className="col-md-12">
            <div className="row">
              <div className="car_model__details">
                {!headerBanners.length ? (
                  <h1>Not data found</h1>
                ) : (
                  <span
                    dangerouslySetInnerHTML={{ __html: description }}
                  ></span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarModel;
