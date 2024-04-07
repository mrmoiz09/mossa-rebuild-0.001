module.exports=
{
    date_time_format:{
        date:"DD-MM-YYYY",
        time:"HH:mm:ss"
    },
    urls:{
        //Don't put extra slash at the last
        baseurl:"https://api.moosagroup.com/api",
        dir_url:"https://api.moosagroup.com/public",
        frontendUrl:"https://www.moosagroup.com/frontend/public"
    },
    siteLogos:{
        suzukiLogo:"https://www.moosagroup.com/frontend/public/images/suzuki-logo-white.png"
    },
    header_key:{
        auth:"Authorization",
    },
    userDataStorage:{
        key:"moosa_user",
    },
    role:{
        admin_key:"admin",
        user_key:"user"
    },
    defaultUserPic:"",
    userFieldCommon:{
        id:"id",
        first_name:"first_name",
        last_name:"last_name",
        gender:"gender",
        fullname:"fullname",
        email:"email",
        profile_pic:"profile_pic"
    },
    rsmessage:{
        success:"Success!",
        failed:"Something went wrong",
        token_expired:"Timed Out"
    },
    validationMsg:{
        invalidPhone:"8 digits phone no.",
        dateAfter:"Invalid date range"
    }

}