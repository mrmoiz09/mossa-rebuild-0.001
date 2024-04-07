import React, { useState, useEffect, useCallback } from 'react';
import { HomeApi } from '../../config/api';
import { useParams } from 'react-router';
import MoveCursorToTop from '../../services/MoveCursorToTop';
import { defaultHeader, validateJsonString } from '../../services/CommonFunction';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { callApi } from '../../services/ApiService';
import Slider from 'react-slick';

const Blogs = () => {
  MoveCursorToTop();

  const [blog, setBlog] = useState([]);
  const params = useParams();

  const fetchBlog = useCallback(async () => {
    try {
      const res = await callApi(HomeApi.getBlogsByAlias.method, `${HomeApi.getBlogsByAlias.url}/${params?.alias}`, null, null, defaultHeader());
      if (!res?.data?.error) {
        const payload = res?.data?.data;
        if (Array.isArray(payload) && payload.length > 0) {
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
        console.error(res?.data?.message);
      }
    } catch (err) {
      console.error(err.message);
    }
  }, [params?.alias]);

  useEffect(() => {
    fetchBlog();
  }, [fetchBlog]);

  return (
    <>
      <section className="hero__banner--block">
        {blog.length > 0 ?
          <Slider className="car__model__slider swiper" autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }} pagination={true} >
            {blog[0]?.blog_banner ? blog[0]?.blog_banner.map((v, i) => (
              <div key={i} className="hero__banner--img centered-img-wrapper">
                <img className="centered-img" src={`https://api.moosagroup.com/public/${v?.image}`} width="1920" height="940" alt="Hero Banner" />
              </div>
            )) : null}
          </Slider>
          : <div className="car__model__slider">
            <div className="hero__banner--img centered-img-wrapper">
              <img className="centered-img" src={`https://www.moosagroup.com/frontend/public/images/blog-banner.jpg`} width="1920" height="940" alt="Hero Banner" />
            </div>
          </div>}
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
                <img src={`https://www.moosagroup.com/frontend/public/images/baleno-banner.jpg`} alt="Banner" />
              </div>
              <div className="blog__details">
                <h2 className="text-uppercase mb-4">NEXA, BALENO</h2>
                <p>NEXA has always been at the forefront of innovations and curating impeccable experiences that not only impress but inspire. By foraying into the fields of fashion, music, and entertainment, NEXA has successfully created and inspired multiple unique experiences for its customers. Our intent lies in ensuring our consumers never run out of inspiration, to create, and to empower. To cater to their ever-evolving needs, we have established brand pillars that strive to encapsulate the NEXA experience. One such initiative which is a reflection of NEXA’s innovative lifestyle vision is the NEXA IIFA Awards 2022.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius enim nisi, egestas malesuada feugiat auctor vulputate. Adipiscing nibh mus amet, blandit orci. Ut felis magna morbi blandit. Purus massa amet, rhoncus etiam nunc malesuada eget. In dolor malesuada pharetra at egestas a. Enim elit imperdiet sed cursus. Porttitor odio non amet id. Neque a nibh placerat viverra aenean nulla non, amet id. Eu libero fames aliquet tincidunt gravida.</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          {blog.length > 0 ?
            <span dangerouslySetInnerHTML={{ __html: blog[0]?.long_description_arr }}></span>
            : <span dangerouslySetInnerHTML={{ __html: "<h1>Not found</h1>" }}></span>}
        </div>
      </section>
    </>
  )
}

export default Blogs;
