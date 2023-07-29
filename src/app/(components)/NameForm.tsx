'use client'
import React from 'react'

export default function NameForm() {
  return (
    <div className='fixed inset-0 bg-slate-800 bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <div className='w-3/4 sm:h-3/4 md:w-2/4 md:h-4/6 bg-slate-100 rounded-xl p-4'>
            <div className='flex flex-col items-center w-full h-full'>
                <h2 className='text-xl sm:text-3xl uppercase'>Enter your name</h2>
                <p className='text-xs text-slate-400 p-2 text-center hidden sm:flex'>To finish account creation, please enter your name.</p>
                <form className='mt-4 flex flex-col w-full md:w-3/4'>
                    <label className='font-bold'>First Name</label>
                    <input  
                    className='my-2 p-2 border border-slate-300 rounded w-full' 
                    placeholder='John'
                    />
                    <label className='font-bold'>Last Name</label>
                    <input  
                    className='my-2 p-2 border border-slate-300 rounded w-full'
                    placeholder='Smith'
                    />
                    <div className='flex justify-end mt-4'>
                        <button 
                            type='submit'
                            className="p-2 pl-4 pr-4 text-sm uppercase rounded-full text-slate-100 bg-sky-700 mb-8"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
