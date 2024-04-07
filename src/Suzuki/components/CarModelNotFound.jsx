import React from 'react'
import { urls } from '../../config/constants'
import {useParams} from 'react-router-dom'

const CarModelNotFound = () => {

    const params = useParams();

  return (
    <section className="model__view--block">
        <div className="container">
          <div className="row">
          
            <div className="col-lg-12">
              <div className="enquiry__form bg-white mt-5 mb-5">
              <div class="page__title mb-3" style={{textAlign:"center"}}>
                            <h2 class="h6 text-uppercase text-black mb-0" style={{borderBottom: "2px solid #000000"}} >Requested model does not exist</h2>
                        </div>
                
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default CarModelNotFound