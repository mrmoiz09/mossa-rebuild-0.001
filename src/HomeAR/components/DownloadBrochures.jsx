import React from 'react'
import { urls } from '../../config/constants'
import MoveCursorToTop from '../../services/MoveCursorToTop'
import DownloadBrochuresForm from './Forms/DownloadBrochuresForm'
import { commonRoutes, HomeRoutes, SuzukiRoutes } from '../../config/RouteConfig';
import { Link } from "react-router-dom";

const DownloadBrochures = () => {

  MoveCursorToTop();

  return (
    <section className="enquiry--block" style={{ backgroundImage: `url(${urls.frontendUrl}/images/enquiry-banner.jpg)` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              
            </div>
            <div className="col-lg-7">
              <div className="enquiry__form bg-white">
                <div className="page__title dark-line mb-5 text-center">
                  <h2 className="h6 text-uppercase mb-0">Download Brochures</h2>
                </div>
                <DownloadBrochuresForm />
                <div className="tool__free text-center my-4">
                  <a href="tel:80076200"><img className="in-svg" src={`${urls.frontendUrl}/images/toll-free-icon.svg`} alt="Toll Free" /> 80076200</a>
                </div>
                <p className="download__link text-center h6 mb-0"><Link to={`/${HomeRoutes.download}`}>Click here to download the brochures</Link></p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default DownloadBrochures