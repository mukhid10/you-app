"use client"

import React from 'react'

function CInput(props) {
    const {type, placeholder, height, weight, register} = props

  return (
    <input
      type={type} placeholder={placeholder}
      {...register}
      className={`flex ${height ? height : 'h-14'} ${weight ? weight : 'w-full'} rounded-md bg-[#2a3b3b] px-4 py-2 text-base ring-offset-background placeholder:text-gray-400 
        focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#5ed1d1] focus-visible:ring-offset-1 disabled:cursor-not-allowed 
        disabled:opacity-50 text-white border-none`}
    />
  )
}

export default CInput