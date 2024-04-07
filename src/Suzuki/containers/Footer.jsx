import React, { useState, useEffect, useCallback, memo } from 'react'
import { urls } from '../../config/constants'
import { GetDate, todayDate } from '../../services/DateAndTime'
import AOS from 'aos';
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import { commonRoutes, HomeARRoutes, HomeRoutes, SuzukiRoutes } from '../../config/RouteConfig';

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
                                <li><Link to={`/${HomeRoutes.moosa_connect}`}>MOOSA CONNECT</Link></li>
                                <li><a href="https://gmc.moosagroup.com/new-vehicles/the-all-new-sierra/" target="_blank">GMC YUKON</a></li>
                            </ul>
                        </div>
                    </div>
                     <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="footer-widget">
                            <h4 className="text-white text-uppercase"><a href="#">QUICK LINKS</a></h4>
                            <ul className="mb-0 list-unstyled">
                                <li><Link to={`/${SuzukiRoutes.enquiryRoute}`}>REQUEST A TEST DRIVE</Link></li>
                                <li><Link to={`/${SuzukiRoutes.requestQuoteRoute}`}>REQUEST A QUOTE</Link></li>
                                <li><Link to={`/${SuzukiRoutes.ournetworkRoute}`}>OUR NETWORK</Link></li>
                            </ul>
                        </div>
                    </div> 
                    {/*<div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="footer-widget">
                            <h4 className="text-white text-uppercase"><a href="#">OUR UMBRELLA</a></h4>
                            <ul className="mb-0 list-unstyled">
                                <li><a href="https://gmc.moosagroup.com/" target="_blank">GMC</a></li>
                                <li><Link to={`/${SuzukiRoutes.home}`}>SUZUKI</Link></li>
                                <li><a href="https://www.sixt.global/php/reservation/home?language=en_GB&posl=OM&land=OM&fir=412" target="_blank">SIXT</a></li>
                                <li><Link to={`/${HomeRoutes.partEnquiryRoute}`}>PARTS</Link></li>
                            </ul>
                        </div>
                    </div>*/}
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="footer-widget">
                            <h4 className="text-white text-uppercase"><a href="#">Contact us</a></h4>
                            <ul className="mb-0 list-unstyled">
                                <li><a href="tel:80076200" target="_blank">80076200</a></li>
                                <li><a href="mailto:moosaconnect@moosagroup.com" target="_blank">moosaconnect@moosagroup.com</a></li>
                                <li><a href="#" target="_blank">P.O Box 4. Postal Code 112. Muscat</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="footer-widget">
                            <h4 className="text-white text-uppercase"><a href="#">FOLLOW US</a></h4>
                            <ul className="ml-3 social-icons list-unstyled d-flex align-content-center justify-content-start">
                            <li className="text-uppercase text-white">MARH</li>
                                <li>
                                <a href="https://www.linkedin.com/company/moosa-abdul-rahman-hassan-co-llc" target="_blank">
                                <img className="in-svg" src={`${urls.frontendUrl}/images/linkedin.svg`} width="15" height="15" alt="Linkedin"/>
                                </a>
                                </li>
                            </ul>
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
                            <Link to={`/`} title="Moosa Abdul Rahman Hassan & Company">
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