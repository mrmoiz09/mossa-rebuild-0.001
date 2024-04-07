import React, { useState, useEffect, useCallback } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CommonApi } from '../../config/api';
import { urls } from '../../config/constants';
import { callApi } from '../../services/ApiService';
import { defaultHeader } from '../../services/CommonFunction';
import { Link } from "react-router-dom";
import MoveCursorToTop from '../../services/MoveCursorToTop';

const Download = () => {
    MoveCursorToTop();

    const [data, setData] = useState([]);

    const fetchData = useCallback(async () => {
        try {
            const res = await callApi(CommonApi.getBrochure.method, CommonApi.getBrochure.url, null, null, defaultHeader());
            if (!res?.data?.error) {
                const payload = res?.data?.data;
                if (Array.isArray(payload) && payload?.length > 0) {
                    setData(payload.filter(d => d?.type === '2'));
                }
            } else {
                // toastError(res?.data?.message);
            }
        } catch (err) {
            // toastError(err?.response?.data?.message);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return (
        <>
            <section className="hero__banner_inner--block" style={{ backgroundImage: "url('../images/about-hero-banner.jpg')" }}>
                <div className="container">
                    <div className="page__title">
                        <h2 className="h6 text-white mb-0">DOWNLOAD BROCHURE</h2>
                    </div>
                </div>
            </section>
            <section className="about_us--block py-5 bg-white">
                <div className="container">
                    <div className="row">
                        <Slider {...settings}>
                            {data.map((d, i) => (
                                <div key={i} className="col-md-3">
                                    <figure className="text-center">
                                        <a href={`${urls.dir_url}/${d?.files}`} target="_blank">
                                            <img src={`${urls.dir_url}/${d?.image}`} alt="Exterior" />
                                            <h4 style={{ marginTop: '5px' }}>{d?.title}</h4>
                                        </a>
                                    </figure>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Download;
