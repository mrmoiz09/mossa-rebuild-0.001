import React, { useState, useEffect, useCallback } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { urls } from '../../config/constants';
import { callApi } from '../../services/ApiService';
import { SuzukiApi } from '../../config/api';
import { defaultHeader, toastError } from '../../services/CommonFunction';


const SuzukiCurrentOffers = () => {
    const [offers, setOffers] = useState([]);

    const fetchOffers = useCallback(async () => {
        await callApi(SuzukiApi.getCurrentOffers.method, SuzukiApi.getCurrentOffers.url, null, null, defaultHeader())
            .then((res) => {
                if (!res?.data?.error) {
                    const payload = res?.data?.data;
                    if (Array.isArray(payload)) {
                        setOffers(payload);
                    }
                } else {
                    toastError(res?.data?.message);
                }
            })
            .catch((err) => {
                toastError(err?.response?.data?.message);
            });
    }, []);

    useEffect(() => {
        fetchOffers();
    }, [fetchOffers]);

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
        <section className="current__offer--block">
            <Slider {...settings}>
                {offers.map((offer, index) => (
                    <div key={index} className="offer__item" data-aos="fade-right">
                        <div className="offer__item--img">
                            <img src={`${urls.dir_url}/${offer?.image}`} alt="Offer" />
                        </div>
                        <div className="offer__item--content">
                            <h4>{offer?.title}</h4>
                            <p>{offer?.description}</p>
                            <Link to={`/offers/${offer?.id}`} className="btn">
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default SuzukiCurrentOffers;
