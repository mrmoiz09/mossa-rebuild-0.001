import VehicleCareAndMaintanceForm from './Forms/VehicleCareAndMaintanceForm';
import React, { useState, useEffect, useCallback, memo } from 'react';
import { CommonApi, HomeApi } from '../../config/api';
import { defaultHeader, toastError, toastSuccess } from '../../services/CommonFunction';
import { urls } from '../../config/constants';
import { callApi } from '../../services/ApiService';
import { commonRoutes, HomeRoutes, SuzukiRoutes } from '../../config/RouteConfig';
import MoveCursorToTop from '../../services/MoveCursorToTop';
import Slider from 'react-slick'; // Import Slick React Slider

const VehicleCareAndMaintance = () => {
    MoveCursorToTop();
    const [data, setData] = useState([]);
    const fetchData = useCallback(async () => {
        await callApi(CommonApi.getSettings.method, CommonApi.getSettings.url, null, null, defaultHeader()).then((res) => {
            if (!res?.data?.error) {
                const arr = [];
                const payload = res?.data?.data;
                if (Array.isArray(payload) && payload?.length > 0) {
                    for (let p of payload) {
                        if (p?.key_name == 'vehicle-care') {
                            setData(p?.key_value);
                            console.log(p?.key_value);
                        }
                    }
                }
            } else {
                // toastError(res?.data?.message);
            }
        }).catch((err) => {
            // toastError(err?.response?.data?.message);
        })
    }, []);

    const [data1, setData1] = useState([]);

    const fetchData1 = useCallback(async () => {
        try {
            const res = await callApi(CommonApi.getPageBanner.method, CommonApi.getPageBanner.url, null, null, defaultHeader());

            if (!res?.data?.error) {
                const payload = res?.data?.data;
                console.log(payload);
                if (Array.isArray(payload) && payload?.length > 0) {
                    setData1(payload);
                }
            }
        }
        catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        fetchData();
        fetchData1();
    }, []);

    // Slick React Slider settings
    const sliderSettings = {
        autoplay: true,
        autoplaySpeed: 2500,
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className="enquiry--block" style={{ backgroundImage: `url(${urls.dir_url}/${data})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="enquiry__form bg-white mt">
                            <div className="car__model__slider">
                                <Slider {...sliderSettings}> {/* Use Slick React Slider */}
                                    {data1.map((d, i) =>
                                        (d?.type == '1' && d?.pages == '6') ?
                                            (
                                                <div key={i} className="hero__banner--img centered-img-wrapper responsive_wrapper" data-aos="fade-down" data-aos-duration="1300">
                                                    <img className="lazy-load centered-img responsive_img" src={`${urls.dir_url}/${d?.image}`} width="1920" height="940" alt="Hero Banner" />
                                                </div>
                                            ) : null)}
                                </Slider>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="enquiry__form bg-white">
                            <div className="page__title mb-3" style={{ textAlign: "center" }}>
                                <h2 className="h6 text-uppercase text-black mb-0" style={{ borderBottom: "2px solid #000000" }}>vehicle care and Maintenance Products</h2>
                            </div>
                            <p>Check out our selection of automotive maintenance, cleaning, and refinishing products. They extend the life of your vehicle as well as enhance performance and safety.</p>
                            <VehicleCareAndMaintanceForm />
                            <div className="tool__free text-center my-4">
                                <a href="tel:80076200"><img className="in-svg" src={`${urls.frontendUrl}/images/toll-free-icon.svg`} alt="Toll Free" /> 80076200</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VehicleCareAndMaintance;
