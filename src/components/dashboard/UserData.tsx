import Link from 'next/link'
import React from 'react'

export default function UserData({data, isLink} : {data: string, isLink: boolean}) {
    const parsedData = JSON.parse(data)
  return (
    <div>
        {   !isLink ?
            <div className={`${parsedData.length > 3 ? "sm:grid sm:grid-cols-2" : "flex"}`}>
                <div className="sm:col-span-1">
                    {parsedData.slice(0, 3).map((data: string, index: number) => (
                        <li key={index} className='text-sm m-4'>
                            {data}
                        </li>
                    ))}
                </div>
                <div className="sm:col-span-1">
                    {parsedData.slice(3, 6).map((data: string, index: number) => (
                        <li key={index} className='text-sm m-4'>
                            {data}
                        </li>
                    ))}
                </div>
            </div>
            :
            parsedData.map((data: string, index: number) => {
                return (
                    <li key={index} className='text-sm m-4 whitespace-pre-wrap text-sky-700 list-none'>
                        <a href={data} target='_blank'>{data}</a>
                    </li>
                )
            })
        }
    </div>
  )
}
