import React from 'react'
import Home from './components/Home'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { commonRoutes, HomeARRoutes } from '../config/RouteConfig'
import Wrapper from './containers/Wrapper'
import Header from './containers/Header'
import Header2 from './containers/Header2'
import ContactUs from './components/ContactUs'
import OurNetwork from './components/OurNetwork'
import RequestQuote from './components/RequestQuote'
import VehicleCareAndMaintance from './components/VehicleCareAndMaintance'
import PartEnquiry from './components/PartEnquiry'
import RentCar from './components/RentCar'
import MultiFranchise from './components/MultiFranchise'
import DownloadBrochures from './components/DownloadBrochures'

import TestDrive from './components/TestDrive'
import ServiceOffer from './components/ServiceOffer'
import ServiceEnquiry from './components/ServiceEnquiry'
import BodyShop from './components/BodyShop'
import BookYourService from './components/BookYourService'
import NewYukonSltBase from './components/NewYukonSltBase'
import BmEpp from './components/BmEpp'
import MoosaConnect from './components/MoosaConnect'
import Aboutus from './components/Aboutus'
import Company from './components/Company'
import Owners from './components/Owners'
import Blogs from './components/Blogs'
import Download from './components/Download'
import MenuPrice from './components/MenuPrice'
import GMCCurrentOffers from './components/GMCCurrentOffers'
import SuzukiCurrentOffers from './components/SuzukiCurrentOffers'

const HomeARApp = () => {
  return (
    <>
        <Routes>
            <Route path={`/${HomeARRoutes.home}`} element={<Wrapper children={<Home/>} header={<Header/>}/>}/>
            <Route path={`/${HomeARRoutes.ownersRoute}`} element={<Wrapper children={<Owners/>} header={<Header/>} />} />
            <Route path={`/${HomeARRoutes.aboutusRoute}`} element={<Wrapper children={<Aboutus/>} header={<Header/>} />} />
            <Route path={`/${HomeARRoutes.contactusRoute}`} element={<Wrapper children={<ContactUs/>} header={<Header2/>} />} />
            <Route path={`/${HomeARRoutes.ournetworkRoute}`} element={<Wrapper children={<OurNetwork/>} header={<Header/>}/>}  />
            <Route path={`/${HomeARRoutes.requestQuoteRoute}`} element={<Wrapper children={<RequestQuote/>} header={<Header2/>}/>} />
            <Route path={`/${HomeARRoutes.vehicleCareAndMaintenanceRoute}`} element={<Wrapper children={<VehicleCareAndMaintance/>} header={<Header2/>}/>} />
            <Route path={`/${HomeARRoutes.partEnquiryRoute}`} element={<Wrapper children={<PartEnquiry/>} header={<Header2/>}/>} />
            <Route path={`/${HomeARRoutes.bmeppRoute}`} element={<Wrapper children={<BmEpp/>} header={<Header2/>}/>} />
            <Route path={`/${HomeARRoutes.moosa_connect}`} element={<Wrapper children={<MoosaConnect/>} header={<Header2/>}/>} />
            <Route path={`/${HomeARRoutes.rentCarRoute}`} element={<Wrapper children={<RentCar/>} header={<Header2/>}/>} />
            <Route path={`/${HomeARRoutes.multifranchiseRoute}`} element={<Wrapper children={<MultiFranchise/>} header={<Header2/>}/>} />
            <Route path={`/${HomeARRoutes.downloadBrochures}`} element={<Wrapper children={<DownloadBrochures/>} header={<Header2/>}/>} />
            <Route path={`/${HomeARRoutes.test_drive}`} element={<Wrapper children={<TestDrive/>} header={<Header2/>}/>} />
            <Route path={`/${HomeARRoutes.service_offer}`} element={<Wrapper children={<ServiceOffer/>} header={<Header2/>}/>} />
            <Route path={`/${HomeARRoutes.service_enquiry}`} element={<Wrapper children={<ServiceEnquiry/>} header={<Header2/>}/>} />
            <Route path={`/${HomeARRoutes.body_shop}`} element={<Wrapper children={<BodyShop/>} header={<Header2/>}/>} />
            <Route path={`/${HomeARRoutes.book_your_service}`} element={<Wrapper children={<BookYourService/>} header={<Header2/>}/>} />
            <Route path={`/${HomeARRoutes.new_yukon_slt_base}`} element={<Wrapper children={<NewYukonSltBase/>} header={<Header2/>}/>} />
            <Route path={`/${HomeARRoutes.blogs}/:alias`} element={<Wrapper children={<Blogs/>} header={<Header/>}/>} />
            <Route path={`/${HomeARRoutes.download}`} element={<Wrapper children={<Download/>} header={<Header/>}/>} />
            <Route path={`/${HomeARRoutes.menuprice}`} element={<Wrapper children={<MenuPrice/>} header={<Header2/>}/>} />
            <Route path={`/${HomeARRoutes.gmccurrentoffers}`} element={<Wrapper children={<GMCCurrentOffers/>} header={<Header2/>}/>} />
            <Route path={`/${HomeARRoutes.suzukicurrentoffers}`} element={<Wrapper children={<SuzukiCurrentOffers/>} header={<Header2/>}/>} />
        </Routes>
    </>
  )
}

export default HomeARApp