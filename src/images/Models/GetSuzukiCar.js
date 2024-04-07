import { useState, useEffect,useCallback } from 'react'
// import { SuzukiApi } from '../config/api';
// import { callApi } from '../services/ApiService';
// import { defaultHeader } from '../services/CommonFunction';
import { SuzukiApi } from '../../config/api';
import { defaultHeader } from '../../services/CommonFunction';
import { callApi } from '../../services/ApiService';
export default function GetSuzukiCar()
{
    const [cars,setCars] = useState([]);

    const fetchCarOfSuzuki = useCallback(async () =>{
        await callApi(SuzukiApi.getCarsOfSuzuki.method, SuzukiApi.getCarsOfSuzuki.url, null, null, defaultHeader()).then((res) => {
            const payload = res?.data?.data;
            if (Array.isArray(payload) && payload.length > 0) {
                setCars(payload);
            }
        }).catch((err) => {
            console.log(err)
        })
    },[]);
    useEffect(() => {
        fetchCarOfSuzuki();
    }, [fetchCarOfSuzuki]);
    

    return [cars,setCars];
}