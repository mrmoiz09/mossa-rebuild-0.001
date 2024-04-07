import React, { useEffect } from 'react'
import { Link,NavLink } from "react-router-dom";
import { urls } from '../../config/constants';
import { commonRoutes, HomeARRoutes, HomeRoutes, SuzukiARRoutes, SuzukiRoutes } from '../../config/RouteConfig';
import { image2svg } from '../../utilsfunctions/Svg';
import AOS from 'aos';
import "aos/dist/aos.css";
import GetSuzukiCar from '../../images/Models/GetSuzukiCar';

const Header2 = () => {

    const [carList,setCarList] = GetSuzukiCar();

    useEffect(()=>{
        image2svg();
        AOS.init();
        AOS.refresh();
    },[]);
  return (
    <header className="header header-2">
        <div className="header__top">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <div className="logo">
                            <Link to={`/${HomeARRoutes.home}`}>
                                <Link to={`/${SuzukiARRoutes.home}`}>
                                    <picture>
                                        <img src={`${urls.frontendUrl}/images/suzuki-logo-white.png`} width="131" height="25" alt="Moosa Abdul Rahman Hassan & Company" />
                                    </picture>
                                </Link>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="header__top--links d-flex align-items-end justify-content-end flex-column">
                            <ul className="header__top--action list-unstyled d-flex align-items-end">
                               <li>
                                    <a href="tel:+96894760010"><span>CALL: +968 9476 0010</span></a>
                                </li>
                                <li>
                                    <Link to={`/${SuzukiRoutes.home}`}>ENG</Link>
                                </li>
                            </ul>
                            <ul className="header__top--logos mb-0 list-unstyled d-flex align-items-end">
                                <li class="mr-0">
                                    <Link to={`/${HomeARRoutes.home}`}><img src={`${urls.frontendUrl}/images/logo.png`} width="75" height="20" alt="GSM" /></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="header__main">
            <div className="container-fluid">
                <div className="mobile__menu">
                    <div className="mobile__line"></div>
                    <div className="mobile__line"></div>
                    <div className="mobile__line"></div>
                </div>
                <nav className="navbar navbar-expand-lg p-0">
                    <ul className="navbar-nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.globalsuzuki.com/" target="_blank">suzuki global</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Offers</a>
                            <span className="menu-arrow"><img className="in-svg" src={`${urls.frontendUrl}/images/down-arrow.svg`} alt="Arrow" /></span>
                            <ul className="nav-sub-menu list-unstyled">
                                <li className="sub-menu-item">
                                    <Link to={`/${SuzukiARRoutes.suzukicurrentoffers}`}>Current offers</Link>
                                </li>
                                <li className="sub-menu-item">
                                   <Link to={`/${SuzukiARRoutes.bmeppRoute}`}>bm epp</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item has-child">
                            <a className="nav-link" href="#">service</a>
                            <span className="menu-arrow"><img className="in-svg" src={`${urls.frontendUrl}/images/down-arrow.svg`} alt="Arrow" /></span>
                            <ul className="nav-sub-menu list-unstyled">
                                <li className="sub-menu-item">
                                    <Link to={`/${SuzukiARRoutes.book_your_service}`}>Book your service</Link>
                                </li>
                                <li className="sub-menu-item">
                                    <Link to={`/${SuzukiARRoutes.menuprice}`}>Menu Pricing</Link>
                                </li>
                                <li className="sub-menu-item">
                                    <Link to={`/${SuzukiARRoutes.maintenance}`}>Maintenance</Link>
                                </li>
                                <li className="sub-menu-item">
                                    <Link to={`/${SuzukiARRoutes.body_shop}`}>Body Shop</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item has-child">
                            <a className="nav-link" href="#">Owners</a>
                            <span className="menu-arrow"><img className="in-svg" src={`${urls.frontendUrl}/images/down-arrow.svg`} alt="Arrow" /></span>
                            <ul className="nav-sub-menu list-unstyled">
                                <li className="sub-menu-item">
                                    <a href="#">Accessories Enquiry</a>
                                </li>
                                <li className="sub-menu-item">
                                    <Link to={`/${SuzukiARRoutes.partEnquiryRoute}`}>Parts Enquiry</Link>
                                </li>
                                <li className="sub-menu-item">
                                    <Link to={`/${SuzukiARRoutes.book_your_service}`}>Service Enquiry</Link>
                                </li>
                                <li className="sub-menu-item">
                                    <a href="#">Owners Area</a>
                                </li>
                            </ul>
                        </li>
                       <li className="nav-item has-child">
                            <a className="nav-link" href="#">Models</a>
                            <span className="menu-arrow"><img className="in-svg" src={`${urls.frontendUrl}/images/down-arrow.svg`} alt="Arrow" /></span>
                            <ul className="nav-sub-menu list-unstyled">
                               
                               {/* Dyamic */}

                                {carList.map((v,i)=>(
                                    <li className="sub-menu-item">
                                        <Link to={`/${SuzukiARRoutes.carmodelRoute}/${v?.alias}`}>{v.title_arr}</Link>
                                    </li>
                                ))}

                                {/* <li className="sub-menu-item">
                                    <Link to={`/${SuzukiARRoutes.carModel}`}>Ciaz</Link>
                                </li>
                                <li className="sub-menu-item">
                                    <Link to={`/${SuzukiARRoutes.carModel}`}>Dzire</Link>
                                </li>
                                <li className="sub-menu-item">
                                    <Link to={`/${SuzukiARRoutes.carModel}`}>Ertiga</Link>
                                </li>
                                <li className="sub-menu-item">
                                    <Link to={`/${SuzukiARRoutes.carModel}`}>Jimmy</Link>
                                </li>
                                <li className="sub-menu-item">
                                    <Link to={`/${SuzukiARRoutes.carModel}`}>Swift</Link>
                                </li>
                                <li className="sub-menu-item">
                                    <Link to={`/${SuzukiARRoutes.carModel}`}>Vitara</Link>
                                </li> */}

                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to={`/${SuzukiARRoutes.ournetworkRoute}`} className="nav-link">our network</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/${SuzukiARRoutes.moosaconnect}`} className="nav-link">Moosa Connect</Link>
                        </li>
                    </ul>
                    <div className="mobile__items p-2 mt-4 bg-white">
                        <ul className="header__top--logos list-unstyled d-flex align-content-center">
                            <li className="d-flex align-content-center justify-content-center">
                                <Link to={`/${HomeARRoutes.home}`}><img src={`${urls.frontendUrl}/images/logo.png`} width="75" height="20" alt="GSM" /></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        <div className="side-menu" style={{marginTop: "-100px"}}>
             <Link to={`/${SuzukiARRoutes.ournetworkRoute}`}  className="side-menu-item">
                <img className="in-svg" src={`${urls.frontendUrl}/images/location.svg`} alt="Side Menu Icon" />
                <span>Our Network</span>
            </Link>
            <Link to={`/${SuzukiARRoutes.downloadBrochures}`}  className="side-menu-item">
                <img className="in-svg" src={`${urls.frontendUrl}/images/download.svg`} alt="Side Menu Icon" />
                <span>Download Brochure</span>
            </Link>
            <Link to={`/${SuzukiARRoutes.enquiryRoute}`} className="side-menu-item">
                <img className="in-svg" src={`${urls.frontendUrl}/images/car.svg`} alt="Side Menu Icon" />
                <span>Book A Test Drive</span>
            </Link>
            <Link to={`/${SuzukiARRoutes.requestQuoteRoute}`} className="side-menu-item">
                <img className="in-svg" src={`${urls.frontendUrl}/images/quote.svg`} alt="Side Menu Icon" />
                <span>Request A Quote</span>
            </Link>
        </div>
        <div className="whatsApp__fixed">
            <a href="https://wa.me/+96894760010" target="_blank"><img className="in-svg" src={" https://www.svgrepo.com/show/176768/whatsapp-social-media.svg"} alt="Whatsapp" /></a>
        </div>
    </header>
  )
}

export default React.memo(Header2)