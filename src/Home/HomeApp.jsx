import React from 'react'
import Home from './components/Home'
import {BrowserRouter as Routes,Route} from "react-router-dom"
import { commonRoutes, HomeRoutes, testRoute } from '../config/RouteConfig'
import Wrapper from './containers/Wrapper'
import ContactUs from './components/ContactUs'
import OurNetwork from './components/OurNetwork'
import RequestQuote from './components/RequestQuote'
import VehicleCareAndMaintance from './components/VehicleCareAndMaintance'
import PartEnquiry from './components/PartEnquiry'
import RentCar from './components/RentCar'
import MultiFranchise from './components/MultiFranchise'
import DownloadBrochures from './components/DownloadBrochures'
import Header from './containers/Header'
// import Header from './containers/Header'
import TestDrive from './components/TestDrive'
import ServiceOffer from './components/ServiceOffer'
import ServiceEnquiry from './components/ServiceEnquiry'
import BodyShop from './components/BodyShop'
import BookYourService from './components/BookYourService'
import NewYukonSltBase from './components/NewYukonSltBase'
import BmEpp from './components/BmEpp'
import MoosaConnect from './components/MoosaConnect'
import Aboutus from './components/Aboutus'
import History from './components/History'
import Owners from './components/Owners'
import Blogs from './components/Blogs'
import Download from './components/Download'
import MenuPrice from './components/MenuPrice'
import Umbrella from './components/Umbrella'
//import Milestone from './components/Milestone'
//import Accolades from './components/Accolades'
import GMCCurrentOffers from './components/GMCCurrentOffers'
import SuzukiCurrentOffers from './components/SuzukiCurrentOffers'
import Test from '../Page/Test'
import ThankYou from './components/ThankYou'
const HomeApp = () => {
  return (
    <>
        <Routes>
            <Route path={`/${testRoute.testTab}`} element={<Test/>}/>
            {/*  */}
            <Route path={`/`} element={<Wrapper children={<Home/>} header={<Header/>}/>}>
                <Route path={`/${HomeRoutes.home}`} element={<Wrapper children={<Home/>} header={<Header/>}/>}/>
            </Route>
            {/*  */}
            <Route path={`/${HomeRoutes.ownersRoute}`} element={<Wrapper children={<Owners/>} header={<Header/>} />} />
            <Route path={`/${commonRoutes.aboutusRoute}`} element={<Wrapper children={<Aboutus/>} header={<Header/>} />} />
            <Route path={`/${commonRoutes.historyRoute}`} element={<Wrapper children={<History/>} header={<Header/>} />} />
            <Route path={`/${HomeRoutes.contactusRoute}`} element={<Wrapper children={<ContactUs/>} header={<Header/>} />} />
            <Route path={`/${HomeRoutes.ournetworkRoute}`} element={<Wrapper children={<OurNetwork/>} header={<Header/>}/>}  />
            <Route path={`/${HomeRoutes.requestQuoteRoute}`} element={<Wrapper children={<RequestQuote/>} header={<Header/>}/>} />
            <Route path={`/${HomeRoutes.vehicleCareAndMaintenanceRoute}`} element={<Wrapper children={<VehicleCareAndMaintance/>} header={<Header/>}/>} />
            <Route path={`/${HomeRoutes.partEnquiryRoute}`} element={<Wrapper children={<PartEnquiry/>} header={<Header/>}/>} />
            <Route path={`/${HomeRoutes.bmeppRoute}`} element={<Wrapper children={<BmEpp/>} header={<Header/>}/>} />
            <Route path={`/${HomeRoutes.moosa_connect}`} element={<Wrapper children={<MoosaConnect/>} header={<Header/>}/>} />
            <Route path={`/${HomeRoutes.rentCarRoute}`} element={<Wrapper children={<RentCar/>} header={<Header/>}/>} />
            <Route path={`/${HomeRoutes.multifranchiseRoute}`} element={<Wrapper children={<MultiFranchise/>} header={<Header/>}/>} />
            <Route path={`/${HomeRoutes.downloadBrochures}`} element={<Wrapper children={<DownloadBrochures/>} header={<Header/>}/>} />
            <Route path={`/${HomeRoutes.test_drive}`} element={<Wrapper children={<TestDrive/>} header={<Header/>}/>} />
            <Route path={`/${HomeRoutes.service_offer}`} element={<Wrapper children={<ServiceOffer/>} header={<Header/>}/>} />
            <Route path={`/${HomeRoutes.service_enquiry}`} element={<Wrapper children={<ServiceEnquiry/>} header={<Header/>}/>} />
            <Route path={`/${HomeRoutes.body_shop}`} element={<Wrapper children={<BodyShop/>} header={<Header/>}/>} />
            <Route path={`/${HomeRoutes.book_your_service}`} element={<Wrapper children={<BookYourService/>} header={<Header/>}/>} />
            <Route path={`/${HomeRoutes.new_yukon_slt_base}`} element={<Wrapper children={<NewYukonSltBase/>} header={<Header/>}/>} />
            <Route path={`/${HomeRoutes.blogs}/:alias`} element={<Wrapper children={<Blogs/>} header={<Header/>}/>} />
            <Route path={`/${HomeRoutes.download}`} element={<Wrapper children={<Download/>} header={<Header/>}/>} />
            <Route path={`/${HomeRoutes.menuprice}`} element={<Wrapper children={<MenuPrice/>} header={<Header/>}/>} />
            <Route path={`/${HomeRoutes.umbrella}`} element={<Wrapper children={<Umbrella/>} header={<Header/>}/>} />
            <Route path={`/${HomeRoutes.gmccurrentoffers}`} element={<Wrapper children={<GMCCurrentOffers/>} header={<Header/>}/>} />
            <Route path={`/${HomeRoutes.suzukicurrentoffers}`} element={<Wrapper children={<SuzukiCurrentOffers/>} header={<Header/>}/>} />
             {/* <Route path={`/${HomeRoutes.milestone}`} element={<Wrapper children={<Milestone/>} header={<Header/>}/>} />  */}
            {/* <Route path={`/${HomeRoutes.accolades}`} element={<Wrapper children={<Accolades/>} header={<Header/>}/>} /> */}
            <Route path={`/${HomeRoutes.thankyou}/:id`} element={<Wrapper children={<ThankYou/>} header={<Header/>} />} />
        </Routes>
    </>
  )
}

export default HomeApp