import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { SuzukiARRoutes } from '../config/RouteConfig'
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

const SuzukiARApp = () => {
  return (
    <Routes>
        {/* <Route path={`/${SuzukiRoutes.home}`} element={<h2>Hello</h2>} /> */}
        <Route path={`/${SuzukiARRoutes.home}`} element={<Wrapper children={<Home/>} header={<Header/>}/>}/>
        <Route path={`/${SuzukiARRoutes.carmodelRoute}/:id`} element={<Wrapper children={<CarModel/>} header={<Header/>}/>}/>
        <Route path={`/${SuzukiARRoutes.carmodelNotFound}/:id`} element={<Wrapper children={<CarModelNotFound/>} header={<Header2/>}/>}/>
        <Route path={`/${SuzukiARRoutes.test_drive}`} element={<Wrapper children={<TestDrive/>} header={<Header2/>}/>}/>
        <Route path={`/${SuzukiARRoutes.downloadBrochures}`} element={<Wrapper children={<DownloadBrochures/>} header={<Header2/>}/>}/>
        <Route path={`/${SuzukiARRoutes.enquiryRoute}`} element={<Wrapper children={<Enquiry/>} header={<Header2/>}/>}/>
        <Route path={`/${SuzukiARRoutes.enquiryRoute}/:id`} element={<Wrapper children={<Enquiry/>} header={<Header2/>}/>}/>
        <Route path={`/${SuzukiARRoutes.offers}`} element={<Wrapper children={<Offers/>} header={<Header2/>}/>}/>
        <Route path={`/${SuzukiARRoutes.service_enquiry}`} element={<Wrapper children={<ServiceEnquiry/>} header={<Header2/>}/>}/>
        <Route path={`/${SuzukiARRoutes.ournetworkRoute}`} element={<Wrapper children={<OurNetwork/>} header={<Header2/>}/>}/>
        <Route path={`/${SuzukiARRoutes.requestQuoteRoute}`} element={<Wrapper children={<RequestQuote/>} header={<Header2/>}/>}/>
        <Route path={`/${SuzukiARRoutes.moosaconnect}`} element={<Wrapper children={<MoosaConnect/>} header={<Header2/>}/>}/>
        <Route path={`/${SuzukiARRoutes.bmeppRoute}`} element={<Wrapper children={<BmEpp/>} header={<Header2/>}/>}/>
        <Route path={`/${SuzukiARRoutes.aboutusRoute}`} element={<Wrapper children={<Aboutus/>} header={<Header2/>}/>}/>
        <Route path={`/${SuzukiARRoutes.blogs}/:alias`} element={<Wrapper children={<Blogs/>} header={<Header/>}/>} />
        <Route path={`/${SuzukiARRoutes.download}`} element={<Wrapper children={<Download/>} header={<Header2/>}/>} />
        <Route path={`/${SuzukiARRoutes.suzukicurrentoffers}`} element={<Wrapper children={<SuzukiCurrentOffers/>} header={<Header2/>}/>} />
        <Route path={`/${SuzukiARRoutes.menuprice}`} element={<Wrapper children={<MenuPrice/>} header={<Header2/>}/>} />
        <Route path={`/${SuzukiARRoutes.partEnquiryRoute}`} element={<Wrapper children={<PartEnquiry/>} header={<Header2/>}/>} />
        <Route path={`/${SuzukiARRoutes.book_your_service}`} element={<Wrapper children={<BookYourService/>} header={<Header2/>}/>} />
        <Route path={`/${SuzukiARRoutes.body_shop}`} element={<Wrapper children={<BodyShop/>} header={<Header2/>}/>} />
        <Route path={`/${SuzukiARRoutes.maintenance}`} element={<Wrapper children={<Maintanence/>} header={<Header2/>}/>} />
    </Routes>
  )
}

export default SuzukiARApp