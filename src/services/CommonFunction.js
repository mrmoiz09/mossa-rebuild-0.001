import { header_key, rsmessage } from "../config/constants";
import { getToken } from "./AuthService";
import { toast,Toaster } from 'react-hot-toast';

export const checkValidObject = (object) => {
    try{
        return Object.prototype.toString.call(object)==="[object Object]";
    }catch(err){
        console.log(err);
        return false;
    }
}

export const removeUnderScoreAndToUpperCase = (value="")=>{
    try{
        return value.split("_").join(" ").toUpperCase();
    }catch(err){
        console.log(err);
        return ""
    }
}

export const validateJsonString = (jsonString) =>{
    try
    {
        return JSON.parse(jsonString);
    }
    catch(err)
    {
        console.log(jsonString);
        console.log(err);
        return null;
    }
}

export const displayFormData = (formdata) =>{
    for(let pair of formdata)
    {
        console.log(pair[0]+"-"+pair[1]);
    }
}

export const previewToaster = (newObj) =>{
    let obj = {position:"top-right",reverseOrder:false};
    if(checkValidObject(newObj)){
        obj = {...obj,newObj};   
    }

    return (<Toaster
        position={obj?.position}
        reverseOrder={obj?.reverseOrder}
    />);
}

//multipart/form-data
export const AuthHeaderWithMultiPart =(additional_header_object=null) =>{
    try
    {
        const header =  {[header_key]:`bearer ${getToken()}`, 'Content-Type':"multipart/form-data"}; // Change here
        if(checkValidObject(additional_header_object))
        {
            const new_header = {...header,...additional_header_object};
            return new_header;
        }
        else
        {
            return header;
        }
    }
    catch(err)
    {
        console.log(err);
        return "";
    }
}

export const defaultHeader = () =>{
    const obj =  {['Content-Type']:'application/json'};
    return obj;
}

export const multipartHeader = () =>{
    return {['Content-Type']:'multipart/form-data'};
}

export const AuthHeaderWithMultiPart =(additional_header_object=null) =>{
    try
    {
        const header =  {[header_key]:`bearer ${getToken()}`,['Content-Type']:"multipart/form-data"};
        if(checkValidObject(additional_header_object))
        {
            const new_header = {...header,...additional_header_object};
            return new_header;
        }
        else
        {
            return header;
        }
    }
    catch(err)
    {
        console.log(err);
        return "";
    }
}

export const toastSuccess = (serverMessage,clientMessage=rsmessage.success)=>{
    toast.success(serverMessage ? serverMessage : clientMessage);
}

export const toastError = (serverMessage,clientMessage=rsmessage.failed)=>{
    toast.error(serverMessage ? serverMessage : clientMessage);
}

export const mergeParamsWithUrls = (url,values) =>{
    try
    {
        let finalUrl = url;
        if(Array.isArray(values) && values.length>0)
        {
            let s = "";
            for(let v of values)
            {
                s = `${s}/${v}`;
            }
            finalUrl = `${finalUrl}${s}`;
        }
        else
        {
            if(values!=null)
            {
                finalUrl = `${finalUrl}/${values}`;
            }
            
        }
        return finalUrl;
    }   
    catch(err)
    {
        console.log(err);
        return url;
    }
}