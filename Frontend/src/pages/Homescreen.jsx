import React, {useEffect} from 'react'
import '../App.css'
import useTheme from '../context/context.js'
import { Link } from 'react-router-dom'

function Homescreen () {
	const {theme} = useTheme()
return (
<>
	<div className=''>
		<div className='pt-[60px] bg-inherit w-full h-[200vh] md:h-screen flex flex-col md:flex-row md:items-center md:justify-between'>
			<div className='w-[90%] sm:w-[80%] h-[95vh] md:w-[50%] md:h-[90%] flex items-center'>
				<div className='h-[90%] md:h-full w-full bg-[#232323] dark:bg-[#e7e7e7] rounded-r-2xl flex flex-col justify-center gap-5'>
					<div className='w-[100px] h-[100px] ml-10 md:ml-16'>
						<img src="/images/ProfilePic.jpg" className='w-full h-full rounded-full border-2 border-white dark:border-[#232323]' alt="" />
					</div>
					<div className='text-7xl xl:text-8xl  ml-10 md:ml-16 mt-5 kanit'>
						<span className='text-[#989898] dark:text-[#6e6e6e]'>Hola!</span> <span className='text-white dark:text-[#232323]'>I'm</span>
						<div className='text-white dark:text-[#232323]'>Arijit Biswas</div>
					</div>
					<div className={`${theme === 'dark' ? 'text-black' : 'text-white' } kanit ml-28 mr-8 my-4`}>
						' Discovering the professional journey of a developer '
					</div>
					<div className='flex flex-row ml-10 md:ml-16 gap-3'>
						<Link>
							<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={theme === 'dark' ? 'black' : '#cccccc'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
						</Link>
						<Link>
							<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={theme === 'dark' ? 'black' : '#cccccc'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
						</Link>
						<Link>
							<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={theme === 'dark' ? 'black' : '#cccccc'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
						</Link>
					</div>
				</div>
			</div>
			<div className='h-[100vh] md:h-full md:w-[49%] flex flex-col items-center justify-center px-6'>
				<div className='h-auto w-full flex flex-col items-start '>
					<div className=' mb-[-4px] bg-[#232323] dark:bg-[#cccccc] text-md px-4 py-2 radio text-white dark:text-[#232323] rounded-t-xl'>One of my favprite quotes: </div>
					<div className='border-4 border-[#232323] rounded-lg rounded-tl-none dark:border-[rgb(204,204,204)] px-6 py-8'>
						<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke={theme === 'dark' ? '#cccccc' : '#232323'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square-quote"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 12a2 2 0 0 0 2-2V8H8"/><path d="M14 12a2 2 0 0 0 2-2V8h-2"/></svg>
						<div className='px-6 text-lg kanit dark:text-[#dddddd] mt-4'>
							Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.
						</div>
						<div className='text-2xl protest dark:text-white font-extrabold flex justify-end'>
							- Albert Einstien
						</div>
					</div>
				</div>
				<div>
					<div className='px-10 lg:px-20 py-10 text-[#232323] dark:text-white text-lg radio'>
					I'm thrilled to welcome you to my space! As a passionate MERN stack developer, I'm driven by the challenge of crafting innovative and user-friendly web applications.  I thrive on problem-solving, taking complex challenges and transforming them into elegant and efficient solutions. 
					</div>
					<div to={'/contact'} className=' flex flex-row items-center justify-center w-full h-auto gap-5'>
						<Link className='text-[rgb(62,255,210)] bg-[#232323] dark:bg-[#101010] shadow-md shadow-[#232323] text-md px-4 py-2 font-bold cabin rounded-lg'>Catch me here</Link>
						<Link to={'/about'} className='border-[2px] border-[#232323] dark:border-[#dddddd] dark:text-white text-md px-5 py-[10px] anton rounded-lg'>More to know me?</Link>
					</div>
				</div>
			</div>
		</div>
		<div className='w-full h-auto flex flex-col md:flex-row items-center justify-center mt-20'>
			<div className='w-[90%] md:w-[60%] lg:w-[55%] xl:w-[50%] h-[60vh] md:h-full flex items-center justify-center mx-auto md:mx-0'>
				<div className=' flex flex-col justify-center gap-5 px-10 py-24 m-10 rounded-2xl shadow-md bg-inherit dark:bg-[#2c2c2c] shadow-[#232323]/80 dark:shadow-black/70'>
					<div className=' text-5xl lg:text-7xl text-[#808080] anton ita'>Exploring</div>
					<div className=' text-5xl lg:text-7xl text-[#232323] dark:text-white kanit font-bold'>Boundless</div>
					<div className=' text-6xl lg:text-8xl text-[#232323] dark:text-white kanit font-bold'>Universe</div>
					<div className=' text-5xl lg:text-7xl cedarville flex flex-row gap-5 dark:text-[rgb(39,255,194)]'><span>of</span><span>Development</span></div>
				</div>
			</div>
			<div className='w-[70%] mx-auto md:w-[45%] h-auto md:h-full my-20'>
				<div className='text-xl kanit dark:text-white'>' What is the most interesting thing to be a Software Development Engineer? '</div>
				<div className='text-lg pl-[20%] xl:pl-[50%] py-5 anton text-[rgb(31,211,169)]'>The never-ending dance of creativity and problem-solving</div>

				<div className='block xl:hidden text-[#232323] dark:text-[#cccccc] text-[17px] kanit'>
				Software development is a captivating blend of creative vision and problem-solving puzzles. I relish crafting user-centric applications while tackling the 'craziness' of unexpected challenges. This constant dance between creativity and intellectual pursuit fuels my passion for building impactful solutions and mastering new technologies.
				</div>
				<div className='hidden xl:block text-[#232323] dark:text-[#dddddd] text-[17px] kanit'>
				Software development, for me, occupies a unique space where creativity and problem-solving intertwine in a fascinating way. It's like being an architect and a puzzle master rolled into one. On the one hand, I get to envision and craft applications that bring ideas to life, shaping user experiences and potentially impacting lives in positive ways. This creative aspect allows me to express myself by building something new and valuable.
				</div>
				<div className='hidden xl:block text-[#232323] dark:text-[#dddddd] text-[17px] kanit'>
				On the other hand, the journey from concept to reality is paved with intricate challenges. The "craziness," as you put it, lies in the unexpected twists and turns that emerge during development. Unforeseen bugs, integration issues, and performance bottlenecks can test my mettle. But here's where the problem-solving kicks in. I relish the opportunity to delve into the intricacies of code, analyze root causes, and devise elegant solutions. It's a constant intellectual dance, pushing me to learn new things, experiment with different approaches, and ultimately find the most efficient and effective path forward.
				</div>
			</div>
		</div>
	</div>
</>
)
}

export default Homescreen