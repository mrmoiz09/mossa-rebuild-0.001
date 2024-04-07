import React from 'react'
import { urls } from '../../config/constants'

const MoosaConnect = () => {
  return (
        <section class="moosa_connect--block py-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="page__title dark-line mb-5">
                            <h2 class="h6 mb-0">Moosa Connect</h2>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="moosa_connect__content">
                            <p>Moosa connect, gives a new way to connect to customer’s vehicle and more by providing a wealth of features & information that enhances the on-road experience. From the vehicle’s maintenance to helping in driving better Moosa connect will ensure that the customers become a part of a better connected world.</p>
                            <h4 class="mb-4">Key Features of Moosa Connect:</h4>
                            <ul class="pl-3">
                                <li>Empowers customers to manage host of services</li>
                                <li>Enjoy seamless ownership experience by tracking multiple vehicles under the same account</li>
                            </ul>
                            <p>The system is highly secure and very difficult to tamper with since highly advanced security mechanism is implemented.</p>
                            <p>Download this Moosa Connect free app to become a part of the connected world.</p>
                            <ul class="app__store pt-4 d-flex align-content-center list-unstyled">
                                <li>
                                    {/* <a href="#"><img src="./images/google-play-store-button.png" alt="Google Play Store"/></a> */}
                                    <a href="https://play.google.com/store/apps/details?id=com.marh" target="_blank"><img src={`${urls.frontendUrl}/images/google-play-store-button.png`} alt="Google Play Store"/></a>
                                </li>
                                <li>
                                    {/* <a href="#"><img src="./images/apple-app-store-button.png" alt="Apple Play Store"/></a> */}
                                    <a href="https://apps.apple.com/us/app/marh/id1560394566" target="_blank"><img src={`${urls.frontendUrl}/images/apple-app-store-button.png`} alt="Apple Play Store"/></a>
                                </li>
                            </ul>
                            <p class="mt-5">For any query or support on Moosa Connect, please contact Moosa Customer Care at: <a href="tel:80076200">80076200</a>  or send us an e-mail at <a href="mailto:moosaconnect@moosagroup.com">moosaconnect@moosagroup.com</a></p>
                            <p><h4>Click here to read through the <a href="" target="_blank">Terms and Conditions</a></h4></p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="moosa_connect__banner">
                            {/* <img src="./images/moosa-connect-banner.png" alt="Moosa Connect Banner"/> */}
                            <img src={`${urls.frontendUrl}/images/moosa-connect-banner.png`} alt="Moosa Connect Banner"/>
                        </div>
                    </div>
                </div>
            </div>    
        </section>
    
  )
}

export default MoosaConnect