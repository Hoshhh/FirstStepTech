'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import * as z from 'zod'
import { skillsSchema } from '@/lib/validations/skills';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type FormData = z.infer<typeof skillsSchema>

export default function SkillsForm() {
  const inputStyle = "my-2 p-2 border border-slate-300 rounded w-full";

  return (
    <form className="mt-4 flex flex-col w-full h-full px-8">
      <div className='lg:grid lg:grid-cols-4 lg:gap-4 flex-col'>
        <div className='col-span-2'>
          <input type="text" className={inputStyle} placeholder='Skill 1' />
          <input type="text" className={inputStyle} placeholder='Skill 2' />
          <input type="text" className={inputStyle} placeholder='Skill 3' />
        </div>
        <div className='col-span-2'>
          <input type="text" className={inputStyle} placeholder='Skill 4' />
          <input type="text" className={inputStyle} placeholder='Skill 5' />
          <input type="text" className={inputStyle} placeholder='Skill 6' />
        </div>
      </div>
      <div className='flex sm:mb-8 h-full items-end justify-end'>
        <button className="p-2 pl-4 pr-4 sm:mb-2 mt-2 text-sm uppercase rounded-full text-slate-100 bg-sky-700 w-3/4 sm:w-2/6">Save</button>
      </div>
    </form>
  );
}