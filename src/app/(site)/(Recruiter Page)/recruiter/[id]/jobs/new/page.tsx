import JobForm from '@/components/recruiter/JobForm'
import Link from 'next/link'
import React from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai"

export default function SkillsModal() {
    const inputStyle = "my-2 p-2 border border-slate-300 rounded w-full md:w-3/4";

    return (
    <div className='flex justify-center w-full sm:w-3/4 mt-8 mb-auto'>
        <div className='w-5/6 lg:w-5/6 h-auto rounded-xl flex flex-col p-4 mb-4'>
            <h2 className='text-center'>New Job Listing</h2>
            <div className='mt-4'>
                <div className='flex flex-col mb-2'>
                    <label className='font-bold'>Position</label>
                    <select id="position" className={inputStyle}>
                        <option value="">-- Select Job Position --</option>
                        <option value="Frontend Developer">Frontend Developer</option>
                        <option value="Backend Developer">Backend Developer</option>
                        <option value="Fullstack Developer">Fullstack Developer</option>
                    </select>
                </div>

                <div className='flex flex-col mb-2'>
                    <label className='font-bold'>Company</label>
                    <input type="text" className={inputStyle} placeholder='Your Company' />
                </div>

                <div className='flex flex-col mb-2'>
                    <label className='font-bold'>Top 3 Skills</label>
                    <input type="text" className={inputStyle} placeholder='Skill 1' />
                    <input type="text" className={inputStyle} placeholder='Skill 2' />
                    <input type="text" className={inputStyle} placeholder='Skill 3' />
                </div>

                <div className='flex flex-col mb-2'>
                    <label className='font-bold'>Workplace</label>
                    <select id="position" className={inputStyle}>
                        <option value="">-- Select Remote/On-site/Hybrid --</option>
                        <option value="Remote">Remote</option>
                        <option value="On-site">On-site</option>
                        <option value="Hybrid">Hybrid</option>
                    </select>
                </div>

                <div className='flex flex-col mb-2'>
                    <label className='font-bold'>Location (Optional)</label>
                    <input type="text" className={inputStyle} placeholder='Location' />
                </div>

                <div className='flex flex-col'>
                    <button className="p-2 px-4 mt-2 mb-4 text-sm text-center uppercase rounded-full text-slate-100 bg-sky-700 w-3/4 md:w-2/6">Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}