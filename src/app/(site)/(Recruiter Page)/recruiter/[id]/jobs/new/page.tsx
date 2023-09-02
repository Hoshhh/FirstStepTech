'use client'
import { jobFrontSchema } from '@/lib/validations/job';
import Link from 'next/link'
import React from 'react'
import * as z from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation'

type FormData = z.infer<typeof jobFrontSchema>

export default function page({ params }: {
  params: { id: string }
}) {
    const inputStyle = "my-2 p-2 border border-slate-300 rounded w-full md:w-3/4";
    const defaultSkills = ["","",""]

    const form = useForm<FormData>({
        defaultValues: {
            position: "",
            company: "",
            skills: defaultSkills,
            workplace: "",
            location: ""
        },
        resolver: zodResolver(jobFrontSchema)
    })

    const router = useRouter()
    const { register, control, handleSubmit, formState } = form

    const onSubmit = async (data: FormData) => {
        console.log('\n ---Form submitted!--- \n', JSON.stringify(data))

        await fetch(`/api/user/${params.id}/jobs`, {
            method: 'POST',                                                              
            body: JSON.stringify({
                position: data.position,
                company: data.company,
                skills: JSON.stringify(data.skills),
                workplace: data.workplace,
                location: data.location
            })                          
        })

        router.refresh()
    }

    return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex justify-center w-full sm:w-3/4 mt-8 mb-auto'>
        <div className='w-5/6 lg:w-5/6 h-auto rounded-xl flex flex-col p-4 mb-4'>
            <h2 className='text-center'>New Job Listing</h2>
            <div className='mt-4'>
                <div className='flex flex-col mb-2'>
                    <label className='font-bold'>Position</label>
                    <select id="position" className={inputStyle} {...register("position")} >
                        <option value="">-- Select Job Position --</option>
                        <option value="Frontend Developer">Frontend Developer</option>
                        <option value="Backend Developer">Backend Developer</option>
                        <option value="Fullstack Developer">Fullstack Developer</option>
                    </select>
                </div>

                <div className='flex flex-col mb-2'>
                    <label className='font-bold'>Company</label>
                    <input type="text" className={inputStyle} placeholder='Your Company' {...register("company")} />
                </div>

                <div className='flex flex-col mb-2'>
                    <label className='font-bold'>Top 3 Skills</label>
                    <input type="text" className={inputStyle} placeholder='Skill 1' {...register("skills.0")} />
                    <input type="text" className={inputStyle} placeholder='Skill 2' {...register("skills.1")} />
                    <input type="text" className={inputStyle} placeholder='Skill 3' {...register("skills.2")} />
                </div>

                <div className='flex flex-col mb-2'>
                    <label className='font-bold'>Workplace</label>
                    <select id="position" className={inputStyle} {...register("workplace")} >
                        <option value="">-- Select Remote/On-site/Hybrid --</option>
                        <option value="Remote">Remote</option>
                        <option value="On-site">On-site</option>
                        <option value="Hybrid">Hybrid</option>
                    </select>
                </div>

                <div className='flex flex-col mb-2'>
                    <label className='font-bold'>Location (Optional)</label>
                    <input type="text" className={inputStyle} placeholder='Location' {...register("location")} />
                </div>

                <div className='flex flex-col'>
                    <button className="p-2 px-4 mt-2 mb-4 text-sm text-center uppercase rounded-full text-slate-100 bg-sky-700 w-3/4 md:w-2/6">Submit</button>
                </div>
            </div>
        </div>
    </form>
  )
}