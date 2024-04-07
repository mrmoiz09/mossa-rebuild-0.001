import Loader from "react-js-loader";

const defaultLoaderProps = {
    type:"bubble-ping",
    bgColor:"#000000",
    title:"Loading...",
    color:"#000000",
    size:50
}



export const printLoader = (defaultLoader=defaultLoaderProps) =>{
    try{
        let obj = defaultLoader;
    // if(customLoader){
    //     if(checkValidObject(customLoader)){
    //      obj = {...defaultLoader,...customLoader};
    //     }
    // }

    return <><Loader type={obj?.type} bgColor={`${obj?.bgColor}`} title={obj?.title} color={obj?.color} size={obj?.size}/></>
    }catch(err){
        console.log(err);
        <>Something went wrong...</>
    }
}