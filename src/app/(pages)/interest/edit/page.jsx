"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"
import CBtnBack from "@/app/components/atoms/CBtnBack"
import Csuccess from "@/app/components/organisme/Csuccess"
import { useGetProfile, useUpdateProfile } from "@/app/consumApi"
import { useZustandLogin, useZustandToken } from "@/app/zustand/store"

function InterestSelector() {
  const {updateProfile} = useUpdateProfile()
  const {getProfile} = useGetProfile()

  const {dispatchLogin} = useZustandLogin()
  const {dataLogin} = useZustandLogin()  
  const {dataToken} = useZustandToken()  

  const [interests, setInterests] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [success, setSuccess] = useState(false)

  useEffect(()=>{
    if (dataLogin?.interests) {
      setInterests(dataLogin?.interests)
    }
  },[])

  const handleAddInterest = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      setInterests([...interests, inputValue.trim()])
      setInputValue("")
    }
  }

  const removeInterest = (interest) => {
    setInterests(interests.filter((i) => i !== interest))
  }

  const handleEdit = async()=>{

    let act = await updateProfile({
      interests: interests
    })
    
    if (act?.status == 200) {     
        let a = await getProfile(dataToken)
        dispatchLogin(a?.data?.data)  
        setSuccess(true)
    }
}

if (success) {
    return(
        <div className='flex justify-center items-center'>
            <Csuccess text="Update your interst" path="/about"/>
        </div>
    )
}

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#09141A] to-[#1F4247] text-white p-4">
        <div className='max-w-2xl mx-auto'>
            {/* Header */}
            <CBtnBack actionLabel="Save" action={handleEdit}/>

            {/* Content */}
            <div className="space-y-4 mt-4">
                <div className="space-y-1">
                <p className="text-xl text-[#c6b887]">Tell everyone about yourself</p>
                <h1 className="text-3xl font-semibold">What interest you?</h1>
                </div>

                <div className="space-y-4 bg-white/10 border-0 placeholder:text-gray-400 p-4 rounded-lg">
                {
                    interests.length !== 0 &&
                    <div className="flex flex-wrap gap-2">
                    {interests.map((interest) => (
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
                    </div>
                }

                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleAddInterest}
                        className=" text-white w-full h-10 bg-transparent border-none outline-none"
                        placeholder="Enter your interests..."
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default InterestSelector
