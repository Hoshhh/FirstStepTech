'use client'
import { infoSchema } from '@/lib/validations/info'
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { useRouter } from 'next/navigation'

type FormData = z.infer<typeof infoSchema>

export default function NameForm({ id }: {id: string}) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(infoSchema),
    })

    const router = useRouter()

    const onSubmit = async (data:FormData) => {
        await fetch(`/api/user/${id}/info`, {
            method: 'PATCH',
            body: JSON.stringify({
                firstName: data.firstName,
                lastName: data.lastName,
                role: data.role
            })
        })
        router.refresh()
    }

  return (
    <div className='fixed inset-0 bg-slate-800 bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <div className='w-3/4 sm:h-3/4 md:w-2/4 md:h-4/6 bg-slate-100 rounded-xl p-4'>
            <div className='flex flex-col items-center w-full h-full'>
                <h2 className='text-xl sm:text-3xl uppercase'>Enter your name</h2>
                <p className='text-xs text-slate-400 p-2 text-center hidden sm:flex'>To finish account creation, please enter the following information.</p>
                <form onSubmit={handleSubmit(onSubmit)} className='mt-4 flex flex-col w-full md:w-3/4'>
                    <label className='font-bold'>First Name</label>
                    <input  
                    className='my-2 p-2 border border-slate-300 rounded w-full' 
                    placeholder='John'
                    {...register('firstName')}
                    />

                    {errors.firstName && (
                        <span className="px-1 text-xs text-red-600">
                            {errors.firstName.message}
                        </span>
                    )}

                    <label className='font-bold mt-4'>Last Name</label>
                    <input  
                    className='my-2 p-2 border border-slate-300 rounded w-full'
                    placeholder='Smith'
                    {...register('lastName')}
                    />

                    {errors.lastName && (
                        <span className="px-1 text-xs text-red-600">
                            {errors.lastName.message}
                        </span>
                    )}

                    <div className='flex flex-col'>
                        <label className='font-bold mt-4'>Account type</label>
                        <div className='items-center space-x-2 text-lg'>
                            <input 
                                type="radio" 
                                value="DEV" 
                                className='w-4 h-4'
                                {...register('role')}
                            />
                            <label >Developer</label>
                            <input 
                                type="radio" 
                                value="REC" 
                                className='w-4 h-4'
                                {...register('role')}
                            />
                            <label >Recruiter</label>
                        </div>
                    </div>

                    <div className='flex justify-end mt-4'>
                        <button 
                            type='submit'
                            className="p-2 pl-4 pr-4 text-sm uppercase rounded-full text-slate-100 bg-sky-700 mb-8"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}


