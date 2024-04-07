import axios from "axios";
import { mergeParamsWithUrls } from "./CommonFunction";


export const callApi = (METHOD,URL,PARAMS,DATA,HEADER)=>
{
    let options = {
        method:METHOD,
        url:URL
    }

    if(DATA!=null)
    {
        options = {...options,data:DATA}
    }

    if(PARAMS!=null)
    {
        options.url = mergeParamsWithUrls(options.url,PARAMS);
    }

    if(HEADER)
    {
        options = {...options,headers:HEADER};
    }

    console.log(options);

    return axios(options).then(response=>response).catch(err=>err);
}