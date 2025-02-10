'use client'

import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

function CBtnBack(props) {
    const route = useRouter()
    const {label, actionLabel, action} = props
  return (
    <div className='flex items-center justify-between pt-3 pb-5'>
        <div className='flex items-center h-fit cursor-pointer z-20' onClick={()=>route.back()}>
            <ChevronLeft className="h-6 w-6"/>
            <span className="text-lg">Back</span>
        </div>
        {
            label &&
            <h1 className="text-lg font-medium absolute left-0 right-0 top-5 w-full h-fit text-center z-10">{label}</h1>
        }
        {
            actionLabel &&
            <div className='flex items-center h-fit cursor-pointer z-20' onClick={action}>
                <span className="text-xl font-medium text-[#4599DB]">{actionLabel}</span>
            </div>
        }
    </div>
  )
}

export default CBtnBack