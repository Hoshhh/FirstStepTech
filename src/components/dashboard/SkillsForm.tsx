'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import * as z from 'zod'
import { skillsSchema } from '@/lib/validations/skills';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type FormData = z.infer<typeof skillsSchema>

export default function SkillsForm({ id, skills }: { id: string, skills: string }) {
  const inputStyle = "my-2 p-2 border border-slate-300 rounded w-full";
  const userSkills = JSON.parse(skills)
  //const defaultSkills = userSkills || ["","","","","",""]

  const form = useForm<FormData>({
    defaultValues: {
      skills: {
        skill1: userSkills[0],
        skill2: userSkills[1],
        skill3: userSkills[2],
        skill4: userSkills[3],
        skill5: userSkills[4],
        skill6: userSkills[5],
      }
    },
    resolver: zodResolver(skillsSchema)
  })

  const router = useRouter()
  const { register, control, handleSubmit, formState } = form

  const onSubmit = async (data: FormData) => {
    console.log('\n ---Form submitted!--- \n', (data.skills))

    await fetch(`/api/user/${id}/skills`, {
      method: 'PATCH',                                                              
      body: JSON.stringify({
        skills: {
          skill1: data.skills.skill1,
          skill2: data.skills.skill2,
          skill3: data.skills.skill3,
          skill4: data.skills.skill4,
          skill5: data.skills.skill5,
          skill6: data.skills.skill6,
        }
      })                          
    })

    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 flex flex-col w-full h-full px-8">
      <div className='lg:grid lg:grid-cols-4 lg:gap-4 flex-col'>
        <div className='col-span-2'>
          <input type="text" className={inputStyle} placeholder='Skill 1' {...register("skills.skill1")} />
          <input type="text" className={inputStyle} placeholder='Skill 2' {...register("skills.skill2")} />
          <input type="text" className={inputStyle} placeholder='Skill 3' {...register("skills.skill3")} />
        </div>
        <div className='col-span-2'>
          <input type="text" className={inputStyle} placeholder='Skill 4' {...register("skills.skill4")} />
          <input type="text" className={inputStyle} placeholder='Skill 5' {...register("skills.skill5")} />
          <input type="text" className={inputStyle} placeholder='Skill 6' {...register("skills.skill6")} />
        </div>
      </div>
      <div className='flex sm:mb-8 h-full items-end justify-end'>
        <button className="p-2 pl-4 pr-4 sm:mb-2 mt-2 text-sm uppercase rounded-full text-slate-100 bg-sky-700 w-3/4 sm:w-2/6">Save</button>
      </div>
    </form>
  );
}