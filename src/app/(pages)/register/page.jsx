'use client'

import React, { useState } from 'react'
import CInput from '@/app/components/atoms/CInput'
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useForm } from 'react-hook-form'
import { useApiRegister } from '@/app/consumApi'
import { useRouter } from 'next/navigation'
import CBtnBack from '@/app/components/atoms/CBtnBack'

function Page() {
    const route = useRouter()
    const {postApiRegister} = useApiRegister()

    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)

    const {
      register,
      handleSubmit,
      formState:{errors},
      watch,
    } = useForm({
      defaultValues:{
        email: "",
        userName: "",
        password: "",
        confirmPassword: ""
      }
    })
  
    const handleRegister = async(data) => {
      let action = await postApiRegister({
        email: data.email,
        username: data.userName,
        password: data.password
      }) 

      if (action.status == 201 || action.status == 200) {
        route.push('/register/success');
      }
      
    }
    

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#09141A] to-[#1F4247] text-white p-6">
      <div className='max-w-2xl mx-auto'>
        <CBtnBack/>

        <div>
        <h1 className="text-4xl font-bold mb-8">Register</h1>

        <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
            <div className="space-y-4">
            <div>
              <CInput
                  type="email"
                  register={register("email", {required:"Email is required"})}
                  placeholder="Enter Email"
              />
              <small className="text-[12px] text-red-600 italic">{errors?.email?.message}</small>
            </div>

            <div>
              <CInput
                  type="text"
                  register={register("userName", {required:"UserName is required"})}
                  placeholder="Create Username"
              />
              <small className="text-[12px] text-red-600 italic">{errors?.userName?.message}</small>
            </div>

            <div>
              <div className="relative">
                  <CInput
                  type={showPassword ? "text" : "password"}
                  register={register("password", {
                    required:"Password is required",
                    minLength:{
                      value: 8,
                      message: "password must be longer than or equal to 8 characters"
                    }
                  })}
                  placeholder="Create Password"
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

            <div>
              <div className="relative">
                  <CInput
                  type={showPasswordConfirm ? "text" : "password"}
                  register={register("confirmPassword", {
                    required:"Confirm Password is required",
                    validate: (value) => value == watch("password") || 'password is not the same',
                    minLength:{
                      value: 8,
                      message: "password must be longer than or equal to 8 characters"
                    }
                  })}
                  placeholder="Confirm Password"
                  />
                  <button
                  type="button"
                  onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                  {showPasswordConfirm ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
              </div>
              <small className="text-[12px] text-red-600 italic">{errors?.confirmPassword?.message}</small>
            </div>

            </div>

            <button
            type="submit"
            className="w-full h-14 text-white text-lg font-medium bg-gradient-to-r from-[#5ed1d1] to-[#4c9fff] hover:opacity-90 transition-opacity"
            >
            Register
            </button>
        </form>

        <p className="text-center mt-6 text-gray-300">
            Have an account?{" "}
            <Link href="/login" className="text-[#c6b887] underline cursor-pointer">
            Login here
            </Link>
        </p>
        </div>
      </div>
    </div>
  )
}

export default Page