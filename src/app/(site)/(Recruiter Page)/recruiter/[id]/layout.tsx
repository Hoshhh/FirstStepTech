
import Link from 'next/link'
import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import SignoutButton from '@/components/profile/SignoutButton'
import ProfileHeader from '@/components/profile/ProfilePicture'

export default async function UserLayout({
    children,
    params
}: {
    children: React.ReactNode,
    params: { id: string }
}) {

  const session = await getServerSession(authOptions)
  if (session?.user.role !== "REC") {
    throw new Error("This page is for Recruiters only.")
  }

  return (
    <div className="md:grid md:grid-cols-4 md:gap-4 md:h-screen">
      <div className='flex flex-col col-span-1 border-r-2 items-center md:sticky md:top-0 md:h-screen'>
        <Link href="/" className='text-2xl pt-8'>FirstStepTech</Link>
        <ProfileHeader id={params.id} />
        <div className='pt-12 h-full'>
          <ul className='grid grid-rows-5 content-between h-full'>
            <Link 
              href={`/recruiter/${params.id}`}
            >
              Dashboard
            </Link>
            <Link href={`/recruiter/${params.id}/jobs`} >Job Postings</Link>
            <Link href={`/recruiter/${params.id}/analytics`} >Analytics</Link>
            <Link href={`/recruiter/${params.id}/feedback`} >Feedback</Link>
          </ul>
        </div>
        <SignoutButton />
      </div>
      <div className='flex col-span-3 justify-center pb-4 overflow-scroll overflow-x-hidden'>
        {children}
      </div>
    </div>
  )
}