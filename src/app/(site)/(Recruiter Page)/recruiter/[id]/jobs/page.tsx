import JobContainer from '@/components/recruiter/JobContainer'
import React from 'react'

export default function page() {
  return (
    <div className='w-full sm:w-3/4 mt-16 mb-auto'>
      <div className='text-center'>
        <h2 className='tracking-widest '>Your Job Postings</h2>
      </div>
      <div className='flex flex-col items-center mt-8'>
        <JobContainer />
      </div>
    </div>
  )
}
