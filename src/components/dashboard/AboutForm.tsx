'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import * as z from 'zod'
import { aboutSchema } from '@/lib/validations/about';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type FormData = z.infer<typeof aboutSchema>

export default function AboutForm({id, about}: {id: string, about: string}) {
  const userAbout = about
  const form = useForm<FormData>({
    defaultValues: {
      about: userAbout
    },
    resolver: zodResolver(aboutSchema)
  })

  const router = useRouter()
  const { register, control, handleSubmit, formState } = form

  const onSubmit = async (data: FormData) => {
    console.log('\n ---Form submitted!--- \n', data.about)
    
    await fetch(`/api/user/${id}/about`, {
      method: 'PATCH',                                                              
      body: JSON.stringify({
        about: data.about
      })                          
    })

    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mt-4 flex flex-col w-full md:w-3/4'>
        <textarea  
          className='rounded p-2 text-base text-slate-800 bg-white resize-none w-full h-32 sm:h-48' 
          {...register("about")}
        />
        <div className='flex justify-start text-xs'>
          <p>{`0/1000`}</p>
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
  )
}