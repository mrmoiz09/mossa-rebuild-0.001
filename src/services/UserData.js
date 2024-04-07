import { isExpired,decodeToken } from "react-jwt";
import { defaultUserPic, userFieldCommon } from "../config/constants";
import { getToken } from "./AuthService";


export const getUserObj = () =>{
    try
    {
        return decodeToken(getToken());
    }
    catch(err)
    {
        console.log(err);
        return {};
    }
}

export const getUserId = () =>
{
    try
    {
        return parseInt(decodeToken(getToken())[""]);
    }
    catch(err)
    {
        console.log(err);
        return NaN;
    }   
}

export const getUserFirstName = () =>
{
    try
    {
        return decodeToken(getToken())[`${userFieldCommon.first_name}`];
    }
    catch(err)
    {
        console.log(err);
        return "";

    }
}

export const getUserLastName = () =>
{
    try
    {
        return decodeToken(getToken())[`${userFieldCommon.last_name}`];
    }
    catch(err)
    {
        console.log(err);
        return "";

    }
}

export const getUserFullName = () =>
{
    try
    {
        return decodeToken(getToken())[`${userFieldCommon.fullname}`];
    }
    catch(err)
    {
        console.log(err);
        return "";

    }
}

export const getUserEmail = () =>
{
    try
    {
        return decodeToken(getToken())[`${userFieldCommon.email}`];
    }
    catch(err)
    {
        console.log(err);
        return "";

    }
}

export const getUserProfile= () =>
{
    try
    {
        const profile_pic =  decodeToken(getToken())[`${userFieldCommon.profile_pic}`];
        return profile_pic ? profile_pic : defaultUserPic;
    }
    catch(err)
    {
        console.log(err);
        return defaultUserPic;
    }
}