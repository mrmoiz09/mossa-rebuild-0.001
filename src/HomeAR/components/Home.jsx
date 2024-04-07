import React, { useState, useEffect, useCallback } from 'react';
import { CommonApi, HomeApi } from '../../config/api';
import { urls } from '../../config/constants';
import { callApi } from '../../services/ApiService';
import { defaultHeader, toastError, toastSuccess } from '../../services/CommonFunction';
import { image2svg } from '../../utilsfunctions/Svg';
import { commonRoutes, HomeARRoutes, SuzukiARRoutes } from '../../config/RouteConfig';
import { Link } from "react-router-dom";
import AOS from 'aos';
import "aos/dist/aos.css";
import MoveCursorToTop from '../../services/MoveCursorToTop';

const Home = () => {

  MoveCursorToTop();

  const [banners, setBanners] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [topImages, setTopImages] = useState([]);
  const [gmc_suzuki_service_images, set_gmc_suzuki_service_images] = useState([]);
  const [gmc_trucks, set_gmc_trucks] = useState([]);
  const [middle_images, set_middle_images] = useState([]);
  const [owner, set_owner] = useState([]);

  const fetchHomeImages = useCallback(async () => {
    await callApi(HomeApi.getHomePageImages.method, HomeApi.getHomePageImages.url, null, null, defaultHeader()).then((res) => {
      if (!res?.data?.error) {
        const payload = res?.data?.data;

        if (Array.isArray(payload?.top_banner) && payload?.top_banner?.length > 0) {
          setTopImages(payload?.top_banner);
        }

        if (Array.isArray(payload?.gmc_suzuki_service) && payload?.gmc_suzuki_service?.length > 0) {
          set_gmc_suzuki_service_images(payload?.gmc_suzuki_service);
        }

        if (Array.isArray(payload?.gmctruck) && payload?.gmctruck?.length > 0) {
          set_gmc_trucks(payload?.gmctruck);
        }

        if (Array.isArray(payload?.middlebanner) && payload?.middlebanner?.length > 0) {
          set_middle_images(payload?.middlebanner);
        }

        if (Array.isArray(payload?.owner) && payload?.owner?.length > 0) {
          set_owner(payload?.owner);
        }
      }
    }).catch((err) => {
      toastError(err?.response?.data?.message);
    })
  }, []);

  const fetchBlogs = useCallback(async () => {
    await callApi(HomeApi.getBlogs.method, HomeApi.getBlogs.url, null, null, defaultHeader()).then((res) => {
      if (!res?.data?.error) {
        const payload = res?.data?.data;
        if (Array.isArray(payload)) {
          setBlogs(payload);
        }
      }
    }).catch((err) => {
      toastError(err?.response?.data?.message);
    })
  }, []);

  useEffect(() => {
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
          <img className="lazy-load centered-img" src={`${urls.frontendUrl}/images/GMC_MY22-Sierra_Denali-Ultimate_Hero_30s_16x9_EN.gif`} width="1920" height="1172" alt="Hero Banner" />
        </div>
        <div className="hero__banner--content text-center">
          <div data-aos="fade-up" data-aos-duration="1100">
            <h1 className="text-white text-uppercase h4">Road trips aren’t measured by mile markers, but by moments.</h1>
            <Link to={`/${commonRoutes.aboutusRoute}`} className="btn">view More ARABIC</Link>
          </div>
        </div>
      </section>

      <section className="car__cetegory--block blue-bg">
        {/* Car category content */}
      </section>

      <section className="about__marh--block blue-bg">
        {/* About content */}
      </section>

      <section className="gmc__truck--block bg-white">
        {/* GMC Trucks content */}
      </section>

      <section className="ceo--block" style={{ backgroundImage: "url('/images/ceo_banner_bg.jpg')" }}>
        {/* CEO content */}
      </section>

      <section className="our__stories--block blue-bg">
        {/* Our stories content */}
      </section>
    </>
  )
}

export default Home;
