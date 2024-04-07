import { isExpired } from "react-jwt";
import { userDataStorage } from "../config/constants";

export const saveUserSession = (obj) =>{
    try
    {
        const values = JSON.stringify(obj);
        localStorage.setItem(userDataStorage.key,values);
        return true;
    }
    catch(err)
    {
        console.log(err);
        return false;
    }
}

export const removeUserSession = () => {
    try
    {
        localStorage.removeItem(userDataStorage.key);
    }
    catch(err)
    {
        console.log(err);
    }
}

export const getToken = () =>{
    try
    {
        if(localStorage.getItem(userDataStorage.key))
        {
            const token = JSON.parse(localStorage.getItem(userDataStorage.key))?.token;
            return token ? token : null;
        }
        else
        {
            return null;
        }
    }
    catch(err)
    {
        console.log(err);
        return null;
    }
}

export const isTokenExpired = () =>{
    try
    {
        return isExpired(getToken());
    }
    catch(err)
    {
        console.log(err);
        return false;
    }
}