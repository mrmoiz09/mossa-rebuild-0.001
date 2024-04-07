import React, { useState, useEffect } from 'react';
import { HomeApi } from '../../config/api';
import { useParams } from 'react-router';
import MoveCursorToTop from '../../services/MoveCursorToTop';
import { defaultHeader, validateJsonString } from '../../services/CommonFunction';
import { callApi } from '../../services/ApiService';
import { Link } from "react-router-dom";
import { commonRoutes, HomeRoutes, SuzukiRoutes } from '../../config/RouteConfig';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Blogs = () => {
    MoveCursorToTop();
    const [blog, setBlog] = useState([]);
    const params = useParams();
    const [blogs, setBlogs] = useState([]);

    const fetchBlog = async () => {
        await callApi(HomeApi.getBlogsByAlias.method, `${HomeApi.getBlogsByAlias.url}/${params?.alias}`, null, null, defaultHeader()).then((res) => {
            if (!res?.data?.error) {
                const payload = res?.data?.data;
                if (Array.isArray(payload)) {
                    const data = payload[0];
                    setBlog([{
                        title: data?.title,
                        short_description: data?.short_description,
                        alias: data?.alias,
                        long_description: data?.long_description,
                        image3: data?.image3,
                        image1: data?.image1,
                        blog_banner: validateJsonString(data?.blog_banner)
                    }]);
                }
            }
        }).catch((err) => {
            console.error(err);
        });
    };

    const fetchBlogs = async () => {
        await callApi(HomeApi.getBlogs.method, `${HomeApi.getBlogsDetails.url}/${params?.alias}`, null, null, defaultHeader()).then((res) => {
            if (!res?.data?.error) {
                const payload = res?.data?.data;
                if (Array.isArray(payload)) {
                    setBlogs(payload);
                }
            }
        }).catch((err) => {
            console.error(err);
        });
    };

    useEffect(() => {
        fetchBlog();
        fetchBlogs();
    }, [params?.alias]);

    return (
        <>
            <section className="enquiry--block" style={{ backgroundImage: `https://api.moosagroup.com/public/${blog[0]?.image3})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="enquiry__form bg-white">
                                <div className="page__title mb-3" style={{ textAlign: "center" }}>
                                    <h2 className="h6 text-uppercase text-black mb-0" style={{ borderBottom: "2px solid #000000" }}>{blog[0]?.title}</h2>
                                </div>
                                {blog.length > 0 ?
                                    <span dangerouslySetInnerHTML={{ __html: blog[0]?.long_description }}></span>
                                    : <span dangerouslySetInnerHTML={{ __html: "" }}></span>}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="our__stories--block blue-bg">
                <div className="main__title">
                    <h4 className="text-uppercase text-white" data-aos="fade-up">Our Other STORIES</h4>
                </div>

                <Slider className="our__stories__slider swiper"
                    slidesPerView={1} loop={false}
                    spaceBetween={30}
                    responsive={{
                        0: {
                            slidesPerView: 1.5,
                            spaceBetween: 15,
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
                        }
                    }}
                >
                    {blogs.length > 0 ? blogs.map((b, i) => (
                        <div key={i} className="our__stories--item bg-white" data-aos="fade-up">
                            <div className="our__stories--images centered-img-wrapper">
                                <Link to={`/${HomeRoutes.blogs}/${b?.alias}`}><img className="lazy-load centered-img" src={`https://api.moosagroup.com/public/${b?.image1}`} width="370" height="210" alt="Stories" /></Link>
                            </div>
                            <div className="our__stories--details">
                                <h4>{b?.title}</h4>
                                <p className="font-weight-light">{b?.short_description}</p>
                                <Link to={`/${HomeRoutes.blogs}/${b?.alias}`} className="font-weight-bold">Read More {">>"}</Link>
                            </div>
                        </div>
                    )) : ""}
                </Slider>
            </section>
        </>
    );
}

export default Blogs;
