import React, { useState, useEffect, useCallback, memo } from 'react'
import { urls } from '../../config/constants'
import { GetDate, todayDate } from '../../services/DateAndTime'
import AOS from 'aos';
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import {HomeARRoutes } from '../../config/RouteConfig';

const Footer = () => {
        useEffect(()=>{
        AOS.init();
        AOS.refresh();
    },[]);
  return (
    <footer className="footer light-grey-bg" data-aos="fade-up">
        <div className="footer-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="footer-widget">
                            <h4 className="text-white text-uppercase"><a href="https://gmc.moosagroup.com/sierra-1500-family/" target="_blank">What's New</a></h4>
                            <ul className="mb-0 list-unstyled">
                                <li><Link to={`/${HomeARRoutes.moosa_connect}`}>MOOSA CONNECT</Link></li>
                                <li><a href="https://gmc.moosagroup.com/new-vehicles/the-all-new-sierra/" target="_blank">GMC YUKON</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="footer-widget">
                            <h4 className="text-white text-uppercase"><Link to={`/${HomeARRoutes.contactusRoute}`}>CONTACT US</Link></h4>
                            <ul className="mb-0 list-unstyled">
                                <li><Link to={`/${HomeARRoutes.test_drive}`}>REQUEST A TEST DRIVE</Link></li>
                                <li><Link to={`/${HomeARRoutes.requestQuoteRoute}`}>REQUEST A QUOTE</Link></li>
                                <li><Link to={`/${HomeARRoutes.ournetworkRoute}`}>OUR NETWORK</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-6">
                        <div className="footer-widget">
                            <h4 className="text-white text-uppercase">FOLLOW US</h4>
                            <ul className="mb-0 list-unstyled">
                                <li><a href="#">KEEP UP TO DATE WITH ALL THE LATEST</a></li>
                                <li><a href="#">SOCIAL UPDATES FROM GMC & SUZUKI.</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="footer-widget">
                            <h4 className="text-white text-uppercase"></h4>
                            <ul className="social-icons list-unstyled d-flex align-content-center justify-content-end">
                                <li className="text-uppercase text-white">GMC</li>
                                <li>
                                    <a href="https://www.facebook.com/gmc.oman" target="_blank"><img className="in-svg" width="15" height="15" src={`${urls.frontendUrl}/images/facebook.svg`} alt="Facebook"/></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/gmc_oman/" target="_blank"><img className="in-svg" width="15" height="15" src={`${urls.frontendUrl}/images/instagram.svg`}  alt="Instagram"/></a>
                                </li>
                            </ul>
                            <ul className="social-icons list-unstyled d-flex align-content-center justify-content-end">
                                <li className="text-uppercase text-white">SUZUKI</li>
                                <li>
                                    <a href="https://www.facebook.com/suzuki.oman/" target="_blank"><img className="in-svg" width="15" height="15" src={`${urls.frontendUrl}/images/facebook.svg`}  alt="Facebook"/></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/suzukioman/" target="_blank"><img className="in-svg" width="15" height="15" src={`${urls.frontendUrl}/images/instagram.svg`}  alt="Instagram"/></a>
                                </li>
                            </ul>
                            <ul className="social-icons list-unstyled d-flex align-content-center justify-content-end">
                                <li className="text-uppercase text-white">SIXT</li>
                                <li>
                                    <a href="https://www.facebook.com/sixt/?brand_redir=640390739632289" target="_blank"><img className="in-svg" width="15" height="15"  src={`${urls.frontendUrl}/images/facebook.svg`}  alt="Facebook"/></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/sixt_oman/" target="_blank"><img className="in-svg" width="15" height="15" src={`${urls.frontendUrl}/images/instagram.svg`}  alt="Instagram"/></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="footer__logo text-center mt-5">
                            <Link to={`/${HomeARRoutes.home}`} title="Moosa Abdul Rahman Hassan & Company">
                                <img className="lazy-load"  src={`${urls.frontendUrl}/images/footer-logo.png`}  width="645" height="68" alt="Moosa Abdul Rahman Hassan & Company"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p class="copyright__text text-center mb-0 text-uppercase mb-0">© <script>document.write(new Date().getFullYear())</script>2022 MOOSA ABDUL RAHMAN HASSAN &amp; CO. LLC | Developed by XK Design Studio</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer