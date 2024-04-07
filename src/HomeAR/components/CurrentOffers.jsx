import React from 'react'
import CurrentOffersForm from './Forms/CurrentOffersForm'
import { urls } from '../../config/constants'


const CurrentOffers = () => {
  return (
    <section className="enquiry--block" style={{ backgroundImage: `url(${urls.frontendUrl}/images/enquiry-banner.jpg)` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              
            </div>
            <div className="col-lg-7">
              <div className="enquiry__form bg-white">
                <div class="page__title mb-3" style={{textAlign:"center"}}>
                    <h2 class="h6 text-uppercase text-black mb-0" style={{borderBottom: "2px solid #000000"}} >Current offers</h2>
                </div>
                <CurrentOffersForm/>
              </div>
            </div>
          </div>
        </div>
      </section>
    
  )
}

export default CurrentOffers