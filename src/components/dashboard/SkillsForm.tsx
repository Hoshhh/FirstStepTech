'use client'
import React, { FormEventHandler, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { skillsSchema } from '@/lib/validations/skills'
import { zodResolver } from "@hookform/resolvers/zod"
import { DevTool } from "@hookform/devtools"
import { useForm, useFieldArray } from 'react-hook-form'

import * as z from 'zod'

type FormData = {
  skills: {
    skill: string
  }[]
}

export default function SkillsForm({ id }: { id: string }) {
  const inputStyle = "my-2 p-2 border border-slate-300 rounded w-full";
  const [isAdding, setIsAdding] = useState(false);

  const form = useForm<FormData>({
    defaultValues: {
      skills: [{ skill: '' }]
    }
  })

  const { register, control, handleSubmit, formState } = form
  const { errors } = formState

  const { fields, append, remove } = useFieldArray({
    name: 'skills',
    control
  })

  return (
    <div>
      <form className="mt-4 flex flex-col w-full h-full px-8">
        <div className='py-2'>
          <p className='text-xs text-slate-400 p-2 text-center'>Click skills to remove them</p>
        </div>
        <div className='py-2'>
          <label> List of skills</label>
          <div>
            {fields.map((field, index) => {
              return (
                <div>
                  <input 
                    type="text" 
                    {...register(`skills.${index}.skill` as const)}
                  />
                  {
                    index > 0 && (
                      <button type='button' onClick={() => remove(index)}>Remove</button>
                    )
                  }
                </div>
              )
            })}
            <button type='button' onClick={() => append({ skill: "" })}>Add skill</button>
          </div>
        </div>
        <div className='flex flex-col h-full sm:items-end'>
          <button
            type='submit'
            className="p-2 pl-4 pr-4 sm:mb-2 text-sm uppercase rounded-full text-slate-100 bg-green-700 w-3/4 sm:w-2/6"
          >
              Save Changes
          </button>
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
}