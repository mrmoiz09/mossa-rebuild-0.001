import React, { useCallback, useEffect , useState} from 'react'
import { Link,useNavigate } from "react-router-dom";
import { commonRoutes,HomeARRoutes,HomeRoutes, SuzukiRoutes } from '../../config/RouteConfig';
import { urls } from '../../config/constants';
import { image2svg } from '../../utilsfunctions/Svg';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useForm } from 'react-hook-form'; 
import classNames from "classnames"
import $ from 'jquery';
import logo from "../../images/logo.png"
import GMClogowhite from "../../images/GMClogowhite.png";
import suzukilogowhite from "../../images/suzukilogowhite.png"
import SIX2logowhite from "../../images/SIX2logowhite.png";
import call  from "../../images/call.png";
import downarrow from "../../images/downarrow.svg"
import location from "../../images/location.svg";
import download from "../../images/download.svg";
import car from "../../images/car.svg";
import service from "../../images/service.svg";
// import whatsappicon from "../../images/whatsappicon.svg";
import GMClogo from "../../images/GMClogo.png"
import suzukilogo from "../../images/suzukilogo.png"
import SIX2logo from "../../images/SIX2logo.png"
import searchicon from "../../images/searchicon.svg"



const Header = () => {

    const navigate = useNavigate();

    const {register,handleSubmit,formState:{errors}} = useForm({
        mode:"onTouched",
    });
        
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
      
    const onSubmit = async (data)=> {
        // navigate(`/${SuzukiRoutes.carmodelRoute}/${data?.search}`,{replace:true});
    };
    
    useEffect(()=>{
        image2svg();
        AOS.init();
        AOS.refresh();
    },[]);

    return (
            <header className="header bg-danger" >
                <div className="header__top">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="logo">
                                    <Link to={`${'/'}`}>
                                            <picture>
                                            <source media="(min-width: 768px)" srcSet={logo}/>
                                                <source media="(max-width: 767px)"  srcSet={logo}/>
                                                    <img  srcSet={logo} width="628" height="68" alt="Moosa Abdul Rahman Hassan & Company"/>
                                                    </picture>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="header__top--links d-flex align-content-center justify-content-end">
                                                <ul className="header__top--logos list-unstyled mb-0 d-flex align-content-center">
                                                    <li>
                                                        <a href="https://gmc.moosagroup.com/" target="_blank"><img src={GMClogowhite} width="75" height="20" alt="GSM"/></a>
                                                    </li>
                                                    <li>
                                                        <a href="https://moosagroup.com/suzuki" target="_blank"><img src={suzukilogowhite} width="26" height="32" alt="Suzuki"/></a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.sixt.com/car-rental/oman/" target="_blank"><img src={SIX2logowhite} width="48" height="48" alt="SIX2"/></a>
                                                    </li>
                                                </ul>
                                                {/*<ul className="header__top--social list-unstyled mb-0 d-flex align-content-center">
                                                    
                                                    <li>
                                                        <a href="https://www.linkedin.com/company/moosa-abdul-rahman-hassan-co-llc" target="_blank"><img src={`${urls.frontendUrl}/images/linkedin.svg`} width="37" height="37" alt="Linkedin"/></a>
                                                    </li>
                                                </ul>*/}
                                                <ul className="header__top--action list-unstyled mb-0 d-flex align-content-center">
                                                   <li className="header__call">
                                                        <a href="tel:80076200"><img src={call} alt="Call" /> <span>CALL: 80076200</span></a>
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
                                <div className= {`mobile__menu ${isMenuOpen && 'show'}`} onClick={handleShowNavbar}>
                                    <div className="mobile__line"></div>
                                    <div className="mobile__line"></div>
                                    <div className="mobile__line"></div>
                                </div>
                                <nav className= {`navbar navbar-expand-lg p-0  ${isMenuOpen && 'show'}`}>
                                    <ul className="navbar-nav">
                                        <li className={classNames("nav-item has-child",{active:[`/${commonRoutes.aboutusRoute}`].includes(window.location.pathname)})}>
                                            <a className="nav-link"  href="#">MARH Group</a>
                                            <span className="menu-arrow" onClick={handleShowSubNavbar}><img className="in-svg" src={downarrow} alt="Arrow"/></span>
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
                                            <span className="menu-arrow" onClick={handleShowSubNavbar1}><img className="in-svg" src={downarrow} alt="Arrow"/></span>
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
                                            <span className="menu-arrow" onClick={handleShowSubNavbar2}><img className="in-svg" src={downarrow}  alt="Arrow"/></span>
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
                                             <span className="menu-arrow" onClick={handleShowSubNavbar3}><img className="in-svg"  src={downarrow} alt="Arrow"/></span>
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
                                             <span className="menu-arrow" onClick={handleShowSubNavbar4}><img className="in-svg" src={downarrow} alt="Arrow"/></span>
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
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <div className="form-group mb-0 position-relative">
                                                    <input type="text" name="search" id="search" {...register("search")}  required className="form-control" placeholder="Search"/>
                                                    <button type="submit" className="btn-search"><img className="in-svg"  src={searchicon} alt="Search"/></button>
                                                </div>
                                            </form>
                                        </li>
                                    </ul>
                                    <div className="mobile__items p-2 mt-4 bg-white">
                                        <ul className="header__top--logos list-unstyled d-flex align-content-center">
                                            <li className="d-flex align-content-center justify-content-center">
                                                <a href="https://gmc.moosagroup.com/" target="_blank"><img src={GMClogo} width="75" height="20" alt="GSM"/></a>
                                            </li>
                                            <li className="d-flex align-content-center justify-content-center">
                                                <a href="https://moosagroup.com/suzuki" target="_blank"><img src={suzukilogo} width="26" height="32" alt="Suzuki"/></a>
                                            </li>
                                            <li className="d-flex align-content-center justify-content-center">
                                                <a href="https://www.sixt.com/car-rental/oman/" target="_blank"><img src={SIX2logo} width="48" height="48" alt="SIX2"/></a>
                                            </li>
                                        </ul>
                                        {/*<ul className="header__top--social list-unstyled mb-0 d-flex align-content-center">
                                            
                                            <li className="d-flex align-content-center justify-content-center">
                                                <a href="https://www.linkedin.com/company/moosa-abdul-rahman-hassan-co-llc" target="_blank"><img src={`${urls.frontendUrl}/images/linkedin.png`} width="37" height="37" alt="Linkedin"/></a>
                                            </li>
                                        </ul>*/}
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div className="side-menu" style={{marginTop: "-100px"}}>
                            <Link to={`/${HomeRoutes.ournetworkRoute}`}  className="side-menu-item">
                                <img className="in-svg" src={location} alt="Side Menu Icon" />
                                <span>Our Network</span>
                            </Link>
                            <Link to={`/${HomeRoutes.downloadBrochures}`} className="side-menu-item">
                                <img className="in-svg" src={download} alt="Side Menu Icon" />
                                <span>Download Brochure</span>
                            </Link>
                            <Link to={`/${HomeRoutes.test_drive}`} className="side-menu-item">
                                <img className="in-svg" src={car} alt="Side Menu Icon" />
                                <span>Book A Test Drive</span>
                            </Link>
                            <Link to={`/${HomeRoutes.book_your_service}`} className="side-menu-item">
                                <img className="in-svg" src={service} alt="Side Menu Icon" />
                                <span>Service</span>
                            </Link>
                        </div>
                        <div className="whatsApp__fixed">
                            <a href="https://wa.me/+96894760010" target="_blank"><img className="in-svg" src={" https://www.svgrepo.com/show/176768/whatsapp-social-media.svg"} alt="Whatsapp" /></a>
                        </div>
                    </header>
           
    )
}

export default React.memo(Header)


