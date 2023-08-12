'use client'

import { useEffect, useState } from "react"
import { FaEdit } from "react-icons/fa"
import Modal from "./Modal"
import UserData from "./UserData"

type Container = {
    section: string,
    id: string,
    sessionId: string | undefined,
    modalHeader: string,
    modalDesc: string,
    isArray: boolean,
    data: string,
    children: React.ReactNode
}

export default function Container({ section, id, sessionId, modalHeader, modalDesc, isArray, data, children }: Container) {
    const [isUser, setIsUser] = useState(false)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        if (id === sessionId) {
            setIsUser(true)
        } else {
            setIsUser(false)
        }

        setShowModal(false)
    }, [sessionId, id, data])

  return (
    <div className='w-5/6 lg:w-4/6 h-auto shadow-xl shadow-gray-400 rounded-xl flex flex-col p-4 mb-16'>
        <div className="flex justify-between">
            <h2 className='tracking-widest mb-4 text-3xl'>
                {section}
            </h2>
            { isUser ?
                <button 
                className="p-2 pl-4 pr-4 text-sm uppercase rounded-full text-slate-100 bg-sky-700 mb-8"
                onClick={() => setShowModal(true)}
                >Edit</button>
                : ""
            }
        </div>
        <div>
            {
                (isArray && data !== null) ? <UserData data={data} /> : <p>{data}</p>
            }
        </div>
        <Modal isVisible={showModal} onClose={() => setShowModal(false)} modalHeader={modalHeader} modalDesc={modalDesc} >
            {children}
        </Modal>
    </div>
  )
}
