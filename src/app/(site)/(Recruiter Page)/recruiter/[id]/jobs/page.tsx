import JobContainer from '@/components/recruiter/JobContainer'
import Link from 'next/link'
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

export default async function page({ params }: {
  params: { id: string }
}) {
    const res = await fetch(`http://localhost:3000/api/user/${params.id}/jobs`, {
      method: 'GET',
      cache: 'no-store'
    })

    
    const userJobs = await res.json()
    console.log(userJobs)

  return (
    <div className='w-full sm:w-3/4 mt-16 mb-auto'>
      <div className='text-center'>
        <h2 className='tracking-widest '>Your Job Postings</h2>
      </div>
      <div className='flex flex-col items-center mt-8'>
        <Link href={`/recruiter/${params.id}/jobs/new`} className="p-2 pl-4 pr-4 mt-2 mb-8 text-sm text-center rounded-full text-slate-100 bg-sky-700 w-3/4 sm:w-2/6">Add Job</Link>
        {userJobs.map((job: Job, index: number) => (
          <JobContainer
            key={index}
            company={job.company} 
            id={job.id} 
            position={job.position} 
            skills={job.skills} 
            location={job.location} 
            workplace={job.workplace}
            author={job.author}
          />
        ))
        }
      </div>
    </div>
  )
}
