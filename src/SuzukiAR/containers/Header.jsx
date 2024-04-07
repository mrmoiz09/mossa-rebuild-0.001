import React, { useEffect} from 'react';
import { Link } from "react-router-dom";
import { urls } from '../../config/constants';
import { HomeARRoutes, SuzukiARRoutes, SuzukiRoutes } from '../../config/RouteConfig';
import { image2svg } from '../../utilsfunctions/Svg';
import AOS from 'aos';
import "aos/dist/aos.css";
import GetSuzukiCar from '../../images/Models/GetSuzukiCar';

const Header = () => {
    const [carList, setCarList] = GetSuzukiCar();

    useEffect(() => {
        image2svg();
        AOS.init();
        AOS.refresh();
        setCarList(null);
    }, []);

    return (
        <header className="header">
            {/* Header Top */}
            <div className="header__top">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        {/* Logo */}
                        <div className="col-md-4">
                            <div className="logo">
                                <Link to={`/${SuzukiARRoutes.home}`}>
                                    <picture>
                                        <img src={`${urls.frontendUrl}/images/suzuki-logo-white.png`} width="131" height="25" alt="Moosa Abdul Rahman Hassan & Company" />
                                    </picture>
                                </Link>
                            </div>
                        </div>
                        {/* Header Top Links */}
                        <div className="col-md-8">
                            <div className="header__top--links d-flex align-items-end justify-content-end flex-column">
                                <ul className="header__top--action list-unstyled d-flex align-items-end">
                                    <li>
                                        <a href="tel:80076200"> <span>CALL: 80076200</span></a>
                                    </li>
                                    <li>
                                        <Link to={`/${SuzukiRoutes.home}`}>ENG</Link>
                                    </li>
                                </ul>
                                <ul className="header__top--logos mb-0 list-unstyled d-flex align-items-end">
                                    <li className="mr-0">
                                        <Link to={`/${HomeARRoutes.home}`}><img src={`${urls.frontendUrl}/images/logo.png`} width="75" height="20" alt="GSM" /></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Header Main */}
            <div className="header__main">
                <div className="container-fluid">
                    <div className="mobile__menu">
                        <div className="mobile__line"></div>
                        <div className="mobile__line"></div>
                        <div className="mobile__line"></div>
                    </div>
                    <nav className="navbar navbar-expand-lg p-0">
                        <ul className="navbar-nav justify-content-center">
                            {/* Other Nav Items */}
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
    
            {/* Side Menu */}
            <div className="side-menu" style={{marginTop: "-100px"}}>
                <span className="side-menu-item">
                    <img className="in-svg" src={`${urls.frontendUrl}/images/location.svg`} alt="Side Menu Icon" />
                    <span>Our Network</span>
                </span>
                <span className="side-menu-item">
                    <img className="in-svg" src={`${urls.frontendUrl}/images/download.svg`} alt="Side Menu Icon" />
                    <span>Download Brochure</span>
                </span>
                <span className="side-menu-item">
                    <img className="in-svg" src={`${urls.frontendUrl}/images/car.svg`} alt="Side Menu Icon" />
                    <span>Book A Test Drive</span>
                </span>
                <span className="side-menu-item">
                    <img className="in-svg" src={`${urls.frontendUrl}/images/quote.svg`} alt="Side Menu Icon" />
                    <span>Request A Quote</span>
                </span>
            </div>

            {/* WhatsApp Icon */}
            <div className="whatsApp__fixed">
                <a href="https://wa.me/+96894760010" target="_blank" rel="noreferrer"><img className="in-svg" src={" https://www.svgrepo.com/show/176768/whatsapp-social-media.svg"} alt="Whatsapp" /></a>
            </div>
        </header>
    );
}

export default React.memo(Header);
