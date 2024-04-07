import React, { useCallback, useEffect,useState } from 'react'
import { Link , useNavigate} from "react-router-dom";
import { urls } from '../../config/constants';
import {  commonRoutes,HomeARRoutes,HomeRoutes, SuzukiRoutes } from '../../config/RouteConfig';
import AOS from 'aos';
import "aos/dist/aos.css";
import { image2svg } from '../../utilsfunctions/Svg';
import { useForm } from 'react-hook-form';
import classNames from "classnames"
import $ from 'jquery';
import logo from "../../images/logo.png"

const Header2 = () => {

    useEffect(()=>{
        image2svg();
        AOS.init();
        AOS.refresh();
      
    },[]);
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const handleShowNavbar = () => {
        setIsMenuOpen(!isMenuOpen)
      }
    
      const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    
    const handleShowSubNavbar = () => {
        setIsSubMenuOpen(!isSubMenuOpen)
      }
      
      const [isSubMenuOpen1, setIsSubMenuOpen1] = useState(false);
    
    const handleShowSubNavbar1 = () => {
        setIsSubMenuOpen1(!isSubMenuOpen1)
      }
      
      const [isSubMenuOpen2, setIsSubMenuOpen2] = useState(false);
    
    const handleShowSubNavbar2 = () => {
        setIsSubMenuOpen2(!isSubMenuOpen2)
      }
      
      const [isSubMenuOpen3, setIsSubMenuOpen3] = useState(false);
    
    const handleShowSubNavbar3 = () => {
        setIsSubMenuOpen3(!isSubMenuOpen3)
      }
      
      const [isSubMenuOpen4, setIsSubMenuOpen4] = useState(false);
    
    const handleShowSubNavbar4 = () => {
        setIsSubMenuOpen4(!isSubMenuOpen4)
      }
      
    const navigate = useNavigate();

    const {register,handleSubmit,formState:{errors}} = useForm({
        mode:"onTouched",
    });

    const onSubmit = useCallback(async (e)=>{
        navigate(`/${SuzukiRoutes.home}`,{replace:true});
    },[]);

  return (
    <>
      <React.Fragment>
        <div className="side-menu" style={{marginTop: "-100px"}}>
                            <Link to={`/${HomeRoutes.ournetworkRoute}`}  className="side-menu-item">
                                <img className="in-svg" src={`${urls.frontendUrl}/images/location.svg`} alt="Side Menu Icon" />
                                <span>Our Network</span>
                            </Link>
                            <Link to={`/${HomeRoutes.downloadBrochures}`} className="side-menu-item">
                                <img className="in-svg" src={`${urls.frontendUrl}/images/download.svg`} alt="Side Menu Icon" />
                                <span>Download Brochure</span>
                            </Link>
                            <Link to={`/${HomeRoutes.test_drive}`} className="side-menu-item">
                                <img className="in-svg" src={`${urls.frontendUrl}/images/car.svg`} alt="Side Menu Icon" />
                                <span>Book A Test Drive</span>
                            </Link>
                            <Link to={`/${HomeRoutes.book_your_service}`} className="side-menu-item">
                                <img className="in-svg" src={`${urls.frontendUrl}/images/service.svg`} alt="Side Menu Icon" />
                                <span>Service</span>
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
                            <Link to={`/`}>
                                <picture>
                                    <source media="(min-width: 768px)" srcSet={`${urls.frontendUrl}/images/logo.png`}/>
                                    <source media="(max-width: 767px)" srcSet={`${urls.frontendUrl}/images/logo.png`}/>
                                    <img src={logo} width="628" height="68" alt="Moosa Abdul Rahman Hassan & Company"/>
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
                                    <a href="https://moosagroup.com/suzuki" target="_blank"><img src={`${urls.frontendUrl}/images/suzuki-logo-white.png`} width="26" height="32" alt="Suzuki"/></a>
                                </li>
                                <li>
                                 <a href="https://www.sixt.com/car-rental/oman/" target="_blank"><img src={`${urls.frontendUrl}/images/SIX2-logo-white.png`} width="48" height="48" alt="SIX2"/></a>
                                </li>
                            </ul>
                            {/*<ul className="header__top--social list-unstyled mb-0 d-flex align-content-center">
                                
                                <li>
                                    <a href="https://www.linkedin.com/company/moosa-abdul-rahman-hassan-co-llc" target="_blank"><img src={`${urls.frontendUrl}/images/linkedin.svg`} width="37" height="37" alt="Linkedin"/></a>
                                </li>
                            </ul>*/}
                            <ul className="header__top--action list-unstyled mb-0 d-flex align-content-center">
                                <li className="header__call">
                                    <a href="tel:80076200"><img src={`${urls.frontendUrl}/images/call.png`} alt="Call"/> <span>CALL: 80076200</span></a>
                                </li>
                                <li>
                                    <Link to={`/${HomeARRoutes.home}`}>عربى</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="header__main">
            <div className="container-fluid">
                <div className={`mobile__menu ${isMenuOpen && 'show'}`} onClick={handleShowNavbar}>
                    <div className="mobile__line"></div>
                    <div className="mobile__line"></div>
                    <div className="mobile__line"></div>
                </div>
                <nav  className= {`navbar navbar-expand-lg p-0  ${isMenuOpen && 'show'}`}>
                    <ul className="navbar-nav">
                        
                       
                       <li className={classNames("nav-item has-child",{active:[`/${commonRoutes.aboutusRoute}`].includes(window.location.pathname)})}>
                            <a className="nav-link" href="#">MARH Group</a>
                            <span className="menu-arrow" onClick={handleShowSubNavbar}><img className="in-svg" src={`${urls.frontendUrl}/images/down-arrow.svg`} alt="Arrow"/></span>
                            <ul className= {`nav-sub-menu list-unstyled  ${isSubMenuOpen && 'd-block'}`}>
                                 <li className="sub-menu-item">
                                    <Link to={`/${commonRoutes.aboutusRoute}`}>About Us</Link>
                                </li>
                                <li className="sub-menu-item">
                                     <Link to={`/${commonRoutes.historyRoute}`}>Our History</Link>
                                </li>
                                {/*<li className="sub-menu-item">
                                    <Link to={`/${HomeRoutes.milestone}`}>Milestones</Link>
                                </li>
                                
                                <li className="sub-menu-item">
                                    <Link to={`/${HomeRoutes.accolades}`}>Accolades</Link>
                                </li>*/}
                                
                            </ul>
                        </li>
                        
                        <li className={classNames("nav-item has-child",{active:[`/${HomeRoutes.book_your_service}`,`/${HomeRoutes.menuprice}`,`/${HomeRoutes.body_shop}`,`/${HomeRoutes.bmeppRoute}`,`/${HomeRoutes.multifranchiseRoute}`].includes(window.location.pathname)})}>
                            <a className="nav-link" href="#">service</a>
                            <span className="menu-arrow" onClick={handleShowSubNavbar1}><img className="in-svg" src={`${urls.frontendUrl}/images/down-arrow.svg`} alt="Arrow"/></span>
                            <ul className= {`nav-sub-menu list-unstyled  ${isSubMenuOpen1 && 'd-block'}`}>
                                <li className="sub-menu-item">
                                    <Link to={`/${HomeRoutes.book_your_service}`}>Book your service</Link>
                                </li>
                                <li className="sub-menu-item">
                                    <Link to={`/${HomeRoutes.menuprice}`}>Menu Pricing</Link>
                                </li>
                                <li className="sub-menu-item">
                                    <Link to={`/${HomeRoutes.body_shop}`}>Body Shop</Link>
                                </li>
                                <li className="sub-menu-item">
                                     <Link to={`/${HomeRoutes.bmeppRoute}`}>BM EPP</Link>
                                </li>
                                <li className="sub-menu-item">
                                    <Link to={`/${HomeRoutes.multifranchiseRoute}`}>Multi franchise</Link>
                                </li>
                            </ul>
                        </li>
                        <li className={classNames("nav-item has-child",{active:[`/${HomeRoutes.partEnquiryRoute}`,`/${HomeRoutes.vehicleCareAndMaintenanceRoute}`].includes(window.location.pathname)})}>
                            <a className="nav-link" href="#">parts</a>
                            <span className="menu-arrow" onClick={handleShowSubNavbar2}><img className="in-svg" src={`${urls.frontendUrl}/images/down-arrow.svg`} alt="Arrow"/></span>
                            <ul className= {`nav-sub-menu list-unstyled  ${isSubMenuOpen2 && 'd-block'}`}>
                                 <li className="sub-menu-item">
                                    <Link to={`/${HomeRoutes.partEnquiryRoute}`}>Parts & Accessories Enquiry</Link>
                                </li>
                                
                                <li className="sub-menu-item">
                                    <Link to={`/${HomeRoutes.vehicleCareAndMaintenanceRoute}`} >VEHICLE CARE &amp; MAINTENANCE PRODUCTS</Link>
                                </li>
                            </ul>
                        </li>
                        {/*<li className="nav-item">
                            <Link to={`/${HomeRoutes.ownersRoute}`} className="nav-link">owners</Link>
                        </li>*/}
                        <li className={classNames("nav-item has-child",{active:[`/${HomeRoutes.gmccurrentoffers}`,`/${HomeRoutes.suzukicurrentoffers}`,`/${HomeRoutes.book_your_service}`,`/${HomeRoutes.bmeppRoute}`].includes(window.location.pathname)})}>
                            <a className="nav-link" href="#">Current Offers</a>
                             <span className="menu-arrow" onClick={handleShowSubNavbar3}><img className="in-svg" src={`${urls.frontendUrl}/images/down-arrow.svg`} alt="Arrow"/></span>
                            <ul className= {`nav-sub-menu list-unstyled  ${isSubMenuOpen3 && 'd-block'}`}>
                                <li className="sub-menu-item">
                                    <Link to={`/${HomeRoutes.gmccurrentoffers}`}>Gmc Current Offers</Link>
                                </li>
                                <li className="sub-menu-item">
                                    <Link to={`/${HomeRoutes.suzukicurrentoffers}`}>Suzuki Current Offers</Link>
                                </li>
                                <li className="sub-menu-item">
                                    <Link to={`/${HomeRoutes.book_your_service}`}>Service Offers</Link>
                                </li>
                                <li className="sub-menu-item">
                                     <Link to={`/${HomeRoutes.bmeppRoute}`}>BM EPP</Link>
                                </li>
                            </ul>
                        </li>
                        
                        
                        <li className={classNames("nav-item has-child",{active:[`/${HomeRoutes.contactusRoute}`,`/${HomeRoutes.ournetworkRoute}`].includes(window.location.pathname)})}>
                            <a className="nav-link" href="#">Contact Us</a>
                             <span className="menu-arrow" onClick={handleShowSubNavbar4}><img className="in-svg" src={`${urls.frontendUrl}/images/down-arrow.svg`} alt="Arrow"/></span>
                            <ul className= {`nav-sub-menu list-unstyled  ${isSubMenuOpen4 && 'd-block'}`}>
                                
                                <li className="sub-menu-item">
                                    <Link to={`/${HomeRoutes.ournetworkRoute}`}>Our Network</Link>
                                </li>
                               <li className="sub-menu-item">
                                    <Link to={`/${HomeRoutes.contactusRoute}`}>Enquiry</Link>
                                </li>
                            </ul>
                        </li>
                        
                        <li className={classNames("nav-item",{active:[`/${HomeRoutes.moosa_connect}`].includes(window.location.pathname)})}>
                            <Link to={`/${HomeRoutes.moosa_connect}`} className="nav-link">Moosa Connect</Link>
                        </li>
                        <li className="nav-item header-search">
                            <form action='#' method='post'>
                                <div className="form-group mb-0 position-relative">
                                    <input type="text" name="search" className="form-control" placeholder="Search"/>
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
                        {/*<ul className="header__top--social list-unstyled mb-0 d-flex align-content-center">
                            
                            <li className="d-flex align-content-center justify-content-center">
                                <a href="#"><img src={`${urls.frontendUrl}/images/linkedin.png`} width="37" height="37" alt="Linkedin"/></a>
                            </li>
                        </ul>*/}
                    </div>
                </nav>
            </div>
        </div>
    </header>
    </>
  )
}

export default React.memo(Header2)