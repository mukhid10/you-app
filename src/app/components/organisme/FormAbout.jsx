import React, { useEffect, useState } from 'react'
import CInputWithLabel from '../atoms/CInputWithLabel'
import { Plus } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useGetProfile, useUpdateProfile } from '@/app/consumApi'
import { useZustandLogin, useZustandToken } from '@/app/zustand/store'
import Csuccess from './Csuccess'

function FormAbout() {
    const {updateProfile} = useUpdateProfile()
    const {getProfile} = useGetProfile()

    const {dispatchLogin} = useZustandLogin()
    const {dataLogin} = useZustandLogin()  
    const {dataToken} = useZustandToken()  

    const {
        register,
        handleSubmit,
        formState:{errors},
        setValue
    } = useForm({
        defaultValues:{
            name: "",
            gender: "",
            birtday: "",
            horoscope: "",
            height: 0,
            weight: 0,
        }
    })

    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false)

    useEffect(()=>{
        setValue("name", dataLogin?.name)
        setValue("weight", dataLogin?.weight)
        setValue("height", dataLogin?.height)
        setValue("horoscope", dataLogin?.horoscope)
    },[dataLogin])

    const handleImageChange = (e) => {
        console.log('e.target.files[0]', e.target.files[0]);
        
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => setImage(e.target.result);
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleEdit = async(data)=>{

        let act = await updateProfile({
            name: data?.name,
            gender: data?.gender,
            birtday: data?.birtday,
            horoscope: data?.horoscope,
            height: Number(data?.height),
            weight: Number(data?.weight),
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
                <Csuccess text="Update profile success" path="/about"/>
            </div>
        )
    }

  return (
    <div className='bg-[#0E191F] rounded-2xl p-4'>
        <form onSubmit={handleSubmit(handleEdit)}>
            <div className="max-w-2xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-white text-2xl font-semibold">About</h1>
                    <button
                    variant="outline" type='submit'
                    className="bg-transparent text-[#c6b887] hover:text-[#c6b887] hover:bg-[#2a2d2e] border-0"
                    >
                    Save & Update
                    </button>
                </div>
            </div>
            <div className='flex justify-start items-center gap-4 mb-8'>
                <div className='flex gap-3 items-center'>
                    <div className='w-[57px] h-[57px] bg-[#2a3b3b] rounded-2xl flex justify-center items-center relative'>
                    {
                        image ? <img src={image} alt="Profile" className="w-full h-full object-cover rounded-2xl" /> :
                        <>
                            <input type="file" onChange={handleImageChange}
                            className='bg-transparent visible absolute top-0 left-0 w-full h-full opacity-0'
                            />
                            <Plus/>
                        </>
                    }
                    </div>
                    <span>Add Image</span>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <div>
                    <CInputWithLabel height="h-10" weight="w-[60%]" label="Display Name" type="text"
                        register={register("name",{
                            required: "Display Name is required"
                        })}
                    />
                    <small className="text-[12px] text-red-600 italic">{errors?.name?.message}</small>
                </div>

                <div>
                    <div className='flex justify-between items-center'>
                        <label className='text-gray-400 block mb-2'>Gender :</label>
                        <div className="w-[60%]">      
                            <div className="relative">
                                <select 
                                {...register("gender", {required:'Gender is required'})}
                                    className="w-full rounded-md bg-[#2a3b3b] px-4 py-2 text-base ring-offset-background placeholder:text-gray-400 
                                        focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#5ed1d1] focus-visible:ring-offset-1 disabled:cursor-not-allowed 
                                        disabled:opacity-50 text-white border-none cursor-pointer">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <small className="text-[12px] text-red-600 italic">{errors?.gender?.message}</small>
                </div>

                <div>
                    <CInputWithLabel height="h-10" weight="w-[60%]" label="Birtday" type="date"
                        register={register("birtday",{
                            required: "Birtday is required"
                        })}
                    />
                    <small className="text-[12px] text-red-600 italic">{errors?.birtday?.message}</small>
                </div>

                <div>
                    <CInputWithLabel height="h-10" weight="w-[60%]" label="Horoscope" type="text"
                        register={register("horoscope",{
                            required: "Horoscope is required"
                        })}
                    />
                    <small className="text-[12px] text-red-600 italic">{errors?.horoscope?.message}</small>
                </div>

                <div>
                    <CInputWithLabel height="h-10" weight="w-[60%]" label="Height" type="number"
                        register={register("height",{
                            required: "Height is required"
                        })}
                    />
                    <small className="text-[12px] text-red-600 italic">{errors?.height?.message}</small>
                </div>

                <div>
                    <CInputWithLabel height="h-10" weight="w-[60%]" label="Weight" type="number"
                        register={register("weight",{
                            required: "Weight is required"
                        })}
                    />
                    <small className="text-[12px] text-red-600 italic">{errors?.weight?.message}</small>
                </div>
            </div>
        </form>
    </div>
  )
}

export default FormAbout