import date from 'date-and-time';
import classNames from "classnames"
import moment from 'moment';
import { todayDate } from './DateAndTime';

export const displayError = (message="This field is required",classname="invalid-feedback")=>{
    return (<div className={classname}>{message}</div>)
}

export const formclass = (condition,defaultClass="form-control")=>{
    return classNames(`${defaultClass}`,{"is-invalid":condition})
}

export const checkFile = (filename,extension_arr=["jpg","jpeg","png"])=>{
    try{
        const extension = filename.split(".").pop();
        return extension_arr.includes(extension);
    }catch(err){
        return false;
    }
}

export const isDateInBetween = (_main_date=todayDate(),start_date=todayDate(),end_date=todayDate()) =>{
    try{
        return moment(_main_date).isBetween(start_date,end_date) || moment(_main_date).isSame(start_date) || moment(_main_date).isSame(end_date)
    }catch(err){
        console.log(err);
        return false;
    }
}

export const isDateSameOrAfter = (_main_date=todayDate(),start_date=todayDate()) =>{
    try
    {
        return moment(_main_date).isAfter(start_date) || moment(_main_date).isSame(start_date);
    }
    catch(err)
    {
        console.log(err);
        return false;
    }
}

export const isDateSameOrBefore = (_main_date=todayDate(),end_date=todayDate()) =>{
    try
    {
        return moment(_main_date).isBefore(end_date) || moment(_main_date).isSame(end_date);
    }
    catch(err)
    {
        console.log(err);
        return false;
    }
}

export const unchecked_checkbox = (selector) =>{
    try
    {
        document.querySelector(selector).checked = false;
    }
    catch(err)
    {
        console.log(err);
    }
}