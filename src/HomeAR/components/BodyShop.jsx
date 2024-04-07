import React from 'react'
import { urls } from '../../config/constants'
import BodyShopForm from './Forms/BodyShopForm'

const BodyShop = () => {
  return (
      <section className="enquiry--block" style={{ backgroundImage: `url(${urls.frontendUrl}/images/bodyshop.jpg)` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
            <div className="enquiry__form bg-white">
    			<p style={{textAlign:"justify"}}>Complementing the Parts Division is a full-equipped Body Shop facility operated by a team of professionals with the skills and experience to restore a collision-damaged vehicle to near factory condition.</p>
                <p style={{textAlign:"justify"}}>Our highly qualified and well-trained technicians are adept at bringing back to life twisted frames, bent fenders, cracked windscreens, and other misshapen parts using the latest auto body collision repair technology. Replacement parts are sourced entirely from Original Equipment Manufacturers (OEM) or directly from the facilities of the vehicle manufacturer.</p>
                <p style={{textAlign:"justify"}}>The state-of-the-art workshop also specializes in the removal of scratches, dents, and dings – at prices that are comparable with the best in the automotive service industry in Oman.</p>
            
                <h3 className="h6 text-uppercase text-black mb-2">Our services include</h3>
                
    			<ol>
                <li>Major and minor collision repair</li>
                <li>Touch-ups, stone chips recovery, etc.</li>
                <li>Complete paint jobs</li>
                <li>Wheel rim painting and touch-up</li>
                <li>Body modifications and custom paint jobs</li>
                <li>Partial panel painting/ touch-ups</li>
                <li>Accessories installation (i.e. parking sensor, tow bar, lights, spoilers, grills, etc.)</li>
                </ol>
            
            </div>
            </div>
            <div className="col-lg-7">
              <div className="enquiry__form bg-white">
               <div class="page__title mb-3" style={{textAlign:"center"}}>
                            <h2 className="h6 text-uppercase text-black mb-0" style={{borderBottom: "2px solid #000000"}} >Body Shop</h2>
                        </div>
                <BodyShopForm/>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default BodyShop