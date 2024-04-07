import React, { useCallback, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { urls } from '../../config/constants';
import { commonRoutes, HomeRoutes, SuzukiARRoutes, SuzukiRoutes } from '../../config/RouteConfig';
import { image2svg } from '../../utilsfunctions/Svg';
import AOS from 'aos';
import "aos/dist/aos.css";
import { callApi } from '../../services/ApiService';
import { SuzukiApi } from '../../config/api';
import { defaultHeader, toastError, toastSuccess } from '../../services/CommonFunction';
import classNames from "classnames"
import GetSuzukiCar from '../../images/Models/GetSuzukiCar';
const Header = () => {

    const [carList,setCarList] = GetSuzukiCar();
    
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
      
    useEffect(()=>{
        image2svg();
        AOS.init();
        AOS.refresh();
    },[]);
    
  return (
      
    <header className="header">
        <div className="header__top">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <div className="logo">
                            <Link to={`/${SuzukiRoutes.home}`}>
                                <picture>
                                    <img src={`${urls.frontendUrl}/images/suzuki-logo-white.png`} width="131" height="25" alt="Moosa Abdul Rahman Hassan & Company" />
                                </picture>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="header__top--links d-flex align-items-center justify-content-end">
                            <ul className="header__top--logos mb-0 list-unstyled d-flex ml-5">
                                <li className="mr-5">
                                    <a href="https://moosagroup.com/" target="_blank"><img src={`${urls.frontendUrl}/images/logo.png`} width="75" height="20" alt="GSM" /></a>
                                </li>
                            </ul>
                            <ul className="header__top--action list-unstyled mb-0 d-flex">
                                <li >
                                    <a href="tel:80076200"><img src={`${urls.frontendUrl}/images/call.png`} alt="Call" /> <span>CALL: 80076200</span></a>
                                </li>
                                <li>
                                    <Link to={`/${SuzukiARRoutes.home}`}>عربى</Link>
                                    {/* <a href="#"></a> */}
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
                    <ul className="navbar-nav justify-content-center">
                        
                         <li className="nav-item">
                            <a className="nav-link" href="#">suzuki global</a>
                            <span className="menu-arrow" onClick={handleShowSubNavbar}><img className="in-svg" src={`${urls.frontendUrl}/images/down-arrow.svg`} alt="Arrow" /></span>
                            <ul className= {`nav-sub-menu list-unstyled  ${isSubMenuOpen && 'd-block'}`}>
                                <li className="sub-menu-item">
                                    <a href="https://www.globalsuzuki.com/" target="_blank">Suzuki Global</a>
                                </li>
                                <li className="sub-menu-item">
                                    <a href="https://www.globalsuzuki.com/automobile/" target="_blank">Suzuki Automotive</a>
                                </li>
                                <li className="sub-menu-item">
                                    <a href="https://www.globalsuzuki.com/corporate/" target="_blank">Suzuki News</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Offers</a>
                            <span className="menu-arrow" onClick={handleShowSubNavbar1}><img className="in-svg" src={`${urls.frontendUrl}/images/down-arrow.svg`} alt="Arrow" /></span>
                            <ul className= {`nav-sub-menu list-unstyled  ${isSubMenuOpen1 && 'd-block'}`}>
                                <li className="sub-menu-item">
                                    <Link to={`/${SuzukiRoutes.suzukicurrentoffers}`}>Current offers</Link>
                                </li>
                                <li className="sub-menu-item">
                                   <Link to={`/${SuzukiRoutes.bmeppRoute}`}>bm epp</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item has-child">
                            <a className="nav-link" href="#">Owners</a>
                            <span className="menu-arrow" onClick={handleShowSubNavbar2}><img className="in-svg" src={`${urls.frontendUrl}/images/down-arrow.svg`} alt="Arrow" /></span>
                            <ul className= {`nav-sub-menu list-unstyled  ${isSubMenuOpen2 && 'd-block'}`}>
                                <li className="sub-menu-item">
                                    <Link to={`/${SuzukiRoutes.book_your_service}`}>Book your service</Link>
                                </li>
                                <li className="sub-menu-item">
                                    <Link to={`/${SuzukiRoutes.menuprice}`}>Menu Pricing</Link>
                                </li>
                                <li className="sub-menu-item">
                                    <Link to={`/${SuzukiRoutes.maintenance}`}>Maintenance</Link>
                                </li>
                                <li className="sub-menu-item">
                                    <Link to={`/${SuzukiRoutes.body_shop}`}>Body Shop</Link>
                                </li>
                                <li className="sub-menu-item">
                                    <Link to={`/${SuzukiRoutes.partEnquiryRoute}`}>Parts & Accessories Enquiry</Link>
                                </li>
                                {/* <li className="sub-menu-item">
                                    <Link to={`/${SuzukiRoutes.book_your_service}`}>Service Enquiry</Link>
                                </li>*/}
                            </ul>
                        </li>
                        
                       <li className="nav-item has-child">
                            <a className="nav-link" href="#">Models</a>
                            <span className="menu-arrow" onClick={handleShowSubNavbar3}><img className="in-svg" src={`${urls.frontendUrl}/images/down-arrow.svg`} alt="Arrow" /></span>
                            <ul className= {`nav-sub-menu list-unstyled  ${isSubMenuOpen3 && 'd-block'}`}>
                               {/* Dyamic */}

                                {carList.map((v,i)=>(
                                // (v?.id=='2')?
                                //     <li className="sub-menu-item" key={i}>
                                    
                                //         <Link to={`/${SuzukiRoutes.requestQuoteRoute}`} key={i}>{v.title}</Link>
                                //     </li>
                                //     :
                                    <li className="sub-menu-item" key={i}>
                                    
                                        <Link to={`/${SuzukiRoutes.carmodelRoute}/${v?.alias}`} key={i}>{v.title}</Link>
                                    </li>
                                ))}

                                {/* <li className="sub-menu-item">
                                    <Link to={`/${SuzukiRoutes.carModel}`}>Ciaz</Link>
                                </li>
                                <li className="sub-menu-item">
                                    <Link to={`/${SuzukiRoutes.carModel}`}>Dzire</Link>
                                </li>
                                <li className="sub-menu-item">
                                    <Link to={`/${SuzukiRoutes.carModel}`}>Ertiga</Link>
                                </li>
                                <li className="sub-menu-item">
                                    <Link to={`/${SuzukiRoutes.carModel}`}>Jimmy</Link>
                                </li>
                                <li className="sub-menu-item">
                                    <Link to={`/${SuzukiRoutes.carModel}`}>Swift</Link>
                                </li>
                                <li className="sub-menu-item">
                                    <Link to={`/${SuzukiRoutes.carModel}`}>Vitara</Link>
                                </li> */}

                            </ul>
                        </li>
                        <li className={classNames("nav-item has-child",{active:[`/${SuzukiRoutes.contactusRoute}`,`/${SuzukiRoutes.ournetworkRoute}`].includes(window.location.pathname)})}>
                            <a className="nav-link" href="#">Contact Us</a>
                             <span className="menu-arrow" onClick={handleShowSubNavbar4}><img className="in-svg" src={`${urls.frontendUrl}/images/down-arrow.svg`} alt="Arrow"/></span>
                            <ul className= {`nav-sub-menu list-unstyled  ${isSubMenuOpen4 && 'd-block'}`}>
                                
                                <li className="sub-menu-item">
                                    <Link to={`/${SuzukiRoutes.ournetworkRoute}`} >Our Network</Link>
                                </li>
                               <li className="sub-menu-item">
                                    <Link to={`/${SuzukiRoutes.contactusRoute}`}>Enquiry</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to={`/${SuzukiRoutes.moosaconnect}`} className="nav-link">Moosa Connect</Link>
                        </li>
                    </ul>
                    <div className="mobile__items p-2 mt-4 bg-white">
                        <ul className="header__top--logos list-unstyled d-flex align-content-center">
                            <li className="d-flex align-content-center justify-content-center">
                                <Link to={`${'/'}`}><img src={`${urls.frontendUrl}/images/logo.png`} width="75" height="20" alt="GSM" /></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    
    
        <div className="side-menu" style={{marginTop: "-100px"}}>
              <Link to={`/${SuzukiRoutes.book_your_service}`} className="side-menu-item">
                <img className="in-svg" src={`${urls.frontendUrl}/images/service.svg`} alt="Side Menu Icon" />
                <span>Service</span>
            </Link>
            <Link to={`/${SuzukiRoutes.downloadBrochures}`}  className="side-menu-item">
                <img className="in-svg" src={`${urls.frontendUrl}/images/download.svg`} alt="Side Menu Icon" />
                <span>Download Brochure</span>
            </Link>
            <Link to={`/${SuzukiRoutes.enquiryRoute}`} className="side-menu-item">
                <img className="in-svg" src={`${urls.frontendUrl}/images/car.svg`} alt="Side Menu Icon" />
                <span>Book A Test Drive</span>
            </Link>
            <Link to={`/${SuzukiRoutes.requestQuoteRoute}`} className="side-menu-item">
                <img className="in-svg" src={`${urls.frontendUrl}/images/quote.svg`} alt="Side Menu Icon" />
                <span>Request a quote</span>
            </Link>
           
        </div>
        <div className="whatsApp__fixed">
            <a href="https://wa.me/+96894760010" target="_blank"><img className="in-svg" src={" https://www.svgrepo.com/show/176768/whatsapp-social-media.svg"} alt="Whatsapp" /></a>
        </div>
    </header>
  )
}

export default React.memo(Header)


// const fetchCarsOfSuzuki = useCallback(async () =>{
//     await callApi(SuzukiApi.getCarsOfSuzuki.method,SuzukiApi.getCarsOfSuzuki.url,null,null,defaultHeader()).
//     then((res)=>{
//         const payload = res?.data?.data;
//         if(Array.isArray(payload) && payload.length>0){
//             setCarList(payload);
//         }
//     }).catch((err)=>{
//         console.log(err)
//         toastError(err?.response?.data?.message);
//     })
// },[]);