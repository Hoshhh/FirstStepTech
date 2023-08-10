import React from 'react'

export default function UserData({data} : {data: string}) {
    const parsedData = JSON.parse(data)
  return (
    <div>
        {
            parsedData.map((data: string, index: number) => {
                return (
                    <li key={index}>{data}</li>
                )
            })
        }
    </div>
  )
}
