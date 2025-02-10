'use client'

import React from 'react'
import CBtnBack from '@/app/components/atoms/CBtnBack'
import Banner from '@/app/components/organisme/banner'
import FormAbout from '@/app/components/organisme/FormAbout'
import Interest from '@/app/components/organisme/Interest'
import { useZustandLogin } from '@/app/zustand/store'

function page() {
  const {dataLogin} = useZustandLogin()  

  return (
    <div className="min-h-screen p-2">
        <div className="max-w-2xl mx-auto">
            <CBtnBack label="Example@gmail.com"/>
            <div className="space-y-6">
                <Banner data={dataLogin}/>
                <FormAbout data={dataLogin}/>
                <Interest data={dataLogin}/>
            </div>
        </div>
    </div>
  )
}

export default page