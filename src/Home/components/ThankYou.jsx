import ContactUsForm from './Forms/ContactUsForm'
import React, { useState, useEffect, useCallback, memo } from 'react'
import { CommonApi, HomeApi } from '../../config/api';
import { defaultHeader, toastError, toastSuccess } from '../../services/CommonFunction';
import { urls } from '../../config/constants';
import { callApi } from '../../services/ApiService';
import { commonRoutes, HomeRoutes, SuzukiRoutes } from '../../config/RouteConfig';
import MoveCursorToTop from '../../services/MoveCursorToTop'
// import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
// import { Navigation,Pagination, EffectFade, Autoplay } from 'swiper'
import { Link,useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const ThankYou = () => {
     MoveCursorToTop();
  const params = useParams();
  return (
  
     
                 
        <section class="thankyou_section">
         {params?.id === 'gmc-currentoffers' ? (
             <Helmet>
            <script>
            {`
              gtag('event', 'conversion', {'send_to': 'AW-961878440/KRfXCM_UueEYEKiz1MoD'});
              `}
            </script>
            <script>
            {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1263656507727963');
            fbq('track', 'PageView');
            `}
            </script>
            <noscript>
                {`<img height='1' width='1' style='display:none' src='https://www.facebook.com/tr?id=1263656507727963&ev=PageView&noscript=1'/>`}
            </noscript>
        </Helmet> 
          ) : (
        null
      )}
        
    
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-12">
                        <div class="part_text">
                            <img src={`${urls.frontendUrl}/images/thankyou.gif`} />
                            <h1>Thank You!</h1>
                            <p></p>
                            <Link className="btn" to={`/home/${params?.id}`}>Go Back</Link>
                            {/*<Link className="btn" to={`${'/'}`}>Go to home</Link>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
          

  )
}

export default ThankYou