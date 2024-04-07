import React from 'react'
import VehicleCareAndMaintanceForm from './Forms/VehicleCareAndMaintanceForm'
import { urls } from '../../config/constants'


const VehicleCareAndMaintance = () => {
  return (
    <section className="enquiry--block" style={{ backgroundImage: `url(${urls.frontendUrl}/images/maintainence.jpg)` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              
            </div>
            <div className="col-lg-7">
              <div className="enquiry__form bg-white">
              <div class="page__title mb-3" style={{textAlign:"center"}}>
                            <h2 class="h6 text-uppercase text-black mb-0" style={{borderBottom: "2px solid #000000"}} >vehicle care and Maintenance  Products</h2>
                        </div>
                        <p>Check out our selection of automotive maintenance, cleaning, and refinishing products. They extend the life of your vehicle as well as enhance performance and safety.</p>
                <VehicleCareAndMaintanceForm/>
                 <div className="tool__free text-center my-4">
                  <a href="tel:80076200"><img className="in-svg" src={`${urls.frontendUrl}/images/toll-free-icon.svg`} alt="Toll Free" /> 80076200</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
  )
}

export default VehicleCareAndMaintance