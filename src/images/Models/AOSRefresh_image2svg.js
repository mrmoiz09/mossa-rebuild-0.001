import { useEffect } from "react";
import AOS from 'aos';
export default function AOSRefresh_image2svg()
{
    useEffect(()=>{
        AOS.init();
        AOS.refresh();
    },[]);
}