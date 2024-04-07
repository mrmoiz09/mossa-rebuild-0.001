import React,{ useState, useEffect, useCallback, memo, useMemo } from 'react'
import OurNetworkForm from './Forms/OurNetworkForm'
import { urls } from '../../config/constants'
import { image2svg } from '../../utilsfunctions/Svg';
import Iframe from 'react-iframe'
import AOS from 'aos';
import "aos/dist/aos.css";
import { CommonApi } from '../../config/api';
import { defaultHeader, toastError, validateJsonString } from '../../services/CommonFunction';
import { callApi } from '../../services/ApiService';
import MoveCursorToTop from '../../services/MoveCursorToTop';
import ReactMapboxGl, { Layer, Feature,Popup,Marker } from "react-mapbox-gl";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import $ from 'jquery';
const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiYWJkZWFsaTcyIiwiYSI6ImNsN2J6ZWh4eDE3OXgzcW84d2VxbWRpM24ifQ.RnphYbegeMvk3I1fjTqY5g"
});
const OurNetwork = () => {

    MoveCursorToTop();

    const [location,setLocation] = useState([]);

    const fetchLocation = useCallback(async(value)=>{
         
        await callApi(CommonApi.getLocation.method,CommonApi.getLocation.url,value,null,defaultHeader())
        .then((res)=>{
            if(!res?.data?.error){
                const payload = res?.data?.data;
                const arr = [];
                for(let p of payload)
                {
                    arr.push({
                        id:p?.id,
                        title:p?.title,
                        description:p?.description,
                        maps:p?.maps,
                        address:p?.address,
                        contact_info:validateJsonString(p?.contact_info)
                    });                   
                }
                
                setLocation(arr);
               $( ".in-svg" ).ready( function (){ image2svg();});
            }
        }).catch((err)=>{
            console.log(err);
            toastError(err?.response?.data?.message);
        });
    },[]);
    
    
    const [data,setData] = useState([]);
    const fetchData = useCallback(async ()=>{
    await callApi(CommonApi.getSettings.method,CommonApi.getSettings.url,null,null,defaultHeader()).then((res) => {
    if (!res?.data?.error) {
      const arr = [];
           const payload = res?.data?.data;
           if(Array.isArray(payload) && payload?.length>0){
              
              for(let p of payload)
                {
                    if(p?.key_name=='our-network'){
                        setData(p?.key_value);
                        console.log(p?.key_value);
                    }
                }
                
              
           }
       } else {
        // toastError(res?.data?.message);
      }
   }).catch((err) => {
        // toastError(err?.response?.data?.message);
      })
  },[]);

     useEffect(() => {
         fetchData();
        // image2svg();
        fetchLocation(1);
        
        AOS.init();
        AOS.refresh();
  
  }, []);

  const onLocationChange = useCallback(async (e)=>{
    fetchLocation(e.target.value);
  },[]);



  const [showGhubra, toggleGhubra] = React.useState(false);
  const [showWataya, toggleWataya] = React.useState(false);
  const [showIbri, toggleIbri] = React.useState(false);
  const [showNizwa, toggleNizwa] = React.useState(false);
  const [showSalah1, toggleSalah1] = React.useState(false);
  const [showSalah2, toggleSalah2] = React.useState(false);
  const [showSohar, toggleSohar] = React.useState(false);
  const [showSur, toggleSur] = React.useState(false);
  const [showMabela, toggleMabela] = React.useState(false);
  const [showWadi, toggleWadi] = React.useState(false);
  const [position, setPosition] = useState([54.424,21.591]);
  const [zoom, setZoom] = useState([5]);
  
  return (
      <>
   <section className="hero__banner--block our-networks">
        <div className="hero__banner--img centered-img-wrapper" data-aos="fade-down" data-aos-duration="1300">
            <img className="lazy-load centered-img" src={`${urls.dir_url}/${data}`} width="1920" height="1172" alt="Hero Banner" />
        </div>
        <div className="page__title">
            <h2 className="h6 text-uppercase text-white mb-0">Our Network</h2>
        </div>
    </section>

     <section className="our_network--block">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="our_network__box">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="our_network__list">
                                        <div className="form-group">
                                            <select name="types" className="form-control bg-white" onChange={(e)=>onLocationChange(e)}>
                                                <option value="1">Sales</option>
                                                <option value="2">Service & Parts</option>
                                                <option value="3">Multi Franchise Mega Body Shop</option>
                                                <option value="4">MCRC-SIXT Rent-a-Car</option>
                                            </select>
                                        </div>
                                        {/*<div className="network__info">
                                            <p className="text-uppercase mb-0">Saturday – Thursday : 8:30am-1pm | 4pm-8pm</p>
                                        </div>*/}
                                        <div className="location__list pt-4">
                                            <div className="row">
                                                {/* <div className="col-md-6">
                                                    <div className="location__item card">
                                                        <div className="card-header">
                                                            <h4 className="h6 text-uppercase text-white mb-0 d-flex align-items-center"><img className="in-svg" src={`${urls.frontendUrl}/images/pin.svg`} alt="Map Pin" /> <span>GHUBRA</span></h4>
                                                        </div>
                                                        <div className="card-body">
                                                            <address>Building # 215, Way # 3701 Near Bausher Municipality, Muscat</address>
                                                            <ul className="list-unstyled">
                                                                <li>
                                                                    <h5 className="mb-1 text-uppercase">GMC</h5>
                                                                    <a href="tel:+968 22080863">+968 22080863</a>
                                                                    <a href="tel:80076200">80076200</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div> */}

                                                {location.length>0 ? 
                                                    <>
                                                        {location.map((l,i)=>(
                                                            <div className="col-md-6">
                                                                <div className="location__item card">
                                                                    <div className="card-header">
                                                                        <a href={l?.maps} target="_blank"><h4 className="h6 text-uppercase text-white mb-0 d-flex align-items-center"><img className="in-svg" src={`${urls.frontendUrl}/images/pin.svg`} alt="Map Pin" /> <span>{l?.title}</span></h4></a>
                                                                    </div>
                                                                    <div className="card-body">
                                                                    
                                                                        <address><span  dangerouslySetInnerHTML={{ __html: l?.description }}></span> </address>
                                                                        <address><span  dangerouslySetInnerHTML={{ __html: l?.address }}></span> </address>
                                                                        <ul className="list-unstyled">
                                                                            {l.contact_info.map((c)=>(
                                                                                <li>
                                                                                    <h5 className="mb-1 text-uppercase">{c?.title}</h5>
                                                                                    {(c.phone).map((p)=>(
                                                                                        <>
                                                                                            <a href={`tel:${p}`}>{p}</a>
                                                                                        </>
                                                                                    ))}
                                                                                    
                                                                                </li>
                                                                            ))}
                                                                            
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ) )}
                                                        
                                                    </>
                                                :
                                                ""}

                                                {/* {location.length>0 ?
                                                    <>
                                                        {location.map((l,i)=>(
                                                            <div className="col-md-6">
                                                                <div className="location__item card">
                                                                    <div className="card-header">
                                                                        <h4 className="h6 text-uppercase text-white mb-0 d-flex align-items-center"><img className="in-svg" src={`${urls.frontendUrl}/images/pin.svg`} alt="Map Pin" /> <span>{l?.title}</span></h4>
                                                                    </div>
                                                                    
                                                                    <div className="card-body">
                                                                        <address>{l?.address}</address>
                                                                        <ul className="list-unstyled">
                                                                            {Array.isArray(l?.contact_info) ? 
                                                                                <>
                                                                                    {l.contact_info.map((ci)=>(
                                                                                        <li>
                                                                                            <h5 className="mb-1 text-uppercase">{ci?.title}</h5>
                                                                                            {Array.isArray(ci?.phone) ? 
                                                                                                <>
                                                                                                    {ci.phone.map((p)=>(
                                                                                                        <>
                                                                                                            <a href={`tel:${p}`}>{p}</a>
                                                                                                        </>
                                                                                                    ))}
                                                                                                </>
                                                                                            :""}
                                                                                        </li>
                                                                                    ))}
                                                                                </>
                                                                            :""}

                                                                            <li>
                                                                                <h5 className="mb-1 text-uppercase">GMC</h5>
                                                                                <a href="tel:+968 22080863">+968 22080863</a>
                                                                                <a href="tel:80076200">80076200</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </>
                                                :""} */}

                                                {/* <div className="col-md-6">
                                                    <div className="location__item card">
                                                        <div className="card-header">
                                                            <h4 className="h6 text-uppercase text-white mb-0 d-flex align-items-center"><img className="in-svg" src={`${urls.frontendUrl}/images/pin.svg`} alt="Map Pin" /> <span>WATTAYAH</span></h4>
                                                        </div>
                                                        <div className="card-body">
                                                            <address>Muscat Muscat</address>
                                                            <ul className="list-unstyled">
                                                                <li>
                                                                    <h5 className="mb-1 text-uppercase">SUZUKI</h5>
                                                                    <a href="tel:+968 22080863">+968 22080863</a>
                                                                    <a href="tel:80076200">80076200</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="location__item card">
                                                        <div className="card-header">
                                                            <h4 className="h6 text-uppercase text-white mb-0 d-flex align-items-center"><img className="in-svg" src={`${urls.frontendUrl}/images/pin.svg`} alt="Map Pin" /> <span>IBRI</span></h4>
                                                        </div>
                                                        <div className="card-body">
                                                            <address>Plat # 552,
                                                                Ibri Town, Al Nahda Main Road</address>
                                                            <ul className="list-unstyled">
                                                                <li>
                                                                    <h5 className="mb-1 text-uppercase">GMC</h5>
                                                                    <a href="tel:+96894291472">+968 94291472</a>
                                                                    <a href="tel:+96825692287">+968 25692287</a>
                                                                </li>
                                                                <li>
                                                                    <h5 className="mb-1 text-uppercase">SUZUKI</h5>
                                                                    <a href="tel:++96898160081">+968 98160081</a>
                                                                    <a href="tel:+96895349302">+968 95349302</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="location__item card">
                                                        <div className="card-header">
                                                            <h4 className="h6 text-uppercase text-white mb-0 d-flex align-items-center"><img className="in-svg" src={`${urls.frontendUrl}/images/pin.svg`} alt="Map Pin"  /> <span>nizva</span></h4>
                                                        </div>
                                                        <div className="card-body">
                                                            <address>Plat # 552,
                                                                Ibri Town, Al Nahda Main Road</address>
                                                            <ul className="list-unstyled">
                                                                <li>
                                                                    <h5 className="mb-1 text-uppercase">GMC</h5>
                                                                    <a href="tel:+96894291472">+968 94291472</a>
                                                                    <a href="tel:+96825692287">+968 25692287</a>
                                                                </li>
                                                                <li>
                                                                    <h5 className="mb-1 text-uppercase">SUZUKI</h5>
                                                                    <a href="tel:++96898160081">+968 98160081</a>
                                                                    <a href="tel:+96895349302">+968 95349302</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="tool__free text-center mb-5">
                                        <a href="tel:80076200"><img className="in-svg" src={`${urls.frontendUrl}/images/toll-free-icon.svg`} alt="Toll Free" /> 80076200</a>
                                    </div>
                                    <div className="our_network__map centered-img-wrapper">
                                    <Map
                                        style="mapbox://styles/mapbox/streets-v8"
                                        zoom={zoom}
                                        center={position}
                                        containerStyle={{
                                          height: "60vh"
                                        }}
                                      >
                                       {showGhubra && (
                                        <Popup
                                          coordinates={[58.4247957,23.5913749]}
                                          anchor="top"
                                        >
                                        
                                          <div onClick={() => toggleGhubra(false)} style={{textAlign: 'center',marginTop: -8,marginBottom:8,color:"Red",fontSize: 16,fontWeight: 'bold'}}>X</div>
                                          <div style={{marginTop: -6,}}>SATURDAY – THURSDAY : 8:30AM-1PM | 4PM-8PM<br/>
                                            BUILDING # 215, WAY # 3701 NEAR BAUSHER MUNICIPALITY, MUSCAT<br/>
                                            <h6>GMC</h6>
                                            +968 22080863<br/>
                                            80076200
                                          </div>
                                        </Popup>
                                      )}
                                
                                        {showWataya && (
                                        <Popup
                                          coordinates={[58.5192137, 23.6005173]}
                                          anchor="top"
                                        >
                                          <div onClick={() => toggleWataya(false)} style={{textAlign: 'center',marginTop: -8,marginBottom:8,color:"Red",fontSize: 16,fontWeight: 'bold'}}>X</div>
                                          <div style={{marginTop: -6,}}>SATURDAY – THURSDAY : 8:30AM-1PM | 4PM-8PM<br/>
                                            MUSCAT MUSCAT<br/>
                                            <h6>SUZUKI</h6>
                                            +968 24571110<br/>
                                            80076200
                                          </div>
                                        </Popup>
                                      )}
                                      
                                      {showIbri && (
                                        <Popup
                                          coordinates={[56.4976005,23.2188186]}
                                          anchor="top"
                                        >
                                          <div onClick={() => toggleIbri(false)} style={{textAlign: 'center',marginTop: -8,marginBottom:8,color:"Red",fontSize: 16,fontWeight: 'bold'}}>X</div>
                                          <div style={{marginTop: -6,}}>SATURDAY – THURSDAY : 8:30AM-1PM | 4PM-8PM<br/>
                                            PLAT # 552, IBRI TOWN, AL NAHDA MAIN ROAD<br/>
                                            <h6>GMC</h6>
                                            +968 94291472<br/>
                                            +968 25692287<br/>
                                            <h6>SUZUKI</h6>
                                            +968 98160081<br/>
                                            +968 95349302
                                          </div>
                                        </Popup>
                                      )}
                                       
                                      {showNizwa && (
                                        <Popup
                                          coordinates={[57.5332707,22.9019717]}
                                          anchor="top"
                                        >
                                          <div onClick={() => toggleNizwa(false)} style={{textAlign: 'center',marginTop: -8,marginBottom:8,color:"Red",fontSize: 16,fontWeight: 'bold'}}>X</div>
                                          <div style={{marginTop: -6,}}>SATURDAY – THURSDAY : 8:30AM-1PM | 4PM-8PM<br/>
                                            SHOWROOM ROAD, NEAR OMAN OIL PETROL PUMP<br/>
                                            <h6>GMC</h6>
                                            +968 95548386<br/>
                                            +968 25413082<br/>
                                            <h6>SUZUKI</h6>
                                            +968 95755468<br/>
                                            +968 25413082<br/>
                                          </div>
                                        </Popup>
                                      )}
                                      
                                      {showSalah1 && (
                                        <Popup
                                          coordinates={[54.0474039,17.0181901]}
                                          anchor="top"
                                        >
                                          <div onClick={() => toggleSalah1(false)} style={{textAlign: 'center',marginTop: -8,marginBottom:8,color:"Red",fontSize: 16,fontWeight: 'bold'}}>X</div>
                                          <div style={{marginTop: -6,}}>SATURDAY – THURSDAY : 8:30AM-1PM | 4PM-8PM<br/>
                                            PLOT # 80 NEAR ZAINAB MOSQUE, AWQAD INDUSTRIAL AREA<br/>
                                            <h6>GMC</h6>
                                            +968 94054347<br/>
                                            +968 23211028
                                          </div>
                                        </Popup>
                                      )}
                                               
                                      {showSohar && (
                                        <Popup
                                          coordinates={[56.7483556,24.3218842]}
                                          anchor="top"
                                        >
                                          <div onClick={() => toggleSohar(false)} style={{textAlign: 'center',marginTop: -8,marginBottom:8,color:"Red",fontSize: 16,fontWeight: 'bold'}}>X</div>
                                          <div style={{marginTop: -6,}}>SATURDAY – THURSDAY : 8:30AM-1PM | 4PM-8PM<br/>
                                            BLDG. NUMBER: 289, PLOT NUMBER: 17 AL GHAIL RD, NEAR R&B AND SHELL PETROL PUMP<br/>
                                            <h6>GMC</h6>
                                            +968 95658473<br/>
                                            +968 26840379<br/>
                                            <h6>Suzuki</h6>
                                            +968 94291465<br/>
                                            +968 26840379
                                          </div>
                                        </Popup>
                                      )}
                                      
                                      {showSur && (
                                        <Popup
                                          coordinates={[59.492794,22.5611129]}
                                          anchor="top"
                                        >
                                          <div onClick={() => toggleSur(false)} style={{textAlign: 'center',marginTop: -8,marginBottom:8,color:"Red",fontSize: 16,fontWeight: 'bold'}}>X</div>
                                          <div style={{marginTop: -6,}}>SATURDAY – THURSDAY : 8:30AM-1PM | 4PM-8PM<br/>
                                            BILAD<br/>
                                            <h6>GMC</h6>
                                            +968 99224722<br/>
                                            +968 25541797<br/>
                                            <h6>Suzuki</h6>
                                            +968 99224722<br/>
                                            +968 25541797
                                          </div>
                                        </Popup>
                                      )}
                                      
                                      {showMabela && (
                                        <Popup
                                          coordinates={[58.0984508,23.6597786]}
                                          anchor="top"
                                        >
                                          <div onClick={() => toggleMabela(false)} style={{textAlign: 'center',marginTop: -8,marginBottom:8,color:"Red",fontSize: 16,fontWeight: 'bold'}}>X</div>
                                          <div style={{marginTop: -6,}}>SUNDAY – THURSDAY : 8:00AM-1PM | 3:30PM-7PM<br/>SATURDAY: 8:00AM-1PM (MABELLA CLOSED)<br/>
                                            BUILDING # 11595, WAY # 7768
                                            <h6>Service</h6>
                                            +968 95349249<br/>
                                            <h6>Parts</h6>
                                            +968 94761716<br/>
                                            +968 24450161
                                          </div>
                                        </Popup>
                                      )}
                                      
                                      
                                                          
                                        <Marker
                                          coordinates={[58.4247957,23.5913749]}
                                          
                                        >
                                          <img
                                            onClick={
                                            () => {
                                            toggleGhubra(true)
                                            toggleIbri(false)
                                           toggleWataya(false)
                                           toggleNizwa(false)
                                           toggleSalah1(false)
                                           toggleSohar(false)
                                           toggleSur(false)
                                           toggleMabela(false) 
                                            }
                                            }
                                            style={{ height: 24, width: 24 }}
                                            src="https://moosagroup.com/frontend/public/images/mapicon.png"
                                          />
                                        </Marker>
                                
                                        <Marker
                                          coordinates={[58.5192137, 23.6005173]}
                                           
                                        >
                                          <img
                                            onClick={() => {
                                            toggleWataya(true)
                                            toggleIbri(false)
                                           toggleGhubra(false)
                                           toggleNizwa(false)
                                           toggleSalah1(false)
                                           toggleSohar(false)
                                           toggleSur(false)
                                           toggleMabela(false)    
                                            }    
                                            }
                                            style={{ height: 24, width: 24 }}
                                            src="https://moosagroup.com/frontend/public/images/mapicon.png"
                                          />
                                        </Marker>
                                        
                                        <Marker
                                          coordinates={[56.4976005,23.2188186]}
                                        >
                                          <img
                                            onClick={() => {
                                            toggleIbri(true)
                                             toggleGhubra(false)
                                           toggleWataya(false)
                                           toggleNizwa(false)
                                           toggleSalah1(false)
                                           toggleSohar(false)
                                           toggleSur(false)
                                           toggleMabela(false) 
                                            }
                                            }
                                            style={{ height: 24, width: 24 }}
                                            src="https://moosagroup.com/frontend/public/images/mapicon.png"
                                          />
                                        </Marker>
                                        
                                        <Marker
                                         coordinates={[57.5332707,22.9019717]}
                                           
                                        >
                                          <img
                                            onClick={() => { 
                                            toggleNizwa(true)
                                             toggleIbri(false)
                                           toggleWataya(false)
                                           toggleGhubra(false)
                                           toggleSalah1(false)
                                           toggleSohar(false)
                                           toggleSur(false)
                                           toggleMabela(false) 
                                                
                                            }}
                                            style={{ height: 24, width: 24 }}
                                            src="https://moosagroup.com/frontend/public/images/mapicon.png"
                                          />
                                        </Marker>
                                        
                                        <Marker
                                          coordinates={[54.0474039,17.0181901]}
                                           
                                        >
                                          <img
                                            onClick={() => { 
                                            toggleSalah1(true)
                                               toggleIbri(false)
                                           toggleWataya(false)
                                           toggleNizwa(false)
                                           toggleGhubra(false)
                                           toggleSohar(false)
                                           toggleSur(false)
                                           toggleMabela(false)
                                            }
                                            }
                                            style={{ height: 24, width: 24 }}
                                            src="https://moosagroup.com/frontend/public/images/mapicon.png"
                                          />
                                        </Marker>
                                        
                                        <Marker
                                          coordinates={[56.7483556,24.3218842]}
                                        >
                                          <img
                                            onClick={() => {
                                            toggleSohar(true)
                                            toggleIbri(false)
                                           toggleWataya(false)
                                           toggleNizwa(false)
                                           toggleSalah1(false)
                                           toggleGhubra(false)
                                           toggleSur(false)
                                           toggleMabela(false) 
                                            }
                                            }
                                            style={{ height: 24, width: 24 }}
                                            src="https://moosagroup.com/frontend/public/images/mapicon.png"
                                          />
                                        </Marker>
                                        
                                        <Marker
                                          coordinates={[59.492794,22.5611129]}
                                           
                                        >
                                          <img
                                            onClick={() =>{ 
                                            toggleSur(true)
                                            toggleIbri(false)
                                           toggleWataya(false)
                                           toggleNizwa(false)
                                           toggleSalah1(false)
                                           toggleSohar(false)
                                           toggleGhubra(false)
                                           toggleMabela(false) 
                                            }}
                                            style={{ height: 24, width: 24 }}
                                            src="https://moosagroup.com/frontend/public/images/mapicon.png"
                                          />
                                        </Marker>
                                        
                                        <Marker
                                          coordinates={[58.0984508,23.6597786]}
                                        >
                                          <img
                                            onClick={() => { 
                                            toggleMabela(true)
                                             toggleIbri(false)
                                           toggleWataya(false)
                                           toggleNizwa(false)
                                           toggleSalah1(false)
                                           toggleSohar(false)
                                           toggleSur(false)
                                           toggleGhubra(false) 
                                            }
                                            }
                                            style={{ height: 24, width: 24 }}
                                            src="https://moosagroup.com/frontend/public/images/mapicon.png"
                                          />
                                        </Marker>
                                      </Map>
                                    
                                       </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>   
        </>
 )
}

export default OurNetwork