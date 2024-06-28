import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import useTheme from '../context/context'
import '../App.css'

function SideNavigation ({hidden, setHidden}) {
    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(false)
    const [active5, setActive5] = useState(false)
    const theme = useTheme()
  return (
    <>
    <div className={`${hidden ? 'customizedHidden' : 'show'} fixed h-[calc(100vh-60px)] mt-[60px] w-[100vw] top-0 right-0 backdrop-blur-sm flex lg:hidden items-center justify-end bg-black/40 dark:bg-white/40 z-0`}>
        <div className='w-[70%]  max-w-[300px] h-[92%] rounded-2xl dark:bg-[#232323] bg-[#f3f3f3] flex flex-col py-10 items-center mr-5 justify-between'>
            

            <div className='flex flex-col w-full h-auto gap-6 sm:gap-4 items-center'>
            <NavLink onClick={() => setHidden(true)} to={'/'} className={({isActive}) => {
                    isActive ? setActive5(true) : setActive5(false)
                    return `${isActive ? 'text-[rgb(49,133,114)] dark:text-white bg-[rgb(224,255,248)] dark:bg-[#353535] font-semibold' : 'text-[#323232] dark:text-[#989898] bg-[#e0e0e0] dark:bg-inherit'} font-semibold w-[90%] max-w-[280px] px-12 py-[9px] rounded-2xl shadow-md shadow-[#232323]/15 flex flex-row items-center justify-between text-lg radio`
                }}>
                    
                    <div className='flex flex-row gap-5 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active5 ? theme.theme === 'dark' ? 'white' : 'rgb(49,133,114)' : theme.theme === 'dark' ? '#989898' : '#323232'}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                        <div>Home</div>
                    </div>

                    <div className= {`${active5 ? 'block' : 'hidden'} w-[8px] h-[8px] rounded-full bg-[rgb(49,133,114)] dark:bg-[rgb(0,255,195)] ${theme.theme === 'dark' ? 'darkglow' : ''} right-3`}></div>
                </NavLink>
                
                {/* <NavLink onClick={() => setHidden(true)} to={'/about'} className={({isActive}) => {
                    isActive ? setActive1(true) : setActive1(false)
                    return `${isActive ? 'text-[rgb(49,133,114)] dark:text-white bg-[rgb(224,255,248)] dark:bg-[#353535] font-semibold' : 'text-[#323232] dark:text-[#989898] bg-[#e0e0e0] dark:bg-inherit'} font-semibold w-[90%] max-w-[280px] px-12 py-[9px] rounded-2xl shadow-md shadow-[#232323]/15 flex flex-row items-center justify-between text-lg radio`
                }}>
                    <div className='flex flex-row gap-5 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active1 ? theme.theme === 'dark' ? 'white' : 'rgb(49,133,114)' : theme.theme === 'dark' ? '#989898' : '#323232'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                        <div>About</div>
                    </div>

                    <div className= {`${active1 ? 'block' : 'hidden'} w-[8px] h-[8px] rounded-full bg-[rgb(49,133,114)] dark:bg-[rgb(0,255,195)] ${theme.theme === 'dark' ? 'darkglow' : ''} right-3`}></div>
                </NavLink> */}


                <NavLink onClick={() => setHidden(true)} to={'/project'}  className={({isActive}) => {
                    isActive ? setActive2(true) : setActive2(false)
                    return `${isActive ? 'text-[rgb(49,133,114)] dark:text-white bg-[rgb(224,255,248)] dark:bg-[#353535] font-semibold' : 'text-[#323232] dark:text-[#989898] bg-[#e0e0e0] dark:bg-inherit'} font-semibold w-[90%] max-w-[280px] px-12 py-[9px] rounded-2xl shadow-md shadow-[#232323]/15 flex flex-row items-center justify-between text-lg radio`
                }}> 
                    <div className='flex flex-row gap-5 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active2 ? theme.theme === 'dark' ? 'white' : 'rgb(49,133,114)' : theme.theme === 'dark' ? '#989898' : '#323232'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-kanban"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><path d="M8 10v4"/><path d="M12 10v2"/><path d="M16 10v6"/></svg>
                        <div>Projects</div>
                    </div>

                    <div className= {`${active2 ? 'block' : 'hidden'} w-[8px] h-[8px] rounded-full bg-[rgb(49,133,114)] dark:bg-[rgb(0,255,195)] ${theme.theme === 'dark' ? 'darkglow' : ''} right-3`}></div>
                </NavLink>


                <NavLink onClick={() => setHidden(true)} to={'/skill'} className={({isActive}) => {
                    isActive ? setActive3(true) : setActive3(false)
                    return `${isActive ? 'text-[rgb(49,133,114)] dark:text-white bg-[rgb(224,255,248)] dark:bg-[#353535] font-semibold' : 'text-[#323232] dark:text-[#989898] bg-[#e0e0e0] dark:bg-inherit'} font-semibold w-[90%] max-w-[280px] px-12 py-[9px] rounded-2xl shadow-md shadow-[#232323]/15 flex flex-row items-center justify-between text-lg radio`
                }}> 
                    <div className='flex flex-row gap-5 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active3 ? theme.theme === 'dark' ? 'white' : 'rgb(49,133,114)' : theme.theme === 'dark' ? '#989898' : '#323232'} className='' stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bug-off"><path d="M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2"/><path d="M14.12 3.88 16 2"/><path d="M22 13h-4v-2a4 4 0 0 0-4-4h-1.3"/><path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"/><path d="m2 2 20 20"/><path d="M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13"/><path d="M12 20v-8"/><path d="M6 13H2"/><path d="M3 21c0-2.1 1.7-3.9 3.8-4"/></svg>
                        <div>Skills</div>
                    </div>

                    <div className= {`${active3 ? 'block' : 'hidden'} w-[8px] h-[8px] rounded-full bg-[rgb(49,133,114)] dark:bg-[rgb(0,255,195)] ${theme.theme === 'dark' ? 'darkglow' : ''} right-3`}></div>
                </NavLink>


                <NavLink onClick={() => setHidden(true)} to={'/contact'} className={({isActive}) => {
                    isActive ? setActive4(true) : setActive4(false)
                    return `${isActive ? 'text-[rgb(49,133,114)] dark:text-white bg-[rgb(224,255,248)] dark:bg-[#353535] font-semibold' : 'text-[#323232] dark:text-[#989898] bg-[#e0e0e0] dark:bg-inherit'} font-semibold w-[90%] max-w-[280px] px-12 py-[9px] rounded-2xl shadow-md shadow-[#232323]/15 flex flex-row items-center justify-between text-lg radio`
                }}> 
                    <div className='flex flex-row gap-5 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active4 ? theme.theme === 'dark' ? 'white' : 'rgb(49,133,114)' : theme.theme === 'dark' ? '#989898' : '#323232'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-contact-round"><path d="M16 18a4 4 0 0 0-8 0"/><circle cx="12" cy="11" r="3"/><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="8" x2="8" y1="2" y2="4"/><line x1="16" x2="16" y1="2" y2="4"/></svg>
                        <div>Contact</div>
                    </div>

                    <div className= {`${active4 ? 'block' : 'hidden'} w-[8px] h-[8px] rounded-full bg-[rgb(49,133,114)] dark:bg-[rgb(0,255,195)] ${theme.theme === 'dark' ? 'darkglow' : ''} right-3`}></div>
                </NavLink>
            </div>

            <div className='flex flex-col w-full h-auto gap-6 sm:gap-4 items-center'>
                {/* <NavLink to={'/contact'} onClick={() => setHidden(true)}>
                    <div className=' my-4 flex items-center text-lg sm:text-md text-black dark:text-white border-[3px] border-[#232323] dark:border-white rounded-md protest'>
                        <div className='px-8 py-2'> Hire me </div>
                    </div>
                </NavLink> */}

                <NavLink to={'https://drive.google.com/file/d/1FCHNsOzYDJCFfi_19hazG0bOuSPTP_Z-/view?usp=sharing'} onClick={() => setHidden(true)} className='dark:bg-[#dddddd] bg-[#232323] shadow-black/50 border-white dark:border-black border-[2px] shadow-md flex flex-row px-6 py-3 rounded-xl overflow-hidden items-center'>
                    <div className='mooli text-white dark:text-[#232323] font-bold'>Find my CV here</div>
                </NavLink>
            </div>
        </div>
    </div>
    </>
  )
}

export default SideNavigation