import React from 'react'
import { urls } from '../../config/constants'
import BookYourServiceForm from './Forms/BookYourServiceForm'

const BookYourService = () => {
  return (
    <section className="enquiry--block" style={{ backgroundImage: `url(${urls.frontendUrl}/images/enquiry-banner.jpg)` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="page__title mb-5">
                <h2 className="h6 text-uppercase text-white mb-0">Book Your Service</h2>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="enquiry__form bg-white">
                <BookYourServiceForm/>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default BookYourService