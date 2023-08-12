import Link from 'next/link'
import React from 'react'

export default function UserData({data, isLink} : {data: string, isLink: boolean}) {
    const parsedData = JSON.parse(data)
  return (
    <div>
        {   !isLink ?
            parsedData.map((data: string, index: number) => {
                return (
                    <li key={index} className='text-sm m-4 whitespace-pre-wrap'>{data}</li>
                )
            })
            :
            parsedData.map((data: string, index: number) => {
                return (
                    <li key={index} className='text-sm m-2 whitespace-pre-wrap'>
                        <a href={data} target='_blank'>{data}</a>
                    </li>
                )
            })
        }
    </div>
  )
}
