import { useEffect } from "react";
export default function MoveCursorToTop()
{
    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);
}