import React from 'react'
import useTheme from '../context/context'
import {Link} from 'react-router-dom'
import { MobileView, ComputerView } from '../components/DifferentView'

function Skill () {
    const theme = useTheme()
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
                <div className='hidden absolute left-0 bottom-10 md:flex flex-col gap-5'>
                    <div className='p-2 bg-[#cccccc] dark:bg-[#232323] shadow-md shadow-black/20 rounded-r-full flex flex-row items-center w-[272px]'>
                        <div className='p-2 dosis text-[#232323] dark:text-[#eeeeee]'>
                            Check out my LeetCode profile
                        </div>
                        <Link to={'https://leetcode.com/u/Arijit2002/'} className='p-3 rounded-full bg-[#dddddd] dark:bg-[#111111] border-2 border-[#707070] dark:border-[#6b6b6b] hover:scale-110 duration-200'>
                            <svg fill="#e3871e" width="25px" height="25px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
                        </Link>
                    </div>
                    <div className='p-2 bg-[#cccccc] dark:bg-[#232323] shadow-md shadow-black/20 rounded-r-full flex flex-row items-center w-[195px]'>
                        <div className='p-2 dosis text-[#232323] dark:text-[#eeeeee]'>
                            Find me on Gihub: 
                        </div>
                        <Link to={'https://github.com/Arijit15122002'} className='p-3 rounded-full bg-[#dddddd] dark:bg-[#111111] border-2 border-[#707070] dark:border-[#6b6b6b] hover:scale-110 duration-200'>
                        <svg width="25px" height="25px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill={theme.theme === 'dark' ? '#eeeeee' : '#232323'}>
                        <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]">
                        </path></g></g></g>
                        </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='w-[90%] h-[75%] md:h-[95%] md:w-[50%] flex overflow-y-auto items-center justify-center lg:hidden' id='scrollHome'>
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