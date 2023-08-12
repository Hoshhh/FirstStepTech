'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import * as z from 'zod'
import { linksSchema } from '@/lib/validations/links';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type FormData = z.infer<typeof linksSchema>

export default function LinksForm({ id, links }: { id: string, links: string }) {
  const inputStyle = "my-2 p-2 border border-slate-300 rounded w-full";
  //const userSkills = JSON.parse(skills)

  const form = useForm<FormData>({
    defaultValues: {
      links: ["", "", ""]
    },
    resolver: zodResolver(linksSchema)
  })

  const router = useRouter()
  const { register, control, handleSubmit, formState } = form

  const onSubmit = async (data: FormData) => {
    console.log('\n ---Form submitted!--- \n', JSON.stringify(data.links))
    /*
    await fetch(`/api/user/${id}/skills`, {
      method: 'PATCH',                                                              
      body: JSON.stringify({
        skills: JSON.stringify(data.skills)
      })                          
    })

    router.refresh()*/
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 flex flex-col w-full h-full px-8">
      <div className='lg:grid lg:grid-cols-4 lg:gap-4 flex-col'>
        <div className='col-span-2'>
            <label htmlFor="portfolio">Portfolio</label>
            <input type="text" className={inputStyle} placeholder='Skill 1' id='portfolio' {...register("links.0")} />
            <label htmlFor="github">Github</label>
            <input type="text" className={inputStyle} placeholder='Skill 2' id='github' {...register("links.1")} />
            <label htmlFor="linkedin">LinkedIn</label>
            <input type="text" className={inputStyle} placeholder='Skill 3' id='linkedin' {...register("links.2")} />
        </div>
      </div>
      <div className='flex sm:mb-8 h-full items-end justify-end'>
        <button className="p-2 pl-4 pr-4 sm:mb-2 mt-2 text-sm uppercase rounded-full text-slate-100 bg-sky-700 w-3/4 sm:w-2/6">Save</button>
      </div>
    </form>
  );
}