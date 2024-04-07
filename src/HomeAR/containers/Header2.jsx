import React, { useCallback, useEffect } from 'react'
import { Link , useNavigate} from "react-router-dom";
import { urls } from '../../config/constants';
import {  commonRoutes,HomeARRoutes,SuzukiARRoutes } from '../../config/RouteConfig';
import AOS from 'aos';
import "aos/dist/aos.css";
import { image2svg } from '../../utilsfunctions/Svg';
import { useForm } from 'react-hook-form';

const Header2 = () => {

    useEffect(()=>{
        image2svg();
        AOS.init();
        AOS.refresh();
    },[]);

    const navigate = useNavigate();

    const {register,handleSubmit,formState:{errors}} = useForm({
        mode:"onTouched",
    });

    const onSubmit = async (data)=> {
        navigate(`/${SuzukiARRoutes.carmodelRoute}/${data?.search}`,{replace:true});
    };


  return (
    <>
      <React.Fragment>
        <div className="side-menu" style={{marginTop: "-100px"}}>
                            <Link to={`/${HomeARRoutes.ournetworkRoute}`}  className="side-menu-item">
                                <img className="in-svg" src={`${urls.frontendUrl}/images/location.svg`} alt="Side Menu Icon" />
                                <span>Our Network</span>
                            </Link>
                            <Link to={`/${HomeARRoutes.downloadBrochures}`} className="side-menu-item">
                                <img className="in-svg" src={`${urls.frontendUrl}/images/download.svg`} alt="Side Menu Icon" />
                                <span>Download Brochure</span>
                            </Link>
                            <Link to={`/${HomeARRoutes.test_drive}`} className="side-menu-item">
                                <img className="in-svg" src={`${urls.frontendUrl}/images/car.svg`} alt="Side Menu Icon" />
                                <span>Book A Test Drive</span>
                            </Link>
                            <Link to={`/${HomeARRoutes.requestQuoteRoute}`} className="side-menu-item">
                                <img className="in-svg" src={`${urls.frontendUrl}/images/quote.svg`} alt="Side Menu Icon" />
                                <span>Request A Quote</span>
                            </Link>
                        </div>
                        <div className="whatsApp__fixed">
                            <a href="https://wa.me/+96894760010" target="_blank"><img className="in-svg" src={" https://www.svgrepo.com/show/176768/whatsapp-social-media.svg"} alt="Whatsapp" /></a>
                        </div>
      </React.Fragment>  
    <header className="header header-2" data-aos="fade-down" data-aos-duration="800">
        <div className="header__top">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <div className="logo">
                            <Link to={`/${HomeARRoutes.home}`}>
                                <picture>
                                    <source media="(min-width: 768px)" srcSet={`${urls.frontendUrl}/images/logo.png`}/>
                                    <source media="(max-width: 767px)" srcSet={`${urls.frontendUrl}/images/logo_icon.png`}/>
                                    <img src={`${urls.frontendUrl}/images/logo.png`} width="628" height="68" alt="Moosa Abdul Rahman Hassan & Company"/>
                                </picture>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="header__top--links d-flex align-content-center justify-content-end">
                            <ul className="header__top--logos list-unstyled mb-0 d-flex align-content-center">
                                <li>
                                    <a href="https://gmc.moosagroup.com/" target="_blank"><img src={`${urls.frontendUrl}/images/GMC-logo-white.png`} width="75" height="20" alt="GSM"/></a>
                                </li>
                                <li>
                                    <Link to={`/${SuzukiARRoutes.home}`}><img src={`${urls.frontendUrl}/images/suzuki-logo-white.png`} width="26" height="32" alt="Suzuki"/></Link>
                                </li>
                                <li>
                                 <Link to={`/${HomeARRoutes.rentCarRoute}`}><img src={`${urls.frontendUrl}/images/SIX2-logo-white.png`} width="48" height="48" alt="SIX2"/></Link>
                                </li>
                            </ul>
                            <ul className="header__top--social list-unstyled mb-0 d-flex align-content-center">
                                
                                <li>
                                    <a href="https://www.linkedin.com/company/moosa-abdul-rahman-hassan-co-llc" target="_blank"><img src={`${urls.frontendUrl}/images/linkedin.svg`} width="37" height="37" alt="Linkedin"/></a>
                                </li>
                            </ul>
                            <ul className="header__top--action list-unstyled mb-0 d-flex align-content-center">
                                <li className="header__call">
                                    <a href="tel:+96894760010"><img src={`${urls.frontendUrl}/images/call.png`} alt="Call"/> <span>CALL: +968 9476 0010</span></a>
                                </li>
                                <li>
                                    <Link to={`/`}>ENG</Link>
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
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link to={`/${commonRoutes.aboutusRoute}`} className="nav-link">company</Link>
                                            {/* <span className="menu-arrow"><img className="in-svg" src={`${urls.frontendUrl}/down-arrow.svg`} alt="Arrow"/></span> */}
                                            {/*<ul className="nav-sub-menu list-unstyled">
                                                <li className="sub-menu-item">
                                                    <Link to={`/${SuzukiARRoutes.home}`}>Suzuki</Link>
                                                </li>
                                            </ul>*/}
                                        </li>
                                        
                                        <li className="nav-item has-child">
                                            <a className="nav-link" href="#">service</a>
                                            <span className="menu-arrow"><img className="in-svg" src={`${urls.frontendUrl}/images/down-arrow.svg`} alt="Arrow"/></span>
                                            <ul className="nav-sub-menu list-unstyled">
                                                <li className="sub-menu-item">
                                                    <Link to={`/${HomeARRoutes.service_enquiry}`}>Book your service</Link>
                                                </li>
                                                <li className="sub-menu-item">
                                                    <Link to={`/${HomeARRoutes.menuprice}`}>Menu Pricing</Link>
                                                </li>
                                                <li className="sub-menu-item">
                                                    <Link to={`/${HomeARRoutes.body_shop}`}>Body Shop</Link>
                                                </li>
                                                <li className="sub-menu-item">
                                                     <Link to={`/${HomeARRoutes.bmeppRoute}`}>BM EPP</Link>
                                                </li>
                                                <li className="sub-menu-item">
                                                    <Link to={`/${HomeARRoutes.multifranchiseRoute}`}>Multi franchise</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item has-child">
                                            <a className="nav-link" href="#">parts</a>
                                            <span className="menu-arrow"><img className="in-svg" src={`${urls.frontendUrl}/images/down-arrow.svg`} alt="Arrow"/></span>
                                            <ul className="nav-sub-menu list-unstyled">
                                                 <li className="sub-menu-item">
                                                    <Link to={`/${HomeARRoutes.partEnquiryRoute}`}>Parts Enquiry</Link>
                                                </li>
                                                <li className="sub-menu-item">
                                                     <a href="#">ACCESSORIES</a>
                                                </li>
                                                <li className="sub-menu-item">
                                                    <Link to={`/${HomeARRoutes.vehicleCareAndMaintenanceRoute}`} >VEHICLE CARE &amp; MAINTENANCE PRODUCTS</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        {/*<li className="nav-item">
                                            <Link to={`/${HomeARRoutes.ownersRoute}`} className="nav-link">owners</Link>
                                        </li>*/}
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Offers</a>
                                             <span className="menu-arrow"><img className="in-svg" src={`${urls.frontendUrl}/images/down-arrow.svg`} alt="Arrow"/></span>
                                            <ul className="nav-sub-menu list-unstyled">
                                                <li className="sub-menu-item">
                                                    <Link to={`/${HomeARRoutes.current_offers}`}>Gmc Current Offers</Link>
                                                </li>
                                                <li className="sub-menu-item">
                                                    <Link to={`/${HomeARRoutes.current_offers}`}>Suzuki Current Offers</Link>
                                                </li>
                                                <li className="sub-menu-item">
                                                    <Link to={`/${HomeARRoutes.service_enquiry}`}>Service Offers</Link>
                                                </li>
                                                <li className="sub-menu-item">
                                                     <Link to={`/${HomeARRoutes.bmeppRoute}`}>BM EPP</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={`/${HomeARRoutes.contactusRoute}`} className="nav-link">Contact us</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={`/${HomeARRoutes.ournetworkRoute}`} className="nav-link">our network</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={`/${HomeARRoutes.moosa_connect}`} className="nav-link">Moosa Connect</Link>
                                        </li>
                                        <li className="nav-item header-search">
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <div className="form-group mb-0 position-relative">
                                                    <input type="text" name="search" id="search" {...register("search")}  required className="form-control" placeholder="Search"/>
                                                    <button type="submit" className="btn-search"><img className="in-svg"  src={`${urls.frontendUrl}/images/search-icon.svg`} alt="Search"/></button>
                                                </div>
                                            </form>
                                        </li>
                                    </ul>
                                    <div className="mobile__items p-2 mt-4 bg-white">
                                        <ul className="header__top--logos list-unstyled d-flex align-content-center">
                                            <li className="d-flex align-content-center justify-content-center">
                                                <a href="#"><img src={`${urls.frontendUrl}/images/GMC-logo.png`} width="75" height="20" alt="GSM"/></a>
                                            </li>
                                            <li className="d-flex align-content-center justify-content-center">
                                                <a href="#"><img src={`${urls.frontendUrl}/images/suzuki-logo.png`} width="26" height="32" alt="Suzuki"/></a>
                                            </li>
                                            <li className="d-flex align-content-center justify-content-center">
                                                <a href="#"><img src={`${urls.frontendUrl}/images/SIX2-logo.png`} width="48" height="48" alt="SIX2"/></a>
                                            </li>
                                        </ul>
                                        <ul className="header__top--social list-unstyled mb-0 d-flex align-content-center">
                                            
                                            <li className="d-flex align-content-center justify-content-center">
                                                <a href="#"><img src={`${urls.frontendUrl}/images/linkedin.png`} width="37" height="37" alt="Linkedin"/></a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
    </header>
    </>
  )
}

export default React.memo(Header2)