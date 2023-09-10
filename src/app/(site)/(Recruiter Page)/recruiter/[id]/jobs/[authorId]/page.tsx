import Link from 'next/link'
import React from 'react'

type Applicant = {
    id: string,
    firstName: string,
    lastName: string
}

export default async function page({ params }: {
  params: { authorId: string, jobId: string }
}) {
  const res = await fetch(`http://localhost:3000/api/user/${params.authorId}/jobs/${params.jobId}`, {
      method: 'GET',
      cache: 'no-store'
    })

    
  const applicants = await res.json()
  console.log(applicants)
  
  return (
    <div className='w-full sm:w-3/4 mt-16 mb-auto'>
      <div className='text-center'>
        <h2 className='tracking-widest '>Applicants</h2>
      </div>
      <div className='flex flex-col items-center mt-8'>
        <div className='w-5/6 lg:w-4/6 h-auto shadow-xl shadow-gray-400 rounded-xl flex flex-col p-4 mb-16'>
          {
            applicants.applicants.map((applicant: Applicant, index: number) => {
              return(
                <li key={index}>
                  <Link href={`/user/${applicant.id}`} target={'_blank'}>{`${applicant.firstName} ${applicant.lastName}`}</Link>
                </li>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
