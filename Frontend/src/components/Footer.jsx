import React from 'react'
import { Link } from 'react-router-dom'

function Footer () {
return (
<>
	<div className='w-full h-auto bg-[#232323] dark:bg-white p-10 md:p-20 flex flex-col items-center'>
		<div className='w-full max-w-[1200px] flex flex-col bg-inherit'>
			<div className='w-full h-auto flex justify-end'>
				<div className='flex flex-row items-center px-6 py-2 text-white dark:text-black font-semibold gap-2 rounded-xl shadow-md bg-black dark:bg-[#dddddd] shadow-black/40 hover:scale-110 duration-200 ease-in-out cursor-pointer'>
					<div>BACK TO TOP</div>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-from-dot"><path d="m5 9 7-7 7 7"/><path d="M12 16V2"/><circle cx="12" cy="21" r="1"/></svg>
				</div>
			</div>
			<div className='mx-auto h-auto mt-10 flex flex-col'>
				<div className='kanit dark:text-[#232323] text-white'>HAVE A PROJECT IN MIND?</div>
				<div className='w-full text-6xl md:text-[125px] lg:text-[140px] text-center text-[#090909] dark:text-[#dddddd] my-10'>LET'S TALK</div>
			</div>
			<div className='w-full flex flex-col  md:flex-row justify-between items-center'>
				<div className='flex flex-row gap-5 items-center'>
					<Link className='flex flex-row gap-2 px-4 py-2 dark:bg-[#d9d9d9] bg-[#111111] dark:text-[#232323] text-white rounded-full'>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
						<p>GITHUB</p>
					</Link>
					<Link className='flex flex-row gap-2 px-4 py-2 dark:bg-[#d9d9d9] bg-[#111111] dark:text-[#232323] text-white rounded-full'>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
						<p>LinkedIN</p>
					</Link>
				</div>
				<div className='flex flex-col w-full md:w-auto my-10 md:my-0'>
					<div className='text-[#cccccc] dark:text-[#424242] '>Designed & Developed by</div>
					<div className='text-white dark:text-black kanit'>ARIJIT BISWAS</div>
				</div>
			</div>
		</div>
	</div>
</>
  )
}

export default Footer