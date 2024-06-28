import React from 'react'
import { Link } from 'react-router-dom'

function NotReady () {
  return (
    <div className='w-[100vw] h-[100vh] flex items-end'>
        <div className='w-full h-[80%] flex flex-col lg:flex-row '>
            <div className='flex flex-col w-full h-[50%] lg:w-[50%] lg:h-full justify-center items-center gap-4 text-[#111111] dark:text-white'>
                <div className='protest text-6xl lg:text-8xl'>We're Sorry</div>
                <div className='anton text-[42px] px-20'>This project is under development...</div>
                <Link to={'/'} className='bg-black dark:bg-white text-xl protest text-white dark:text-[#111111] px-4 py-3 rounded-2xl shadow-md shadow-black/80'>
                    Back to Home
                </Link>
            </div>
            <div className='w-full h-[50%] lg:w-[50%] lg:h-full justify-center items-center'>
                
            </div>
        </div>
    </div>
  )
}

export default NotReady