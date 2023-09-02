import React from 'react'

type Job = {
    company: string,
    id: string,
    position: string,
    skills: string,
    location: string | null,
    workplace: string,
    author: string,
}

export default function JobContainer(props: Job) {
    const skills = JSON.parse(props.skills)

  return (
    <div className='w-5/6 lg:w-4/6 h-auto shadow-xl shadow-gray-400 rounded-xl flex flex-col p-4 mb-16'>
        <div className='flex-col justify-between sm:flex sm:flex-row'>
            <h2 className='text-3xl font-semibold'>{props.company}</h2>
            <button className="px-4 py-2 sm:py-0 text-sm rounded-full text-slate-100 bg-sky-700 hover:bg-sky-600 mt-2 sm:mt-0">Applicants (17)</button>
        </div>
        <div className='flex mt-2 pb-4 justify-between text-slate-400 border-b-2'>
            <h5 className='font-normal'>{props.position}</h5>
            <h5 className='font-normal'>8/18/2023</h5>
        </div>
        <div className='mt-4'>
            <h4>Skills</h4>
            <ul className='text-sm'>
                <li>{skills[0]}</li>
                <li>{skills[1]}</li>
                <li>{skills[2]}</li>
            </ul>
        </div>
        <div className='mt-4'>
            <h4>Description</h4>
            <p className='text-sm'>You will work on frontend problems using the React ecosystem. Applicants should be skilled with Javascript, React, and Git.</p>
        </div>
        <div className='mt-4'>
            <h4>Location</h4>
            <p className='text-sm'>{`${props.location} (${props.workplace})`}</p>
        </div>
    </div>
  )
}
