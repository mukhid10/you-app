'use client'

import axios from "axios"
import { useZustandToken } from "../zustand/store"

export const useApiRegister = ()=>{
    const postApiRegister = async (body)=>{
        try {
            const res = await axios.post("https://techtest.youapp.ai/api/register",body)
            return res
        } catch (error) {
            console.log(error);
        }
    }

    return {postApiRegister}
}

export const useApiLogin = ()=>{
    const postApiLogin = async (body)=>{
        try {
            const res = await axios.post("https://techtest.youapp.ai/api/login",body)
            return res
        } catch (error) {
            console.log(error);
        }
    }

    return {postApiLogin}
}

export const useGetProfile = ()=>{

    const getProfile = async (token)=>{
        try {
            const res = await axios.get("https://techtest.youapp.ai/api/getProfile",
                {
                headers:{
                    "x-access-token": token
                }
            })
            return res
        } catch (error) {
            console.log(error);
        }
    }

    return {getProfile}
}

export const useUpdateProfile = ()=>{
    const {dataToken} = useZustandToken()  

    const updateProfile = async (body)=>{
        try {
            const res = await axios.put("https://techtest.youapp.ai/api/updateProfile",
                body,
                {
                headers:{
                    "x-access-token": dataToken
                }
            })
            return res
        } catch (error) {
            console.log(error);
        }
    }

    return {updateProfile}
}