'use client'

import React, { useState } from 'react'
import CInput from '@/app/components/atoms/CInput'
import { ArrowLeft, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useForm } from 'react-hook-form'
import { useApiLogin, useGetProfile } from '@/app/consumApi'
import { useRouter } from 'next/navigation'
import CBtnBack from '@/app/components/atoms/CBtnBack'
import { useZustandLogin, useZustandToken } from '@/app/zustand/store'

function Page() {
    const route = useRouter()
    const {postApiLogin} = useApiLogin()
    const {getProfile} = useGetProfile()
    const {dispatchLogin} = useZustandLogin()
    const {dispatchToken} = useZustandToken()

    const [showPassword, setShowPassword] = useState(false)
    const [message, setMessage] = useState('')

    const {
      register, 
      handleSubmit,
      formState:{errors}
    } = useForm({
      defaultValues:{
        email:"",
        password:""
      }
    })

    const handleLogin = async(data)=>{
      let action = await postApiLogin({
        email: data.email,
        username: data.email,
        password: data.password
      })

      setMessage(action?.data?.message)

      if (action?.data?.access_token) {
        dispatchToken(action?.data?.access_token)
        let a = await getProfile(action?.data?.access_token)
        dispatchLogin(a?.data?.data)        
        route.push('/about');
      }
    }
  

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#09141A] to-[#1F4247] text-white p-6">
      <div className='max-w-2xl mx-auto'>
          <CBtnBack/>
          
          <div>
          <h1 className="text-4xl font-bold mb-8">Login</h1>

          <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
              <div className="space-y-4">
                <div>
                  <CInput
                      type="email"
                      register={register("email", {required:'email is required'})}
                      placeholder="Enter Username / Email"
                  />
                  <small className="text-[12px] text-red-600 italic">{errors?.email?.message}</small>
                </div>

                <div>
                  <div className="relative">
                      <CInput
                      type={showPassword ? "text" : "password"}
                      register={register("password", {
                        required:'password is required',
                        minLength:{
                          value:8,
                          message:'password must be longer than or equal to 8 characters'
                        }
                      })}
                      placeholder="********"
                      />
                      <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                      >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                  </div>
                  <small className="text-[12px] text-red-600 italic">{errors?.password?.message}</small>
                </div>

              </div>

              <button
              type="submit"
              className="w-full h-14 text-white text-lg font-medium bg-gradient-to-r from-[#5ed1d1] to-[#4c9fff] hover:opacity-90 transition-opacity"
              >
              Login
              </button>
          </form>

          <small className="text-[14px] text-red-600 italic">{message}</small>

          <p className="text-center mt-6 text-gray-300">
              No account?{" "}
              <Link href="/register" className="text-[#c6b887] underline cursor-pointer">
              Register here
              </Link>
          </p>
          </div>
      </div>
    </div>
  )
}

export default Page