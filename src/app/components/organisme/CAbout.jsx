'use client'

import { Edit } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

function CAbout(props) {
  const router = useRouter()
  const {data} = props

  return (
    <div className='bg-[#0E191F] rounded-2xl p-4'>
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-white text-2xl font-semibold">About</h1>
                <div
                  className='cursor-pointer w-fit h-fit'
                  onClick={()=>router.push('/about/edit')}
                >
                  <Edit />
                </div>
            </div>
        </div>
        {
          data?.name ? 
          <div className='flex flex-col gap-4'>

            <div className='flex gap-2'>
              <label className='text-gray-400'>User Name : </label>
              <div>{data?.username}</div>
            </div>

            <div className='flex gap-2'>
              <label className='text-gray-400'>Name : </label>
              <div>{data?.name}</div>
            </div>

            <div className='flex gap-2'>
              <label className='text-gray-400'>Horoscope : </label>
              <div>{data?.horoscope}</div>
            </div>

            <div className='flex gap-2'>
              <label className='text-gray-400'>Height : </label>
              <div>{data?.height} cm</div>
            </div>

            <div className='flex gap-2'>
              <label className='text-gray-400'>Width : </label>
              <div>{data?.weight} cm</div>
            </div>

          </div> 
          :
          <div className='mt-5 w-full flex justify-center'>
              <span className='text-center text-gray-400 w-full'>
              Add in your your to help others know you better
              </span>
          </div>
        }
    </div>
  )
}

export default CAbout