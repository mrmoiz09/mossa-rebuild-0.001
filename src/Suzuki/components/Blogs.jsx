import React, { useState, useEffect, useCallback } from 'react';
import { urls } from '../../config/constants';
import MoveCursorToTop from '../../services/MoveCursorToTop';
import { useParams } from 'react-router';
import { defaultHeader, validateJsonString } from '../../services/CommonFunction';
import { callApi } from '../../services/ApiService';
import { SuzukiApi } from '../../config/api';
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import { SuzukiRoutes } from '../../config/RouteConfig';
const Blogs = () => {
    MoveCursorToTop();

    const [blog, setBlog] = useState([]);
    const params = useParams();
    const [blogs, setBlogs] = useState([]);

    const fetchBlog = useCallback(async () => {
        await callApi(SuzukiApi.getBlogsByAlias.method, `${SuzukiApi.getBlogsByAlias.url}/${params?.alias}`, null, null, defaultHeader())
            .then((res) => {
                if (!res?.data?.error) {
                    const payload = res?.data?.data;
                    if (Array.isArray(payload)) {
                        const data = payload[0];
                        setBlog([{
                            title: data?.title,
                            short_description: data?.short_description,
                            alias: data?.alias,
                            long_description: data?.long_description,
                            image1: data?.image1,
                            image3: data?.image3,
                            blog_banner: validateJsonString(data?.blog_banner)
                        }]);
                    }
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }, [params?.alias]);

    const fetchBlogs = useCallback(async () => {
        await callApi(SuzukiApi.getBlogs.method, `${SuzukiApi.getBlogsDetails.url}/${params?.alias}`, null, null, defaultHeader())
            .then((res) => {
                if (!res?.data?.error) {
                    const payload = res?.data?.data;
                    if (Array.isArray(payload)) {
                        setBlogs(payload);
                    }
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }, [params?.alias]);

    useEffect(() => {
        fetchBlog();
        fetchBlogs();
    }, [fetchBlog, fetchBlogs]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4.5,
                }
            }
        ]
    };

    return (
        <>
            <section className="enquiry--block" style={{ backgroundImage: `url(${urls.dir_url}/${blog[0]?.image3})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="enquiry__form bg-white">
                                <div class="page__title mb-3" style={{ textAlign: "center" }}>
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

                <Slider {...settings}>
                    {blogs.map((b, i) => (
                        <div key={i} className="our__stories--item bg-white" data-aos="fade-up">
                            <div className="our__stories--images centered-img-wrapper">
                                <Link to={`/${SuzukiRoutes.blogs}/${b?.alias}`}><img className="lazy-load centered-img" src={`${urls.dir_url}/${b?.image1}`} width="370" height="210" alt="Stories" /></Link>
                            </div>
                            <div className="our__stories--details">
                                <h4>{b?.title}</h4>
                                <p className="font-weight-light">{b?.short_description}</p>
                                <Link to={`/${SuzukiRoutes.blogs}/${b?.alias}`} className="font-weight-bold">Read More {">>"}</Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
        </>
    )
}

export default Blogs;
