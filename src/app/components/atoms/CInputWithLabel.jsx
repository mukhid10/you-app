import React from 'react'

function CInputWithLabel(props) {
    const {type, placeholder, register, height, weight, label} = props

  return (
    <div className='flex justify-between items-center'>
        <label className='text-gray-400 block mb-2'>{label} :</label>
        <input
        type={type} placeholder={placeholder} 
        {...register}
        className={`flex ${height ? height : 'h-14'} ${weight ? weight : 'w-full'} rounded-md bg-[#2a3b3b] px-4 py-2 text-base ring-offset-background placeholder:text-gray-400 
            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#5ed1d1] focus-visible:ring-offset-1 disabled:cursor-not-allowed 
            disabled:opacity-50 text-white border-none`}
        />
    </div>
  )
}

export default CInputWithLabel