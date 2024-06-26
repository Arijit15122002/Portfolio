import React from 'react'
import { MobileView, ComputerView } from '../components/DifferentView'

function Skill () {
  return (
    <>
    <div className='w-full h-[100vh] flex items-end'>
        <div className='h-[93%] w-full flex flex-col md:flex-row items-center'>
            <div className='w-full h-[25%] md:h-full md:w-[50%] lg:w-[35%] relative z-0 '>
                <div className='flex flex-col h-full justify-center gap-5 z-10 px-4'>
                    <span className='text-5xl kanit font-semibold text-[#888888] dark:text-black z-10'>My</span>
                    <span className='text-4xl mono font-semibold z-10 dark:text-white'>Skillset</span>
                </div>
                <div className='absolute right-0 top-[30%] flex flex-row items-center text-[#cccccc] dark:text-[#232323] z-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
                    <div className='text-9xl -mt-4 font-semibold kanit'>coder</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                </div>
            </div>
            <div className='w-[90%] h-[75%] md:h-[95%] md:w-[50%]  overflow-y-auto flex flex-col gap-5 py-3 items-center lg:hidden' id='scrollHome'>
                <MobileView />
            </div>
            <div className='hidden lg:flex w-[68%] h-full justify-center items-center'>
                <ComputerView />
            </div>
        </div>
    </div>
    </>
  )
}

export default Skill