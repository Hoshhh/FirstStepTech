import JobContainer from '@/components/recruiter/JobContainer'
import Link from 'next/link'
import React from 'react'

export default function page({ params }: {
  params: { id: string }
}) {
  return (
    <div className='w-full sm:w-3/4 mt-16 mb-auto'>
      <div className='text-center'>
        <h2 className='tracking-widest '>Your Job Postings</h2>
      </div>
      <div className='flex flex-col items-center mt-8'>
        <Link href={`/recruiter/${params.id}/jobs/new`} className="p-2 pl-4 pr-4 mt-2 mb-8 text-sm text-center rounded-full text-slate-100 bg-sky-700 w-3/4 sm:w-2/6">Add Job</Link>
        <JobContainer />
      </div>
    </div>
  )
}
