'use client'
import React from 'react'
import CBtnBack from '@/app/components/atoms/CBtnBack'
import Banner from '@/app/components/organisme/banner'
import CAbout from '@/app/components/organisme/CAbout'
import Interest from '@/app/components/organisme/Interest'
import { useZustandLogin } from '@/app/zustand/store'

function Page() {
  const {dataLogin} = useZustandLogin()  

  return (
    <div className='min-h-screen p-2'>
        <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl text-white">
                <CBtnBack label="Example@gmail.com"/>
                <div className='flex flex-col gap-5'>
                    <Banner data={dataLogin}/>
                    <CAbout data={dataLogin}/>
                    <Interest data={dataLogin}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page