import React from 'react'
import { urls } from '../../config/constants'
import BookYourServiceForm from './Forms/BookYourServiceForm'

const BookYourService = () => {
  return (
    <section className="enquiry--block" style={{ backgroundImage: `url(${urls.frontendUrl}/images/swift-banner.jpg)` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              
            </div>
            <div className="col-lg-7">
              <div className="enquiry__form bg-white">
              <div class="page__title mb-3" style={{textAlign:"center"}}>
                    <h2 class="h6 text-uppercase text-black mb-0" style={{borderBottom: "2px solid #000000"}} >Service Offer</h2>
                </div>
                <BookYourServiceForm/>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default BookYourService