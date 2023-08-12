import Link from 'next/link'
import React from 'react'

export default function UserData({data, isLink} : {data: string, isLink: boolean}) {
    const parsedData = JSON.parse(data)
  return (
    <div>
        {   !isLink ?
            parsedData.map((data: string, index: number) => {
                return (
                    <li key={index}>{data}</li>
                )
            })
            :
            parsedData.map((data: string, index: number) => {
                return (
                    <li key={index}>
                        <Link href={data}>{data}</Link>
                    </li>
                )
            })
        }
    </div>
  )
}
