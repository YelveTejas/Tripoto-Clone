import React from 'react'
import axios from 'axios';

export const Loginuser=({email,password})=>{
    if(!email || !password){
        return Promise.reject('Email or Password is Missing')
    }

    const config={
        method:'post',
        data:{
            email,
            password
        },
        url:'https://reqres.in/api/login'

    };
    return axios(config)
}