'use client'

import { Edit, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

function Interest(props) {
  const router = useRouter()
  const {data} = props
  
  return (
    <div className='bg-[#0E191F] rounded-2xl p-4 mb-10'>
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-white text-2xl font-semibold">Interest</h1>
                <div
                  className='cursor-pointer w-fit h-fit'
                  onClick={()=>router.push('/interest/edit')}
                >
                  <Edit />
                </div>
            </div>
        </div>
        {
          data?.interests.length && data?.interests.length !== 0 ?
          <div className="flex flex-wrap gap-2">
          {data?.interests.map((interest) => (
              <span
              key={interest}
              className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 rounded-full text-sm"
              >
              {interest}
              <button onClick={() => removeInterest(interest)} className="hover:text-white/80">
                  <X className="h-4 w-4" />
              </button>
              </span>
          ))}
          </div> :
          <div className='mt-5 w-full flex justify-center'>
              <span className='text-center text-gray-400 w-full'>
              Add in your interest to find a better match
              </span>
          </div>
        }
    </div>
  )
}

export default Interest