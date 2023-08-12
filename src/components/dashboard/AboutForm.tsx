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
  const { register, handleSubmit } = form

  const onSubmit = async (data: FormData) => {
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
        <div className='flex justify-start text-xs mt-2'>
          <p>{`${(form.watch('about').length)}/1000`}</p>
          {
            form.watch('about').length > 1000 ? <span className='text-xs text-red-500 ml-4'>Too many characters, your changes will not be saved</span> : ""
          }
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