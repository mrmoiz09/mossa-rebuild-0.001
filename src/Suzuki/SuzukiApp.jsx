import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { commonRoutes, SuzukiRoutes } from '../config/RouteConfig'
import Home from './components/Home'
import CarModel from './components/CarModel'
import Enquiry from './components/Enquiry'
import Offers from './components/Offers'
import ServiceEnquiry from './components/ServiceEnquiry'
import OurNetwork from './components/OurNetwork'
import RequestQuote from './components/RequestQuote'
import Header from './containers/Header'
import Header2 from './containers/Header2'
import Wrapper from './containers/Wrapper'
import BmEpp from './components/BmEpp'
import MoosaConnect from './components/MoosaConnect'
import TestDrive from './components/TestDrive'
import DownloadBrochures from './components/DownloadBrochures'
import Aboutus from './components/Aboutus'
import Blogs from './components/Blogs'
import Download from './components/Download'
import SuzukiCurrentOffers from './components/SuzukiCurrentOffers'
import MenuPrice from './components/MenuPrice'
import PartEnquiry from './components/PartEnquiry'
import BookYourService from './components/BookYourService'
import BodyShop from './components/BodyShop'
import Maintanence from './components/Maintanence'
import CarModelNotFound from './components/CarModelNotFound'
import ContactUs from './components/ContactUs'
import ThankYou from './components/ThankYou'
const SuzukiApp = () => {
  return (
    <Routes>
        {/* <Route path={`/${SuzukiRoutes.home}`} element={<h2>Hello</h2>} /> */}
        <Route path={`/${SuzukiRoutes.home}`} element={<Wrapper children={<Home/>} header={<Header/>}/>}/>
        <Route path={`/${SuzukiRoutes.carmodelRoute}/:id`} element={<Wrapper children={<CarModel/>} header={<Header/>}/>}/>
        <Route path={`/${SuzukiRoutes.carmodelNotFound}/:id`} element={<Wrapper children={<CarModelNotFound/>} header={<Header2/>}/>}/>
        <Route path={`/${SuzukiRoutes.test_drive}`} element={<Wrapper children={<TestDrive/>} header={<Header2/>}/>}/>
            <Route path={`/${SuzukiRoutes.contactusRoute}`} element={<Wrapper children={<ContactUs/>} header={<Header2/>} />} />
        <Route path={`/${SuzukiRoutes.downloadBrochures}`} element={<Wrapper children={<DownloadBrochures/>} header={<Header2/>}/>}/>
        <Route path={`/${SuzukiRoutes.enquiryRoute}`} element={<Wrapper children={<Enquiry/>} header={<Header2/>}/>}/>
        <Route path={`/${SuzukiRoutes.enquiryRoute}/:id`} element={<Wrapper children={<Enquiry/>} header={<Header2/>}/>}/>
        <Route path={`/${SuzukiRoutes.offers}`} element={<Wrapper children={<Offers/>} header={<Header2/>}/>}/>
        <Route path={`/${SuzukiRoutes.service_enquiry}`} element={<Wrapper children={<ServiceEnquiry/>} header={<Header2/>}/>}/>
        <Route path={`/${SuzukiRoutes.ournetworkRoute}`} element={<Wrapper children={<OurNetwork/>} header={<Header2/>}/>}/>
        <Route path={`/${SuzukiRoutes.requestQuoteRoute}`} element={<Wrapper children={<RequestQuote/>} header={<Header2/>}/>}/>
        <Route path={`/${SuzukiRoutes.moosaconnect}`} element={<Wrapper children={<MoosaConnect/>} header={<Header2/>}/>}/>
        <Route path={`/${SuzukiRoutes.bmeppRoute}`} element={<Wrapper children={<BmEpp/>} header={<Header2/>}/>}/>
        <Route path={`/${SuzukiRoutes.aboutusRoute}`} element={<Wrapper children={<Aboutus/>} header={<Header2/>}/>}/>
        <Route path={`/${SuzukiRoutes.blogs}/:alias`} element={<Wrapper children={<Blogs/>} header={<Header2/>}/>} />
        <Route path={`/${SuzukiRoutes.download}`} element={<Wrapper children={<Download/>} header={<Header2/>}/>} />
        <Route path={`/${SuzukiRoutes.suzukicurrentoffers}`} element={<Wrapper children={<SuzukiCurrentOffers/>} header={<Header2/>}/>} />
        <Route path={`/${SuzukiRoutes.menuprice}`} element={<Wrapper children={<MenuPrice/>} header={<Header2/>}/>} />
        <Route path={`/${SuzukiRoutes.partEnquiryRoute}`} element={<Wrapper children={<PartEnquiry/>} header={<Header2/>}/>} />
        <Route path={`/${SuzukiRoutes.book_your_service}`} element={<Wrapper children={<BookYourService/>} header={<Header2/>}/>} />
        <Route path={`/${SuzukiRoutes.body_shop}`} element={<Wrapper children={<BodyShop/>} header={<Header2/>}/>} />
        <Route path={`/${SuzukiRoutes.maintenance}`} element={<Wrapper children={<Maintanence/>} header={<Header2/>}/>} />
        <Route path={`/${SuzukiRoutes.thankyou}/:id`} element={<Wrapper children={<ThankYou/>} header={<Header2/>} />} />
    </Routes>
  )
}

export default SuzukiApp