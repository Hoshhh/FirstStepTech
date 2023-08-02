
import Link from 'next/link'
import React from 'react'
import { FaSignOutAlt } from 'react-icons/fa'
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

  return (
    <div className="md:grid md:grid-cols-4 md:gap-4 md:h-screen">
      <div className='flex flex-col col-span-1 border-r-2 items-center'>
        <Link href="/" className='text-2xl pt-8'>FirstStepTech</Link>
        <ProfileHeader id={params.id} />
        <div className='pt-12 h-full'>
          <ul className='grid grid-rows-5 content-between h-full'>
            <Link href={`/user/${params.id}`} >Dashboard</Link>
            <Link href={`/user/${params.id}/applications`} >Applications</Link>
            <Link href={`/user/${params.id}/analytics`} >Analytics</Link>
            <Link href={`/user/${params.id}/feedback`} >Feedback</Link>
          </ul>
        </div>
        <SignoutButton />
      </div>
      <div className='flex col-span-3 justify-center pb-4'>
        {children}
      </div>
    </div>
  )
}