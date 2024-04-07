import React from 'react'
import PartEnquiryForm from './Forms/PartEnquiryForm'
import { urls } from '../../config/constants'


const PartEnquiry = () => {
  return (
        <section className="enquiry--block" style={{ backgroundImage: `url(${urls.frontendUrl}/images/enquiry-banner.jpg)` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              
            </div>
            <div className="col-lg-7">
              <div className="enquiry__form bg-white">
              <div class="page__title mb-3" style={{textAlign:"center"}}>
                            <h2 class="h6 text-uppercase text-black mb-0" style={{borderBottom: "2px solid #000000"}} >parts enquiry</h2>
                        </div>
                <PartEnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>



    
  )
}

export default PartEnquiry