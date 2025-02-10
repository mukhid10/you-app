'use client'

import { CheckIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

function page() {
    const route = useRouter()

    useEffect(() => {
        const timer = setTimeout(() => {
        route.push('/login');
        }, 2000);
        return () => clearTimeout(timer);
    }, [])

  return (
    <div className='w-screen h-screen p-5 flex flex-col justify-center items-center'>
        <div className='w-72 h-72 rounded-full bg-green-500 flex justify-center items-center p-8'>
            <CheckIcon className='w-full h-full'/>
        </div>
        <div className="bg-green-200 px-6 py-4 my-4 rounded-md text-lg flex items-center mx-auto max-w-lg">
            <svg viewBox="0 0 24 24" className="text-green-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
                <path fill="currentColor"
                    d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                </path>
            </svg>
            <span className="text-green-800">Register successfully,
                <Link href="/login" className="text-[#bea23b] underline cursor-pointer ml-3">
                Login.
                </Link>
            </span>
        </div>
    </div>
  )
}

export default page