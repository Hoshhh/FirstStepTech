'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import * as z from 'zod'
import { availabilitySchema } from '@/lib/validations/availability';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type FormData = z.infer<typeof availabilitySchema>

export default function AvailabilityForm({ id, avail }: {id: string, avail: string }) {
    const inputStyle = "my-2 p-2 border border-slate-300 rounded w-full";
    const userAvailability = JSON.parse(avail)
    const defaultAvailability = userAvailability || ""

    const form = useForm<FormData>({
        defaultValues: {
            availability: defaultAvailability
        },
        resolver: zodResolver(availabilitySchema)
    })

    const router = useRouter()
     const { register, handleSubmit } = form

    const onSubmit = async (data: FormData) => {
        console.log('\n ---Form submitted!--- \n', JSON.stringify(data.availability))
        
        await fetch(`/api/user/${id}/availability`, {
            method: 'PATCH',                                                              
            body: JSON.stringify({
                availability: JSON.stringify(data.availability)
            })                          
        })

        router.refresh()
    }
 
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mt-4 flex flex-col w-full md:w-3/4'>
        <div className='py-2'>
            <p className='pt-2 text-xs sm:text-base'>Are you looking for a part time or full time position?</p>
            <select id="work" className={inputStyle} {...register("availability.0")}>
                <option value="">-- Select Employement Preference --</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="I am willing to work full time or part time">Either/Both</option>
            </select>

            <p className='pt-2 text-xs sm:text-base'>Are you looking for remote or on-site work?</p>
            <select id="location" className={inputStyle} {...register("availability.1")}>
                <option value="">-- Select Location Preference --</option>
                <option value="Remote Only">Remote Only</option>
                <option value="On-site Only">On-site Only</option>
                <option value="I am willing to work remotely or on-site">Either/Both</option>
            </select>

            <p className='pt-2 text-xs sm:text-base'>Are you willing to relocate?</p>
            <select id="relocate" className={inputStyle} {...register("availability.2")}>
                <option value="">-- Select Relocation Preference --</option>
                <option value="I am willing to relocate">Yes</option>
                <option value="I am not willing to relocate">No</option>
            </select>
        </div>
        <div className='flex sm:mb-8 h-full items-end justify-end'>
            <button className="p-2 pl-4 pr-4 sm:mb-2 mt-2 text-sm uppercase rounded-full text-slate-100 bg-sky-700 w-3/4 sm:w-2/6">Save</button>
        </div>
    </form>
  )
}