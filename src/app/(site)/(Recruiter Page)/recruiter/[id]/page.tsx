import { getCurrentSession } from '@/lib/session'
import React from 'react'


export default async function page({ params }: {
  params: { id: string }
}) {
  //const session = await getCurrentSession()
  //const res = await fetch(`http://localhost:3000/api/user/${params.id}`)
  //const user = await res.json()

  return (
    <div className='flex flex-col w-full sm:w-3/4 items-center mt-16 mb-auto'>
      home
    </div>
  )
}
