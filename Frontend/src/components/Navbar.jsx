import React, {useState} from 'react'
import '../App.css'
import { Link, NavLink } from 'react-router-dom'
import useTheme from '../context/context'
import ThemeButton from './ThemeButton'
import SideNavigation from './SideNavigation'
import Logo from './Logo'


function Navbar () {

    const theme = useTheme()
    const [hidden, setHidden] = useState(true)
    const handleSideNavigation = () => {
        setHidden(!hidden)
    }

    const copyMailToClipBoard = () => {
        navigator.clipboard.writeText('biswasarijit2002@gmail.com')
    }

  return (
    <nav className='bg-[#e5e5e5] dark:bg-[#323232] h-[60px] w-full px-6 flex flex-row items-center justify-between fixed z-50'>
        <div className='flex flex-row items-center gap-5'>
            <Logo />
            <div className='text-black dark:text-white kanit text-xl font-semibold md:hidden xl:block'>- by Arijit</div>
            <div className='hidden md:flex flex-row text-sm dark:text-white gap-4 pl-4 h-[35px] rounded-full bg-[#c6c6c6] dark:bg-[#3f3f3f] shadow-sm shadow-[#a3a3a3]/50 dark:shadow-black/50 cabin items-center'>
                <div>biswasarijit2002@gmail.com</div>
                <div className='bg-white dark:bg-[#6e6e6e] h-full flex items-center justify-end px-4 rounded-full cursor-pointer text-[17px]' onClick={copyMailToClipBoard}>copy</div>
            </div>
            <Link className='hidden px-6 h-[35px] md:flex items-center bg-white dark:bg-[#6e6e6e] dark:text-white rounded-full shadow-sm shadow-[#a3a3a3]/50 dark:shadow-black/50 cabin'>
                CV
            </Link>
        </div>


        <div className='flex flex-row gap-4'>
            <div className='hidden lg:flex flex-row lg:gap-6 xl:gap-10 items-center'>
                <NavLink to={'/'} className={({isActive}) => `${isActive ? 'text-[rgb(90,234,172)] bg-white font-bold text-[18px] shadow-md dark:text-[rgb(0,255,195)] dark:bg-[#232323] dark:shadow-[#111111]/50' : 'text-[#232323] dark:text-white font-semibold hover:bg-[#e3e3e3] dark:hover:bg-[#232323]'} mooli duration-200 ease-in-out py-2 px-4 rounded-xl`}>Home</NavLink>
                {/* <NavLink to={'/about'} className={({isActive}) => `${isActive ? 'text-[rgb(90,234,172)] bg-white font-extrabold text-[18px]' : 'text-[#232323] dark:text-white font-semibold hover:bg-[#e3e3e3] dark:hover:bg-[#232323]'} mooli duration-200 ease-in-out py-2 px-4 rounded-xl`}>About</NavLink> */}
                <NavLink to={'/project'} className={({isActive}) => `${isActive ? 'text-[rgb(90,234,172)] bg-white font-bold text-[18px] shadow-md dark:text-[rgb(0,255,195)] dark:bg-[#232323] dark:shadow-[#111111]/50' : 'text-[#232323] dark:text-white font-semibold hover:bg-[#e3e3e3] dark:hover:bg-[#232323]'} mooli duration-200 ease-in-out py-2 px-4 rounded-xl`}>Projects</NavLink>
                <NavLink to={'/skill'} className={({isActive}) => `${isActive ? 'text-[rgb(90,234,172)] bg-white font-bold text-[18px] shadow-md dark:text-[rgb(0,255,195)] dark:bg-[#232323] dark:shadow-[#111111]/50' : 'text-[#232323] dark:text-white font-semibold hover:bg-[#e3e3e3] dark:hover:bg-[#232323]'} mooli duration-200 ease-in-out py-2 px-4 rounded-xl`}>Skills</NavLink>
                <NavLink to={'/contact'} className={({isActive}) => `${isActive ? 'text-[rgb(90,234,172)] bg-white font-bold text-[18px] shadow-md dark:text-[rgb(0,255,195)] dark:bg-[#232323] dark:shadow-[#111111]/50' : 'text-[#232323] dark:text-white font-semibold hover:bg-[#e3e3e3] dark:hover:bg-[#232323]'} mooli duration-200 ease-in-out py-2 px-4 rounded-xl`}>Contact</NavLink>
            </div>

            <div className='flex flex-row items-center gap-5'>
                <ThemeButton/>
                <div className='h-full w-auto cursor-pointer lg:hidden' onClick={handleSideNavigation}>
                {
                    theme.theme === 'dark' ? 
                    <img src="https://res.cloudinary.com/daghlyuwh/image/upload/v1716799104/Portfolio/pemgejztwenvo0oboq1p.png" className='w-[30px] h-[30px]' alt="" /> : 
                    <img src="https://res.cloudinary.com/daghlyuwh/image/upload/v1716799104/Portfolio/wcr4txd80x0zswxw8otc.png" className='w-[30px] h-[30px]' alt="" />
                }
                </div>
                <SideNavigation hidden={hidden} setHidden={setHidden} />
            </div>
        </div>
    </nav>
  )
}

export default Navbar