import React, { useState, useEffect, useCallback } from 'react';
import { urls } from '../../config/constants';
import MoveCursorToTop from '../../services/MoveCursorToTop';
import { useParams } from 'react-router';
import { defaultHeader, validateJsonString } from '../../services/CommonFunction';
import { callApi } from '../../services/ApiService';
import { SuzukiApi } from '../../config/api';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Blogs = () => {
  MoveCursorToTop();
  const [blog, setBlog] = useState([]);
  const params = useParams();
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const fetchBlog = useCallback(async () => {
    await callApi(SuzukiApi.getBlogsByAlias.method, `${SuzukiApi.getBlogsByAlias.url}/${params?.alias}`, null, null, defaultHeader()).then((res) => {
      if (!res?.data?.error) {
        // toastSuccess(res?.data?.message);
        const payload = res?.data?.data;
        if (Array.isArray(payload)) {
          const data = payload[0];

          setBlog([{
            title_arr: data?.title_arr,
            short_description_arr: data?.short_description_arr,
            alias: data?.alias,
            long_description_arr: data?.long_description_arr,
            image1: data?.image1,
            blog_banner: validateJsonString(data?.blog_banner)
          }]);
        }
      } else {
        //   toastError(res?.data?.message);
      }
    }).catch((err) => {
      // toastError(err?.response?.data?.message);
    })
  }, []);

  useEffect(() => {
    fetchBlog();
  }, []);
  return (
    <>
      <section className="hero__banner--block">
        {blog.length > 0 ?

<Slider className="car__model__slider" {...sliderSettings}>
{blog[0]?.blog_banner && blog[0]?.blog_banner.map((v, i) => (
  <div key={i} className="hero__banner--img centered-img-wrapper">
    <img className="centered-img" src={`${urls.dir_url}/${v?.image}`} width="1920" height="940" alt="Hero Banner" />
  </div>
))}
</Slider>
          : <div className="car__model__slider">
            <div className="hero__banner--img centered-img-wrapper">
              <img className="centered-img" src={`${urls.frontendUrl}/images/blog-banner.jpg`} width="1920" height="940" alt="Hero Banner" />
            </div>
          </div>}
        {/* <div className="car__model__slider">
                <div className="hero__banner--img centered-img-wrapper">
                    <img className="centered-img" src={`${urls.frontendUrl}/images/blog-banner.jpg`} width="1920" height="940" alt="Hero Banner" />
                </div>
            </div> */}
      </section>
      <section className="blog__details--block my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="blog__details">
                <h1 className="h2 text-uppercase mb-4">NEXA, THE STAR AMONGST STARS</h1>
                <p>NEXA has always been at the forefront of innovations and curating impeccable experiences that not only impress but inspire. By foraying into the fields of fashion, music, and entertainment, NEXA has successfully created and inspired multiple unique experiences for its customers. Our intent lies in ensuring our consumers never run out of inspiration, to create, and to empower. To cater to their ever-evolving needs, we have established brand pillars that strive to encapsulate the NEXA experience. One such initiative which is a reflection of NEXA’s innovative lifestyle vision is the NEXA IIFA Awards 2022.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius enim nisi, egestas malesuada feugiat auctor vulputate. Adipiscing nibh mus amet, blandit orci. Ut felis magna morbi blandit. Purus massa amet, rhoncus etiam nunc malesuada eget. In dolor malesuada pharetra at egestas a. Enim elit imperdiet sed cursus. Porttitor odio non amet id. Neque a nibh placerat viverra aenean nulla non, amet id. Eu libero fames aliquet tincidunt gravida.</p>
                <p>The star-studded event is representative of the rich and varied Hindi film culture across India. This year, the grand affair marked its 6th year of association with NEXA.NEXA’s theme this year, the Green Carpet ready look, was a big hit. Our audiences were asked to share their green carpet-ready looks and the winner was rewarded with a golden ticket to IIFA.</p>
              </div>
              <div className="blog__banner my-5">
                <img src={`${urls.frontendUrl}/images/baleno-banner.jpg`} alt="Banner" />
              </div>
              <div className="blog__details">
                <h2 className="text-uppercase mb-4">NEXA, BALENO</h2>
                <p>NEXA has always been at the forefront of innovations and curating impeccable experiences that not only impress but inspire. By foraying into the fields of fashion, music, and entertainment, NEXA has successfully created and inspired multiple unique experiences for its customers. Our intent lies in ensuring our consumers never run out of inspiration, to create, and to empower. To cater to their ever-evolving needs, we have established brand pillars that strive to encapsulate the NEXA experience. One such initiative which is a reflection of NEXA’s innovative lifestyle vision is the NEXA IIFA Awards 2022.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius enim nisi, egestas malesuada feugiat auctor vulputate. Adipiscing nibh mus amet, blandit orci. Ut felis magna morbi blandit. Purus massa amet, rhoncus etiam nunc malesuada eget. In dolor malesuada pharetra at egestas a. Enim elit imperdiet sed cursus. Porttitor odio non amet id. Neque a nibh placerat viverra aenean nulla non, amet id. Eu libero fames aliquet tincidunt gravida.</p>
              </div>
            </div>
          </div>
        </div>
        <hr/>
          <div className="container">
            {blog.length>0 ? 
            <span  dangerouslySetInnerHTML={{ __html: blog[0]?.long_description_arr }}></span>  
            : <span  dangerouslySetInnerHTML={{ __html:"<h1>Not found</h1>" }}></span>  }
          </div>
      </section>
    </>
  )
}

export default Blogs