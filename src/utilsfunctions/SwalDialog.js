import Swal from "sweetalert2";
import { checkValidObject } from "../services/CommonFunction";
const defaultSwal = {
    title: 'Are you sure?',
    text: "",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  };


export const SwalAlert = (CustomSwal,defaultObj=defaultSwal) =>{
    let obj = defaultObj;
    if(CustomSwal){
       if(checkValidObject(CustomSwal)){
        obj = {...defaultObj,...CustomSwal};
    }
   }

   console.log(obj);

   return new Promise((resolve,reject)=>{
    //result.isConfirmed;
    Swal.fire(obj).then((result)=>{
          resolve(result);
      }).catch((err)=>{
          reject(err);
      })
   })
}