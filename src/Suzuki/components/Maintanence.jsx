import React, { useState, useEffect, useCallback, memo } from 'react'
import { CommonApi, HomeApi } from '../../config/api';
import { defaultHeader, toastError, toastSuccess } from '../../services/CommonFunction';
import { urls } from '../../config/constants';
import { callApi } from '../../services/ApiService';
import { commonRoutes, HomeRoutes, SuzukiRoutes } from '../../config/RouteConfig';

const Maintanence = () => {
    const [data1,setData1] = useState([]);

   const fetchData1 = useCallback(async ()=>{
    try
    {
        const res = await callApi(CommonApi.getMaintenance.method,CommonApi.getMaintenance.url,null,null,defaultHeader());

        if(!res?.data?.error)
        {
            const payload = res?.data?.data;
            console.log(payload);
            if(Array.isArray(payload) && payload?.length>0){
                setData1(payload);
            }
        }
    }
    catch(err)
    {
        console.log(err);
    }
   },[]);
  
  useEffect(() => {
      fetchData1();
    
  }, []);
  return (
        <section className="moosa_connect--block pb-5"  style={{paddingTop:"205px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="page__title dark-line mb-5">
                            <h2 className="h6 mb-0">Maintenance</h2>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <ul id="tabs" className="nav nav-tabs mb-3 border-0" role="tablist">
                            <li className="nav-item">
                                <a id="tab-A" href="#pane-A" className="nav-link active" data-toggle="tab" role="tab">Maintenance</a>
                            </li>
                            <li className="nav-item">
                                <a id="tab-B" href="#pane-B" className="nav-link" data-toggle="tab" role="tab">Cost of Maintenance</a>
                            </li>
                            {/*<li className="nav-item">
                                <a id="tab-C" href="#pane-C" className="nav-link" data-toggle="tab" role="tab">FAQ</a>
                            </li>*/}
                        </ul>                        
                    
                        <div id="content" className="tab-content" role="tablist">
                            <div id="pane-A" className="card tab-pane fade show active" role="tabpanel" aria-labelledby="tab-A">
                                <div className="card-header bg-white" role="tab" id="heading-C">
                                {data1.map((d,i)=>
                                  (d?.type=='1')?
                                  (
                                    <span  dangerouslySetInnerHTML={{ __html: d?.description }}></span>
                                    ):null)}
                                    
                                </div>
                                
                            </div>
                    
                            <div id="pane-B" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-B">
                                <div className="card-header bg-white" role="tab" id="heading-B">
                                {data1.map((d,i)=>
                                  (d?.type=='2')?
                                  (
                                    <span  dangerouslySetInnerHTML={{ __html: d?.description }}></span>
                                    ):null)}
                                    
                                       
                                </div>
                               
                            </div>
                    
                            <div id="pane-C" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-C">
                                
                                {data1.map((d,i)=>
                                  (d?.type=='3')?
                                  (
                                    <>
                                <div className="card-header" role="tab" id="heading-A">
                                    <h5 className="mb-0">
                                        <a data-toggle="collapse" href={`#collapse-${d?.id}`} aria-expanded="false" aria-controls="collapse-A">
                                           {d?.title}
                                        </a>
                                    </h5>
                                </div>
                                <div id={`collapse-${d?.id}`} className="collapse hide" data-parent="#content" role="tabpanel" aria-labelledby="heading-A">
                                    <div className="card-body">
                                        {d?.description}
                                    </div>
                                </div>
                                </>):null)}
                                
                                
                            </div>
                        </div>
                    </div>                    
                </div>                
            </div>
        </section>    
    )
}

export default Maintanence