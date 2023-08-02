import React from 'react'

export default function Container({ section, children }: {section: string, children: React.ReactNode}) {
  return (
    <div className='w-2/3 h-auto shadow-xl shadow-gray-400 rounded-xl flex flex-col p-2 hover:scale-105 ease-in duration-300'>
        <h2 className='tracking-widest mb-4'>
            {section}
        </h2>
        {children}
    </div>
  )
}
