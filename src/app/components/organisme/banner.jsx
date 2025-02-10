"use client"

import Image from "next/image"

function Banner(props) {
    const {data} = props
    
  return (
    <div className="rounded-2xl text-white">
      <div className="relative">
        <div className="relative h-[300px] w-full rounded-2xl">
        {
            false ?
            <Image
              src={"https://images.unsplash.com/photo-1738830986230-57029d6ef4f8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              alt="Profile banner"
              loader={() => "https://images.unsplash.com/photo-1738830986230-57029d6ef4f8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              fill
              className="object-cover rounded-2xl"
              priority
            /> :
            <div 
            className="w-full h-full bg-[#162329] rounded-2xl"
            ></div>
        }
        </div>

        {/* Profile Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <h2 className="text-2xl font-bold mb-1">{data?.username}</h2>
          <p className="text-gray-200 mb-3">Male</p>

          {/* Badges */}
          <div className="flex gap-3">
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-xl">♍</span>
              <span>{data?.horoscope}</span>
            </div>
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-xl">🐷</span>
              <span>Pig</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner