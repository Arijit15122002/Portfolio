import React from 'react'
import useTheme from '../context/context'
import Carousel from '../components/Carousel/Carousel'
import '../components/Carousel/sandbox.css'
import '../components/Carousel/base.css'
import '../components/Carousel/embla.css'

import { SLIDES } from '../constants/Constants'

function Project () {

	const OPTIONS = {}

	const {theme} = useTheme()

  return (
	<>
		<div className='w-full h-full flex justify-center items-center'>
			<div className='w-full h-[100vh] sm:h-[120vh] lg:h-[100vh] flex flex-col lg:flex-row'>
				<div className='hidden xl:flex lg:w-[30vw] lg:h-full items-end pb-16 justify-center'>
					<div className='bg-[url(https://images.pexels.com/photos/8064312/pexels-photo-8064312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] w-[90%] h-[80%] bg-cover bg-center rounded-xl overflow-hidden shadow-md shadow-black/70'>
						<div className='w-full h-full bg-black/20 dark:bg-black/10 flex flex-col items-center justify-center gap-5 text-white '>
							<span className='text-5xl cabin '>Finding</span>
							<span className='pl-[60px] text-3xl  protest'>Ideas...</span>
						</div>
					</div>
				</div>
				<div className='h-[25vh] sm:h-[28vh] lg:h-full w-full lg:w-[38vw] mt-[54px] flex flex-col px-6 my-4 justify-center items-center relative'>

					<div className='absolute w-[300px] h-[300px] bg-gradient-to-tr from-[#f2f2f2] via-[#d2d0d0] to-[#9caaa4] dark:from-[#111111] rounded-full top-10 md:top-20 left-0 z-0'>

					</div>
					<div className='flex flex-col justify-end lg:justify-center gap-3 z-10'>
						<div className='flex h-[60px] dark:text-white items-end py-3 gap-2'>
							<span className='text-5xl playwrite text-[#343434] dark:text-[#f2f2f2]'>Building</span><span className='text-4xl cabin font-bold'>with</span>
						</div>
						<span className='mt-2 -mb-2 py-1 px-2 text-5xl dosis font-bold inline-block w-[220px] rounded-md text-[#232323] dark:text-[#b9cbc6]  '>PASSION...</span>

						<div className='hidden lg:block my-10 pl-28 kanit text-lg dark:text-white'>
							Browse my works...
						</div>
					</div>
					<div className='hidden lg:flex flex-row bottom-28 left-0 rounded-sm rounded-r-xl px-6 py-2 bg-[#232323] dark:bg-[#cccccc] text-[#cccccc] dark:text-[#232323] text-lg kanit items-center gap-2 mt-20 w-[280px]'>	
							<div>
								Find me on GitHub
							</div>
							<div>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
							</div>
							<a href="https://github.com/Arijit15122002" className='cursor-pointer p-2 rounded-2xl bg-black dark:bg-white'>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={theme === 'dark' ? '#232323' : '#cccccc'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
							</a>
					</div>
				</div>
				<div className=' w-[75%] lg:h-full lg:w-[60vw] lg:flex lg:items-center lg:justify-center mx-auto'>
					<Carousel slides={SLIDES} options={OPTIONS}/>
				</div>
			</div>
		</div>
	</>












































				// {/* <div className='lg:hidden w-[90%] max-w-[400px] h-[50%] flex items-center justify-center'>
				// 	<div className=' lg:hidden w-[85%] h-auto rounded-3xl flex flex-col gap-5 items-center justify-between shadow-md shadow-[#232323]/30 dark:shadow-black/50 py-5'>
				// 		<a href="" className='bg-[#c3c3c3] dark:bg-[#19191a] w-[80%] text-xl px-10 py-3 rounded-2xl anton text-[#232323] dark:text-[#efeeee]'>01. Alfredough</a>
				// 		<a href="" className='bg-[#c3c3c3] dark:bg-[#19191a] w-[80%] text-xl px-10 py-3 rounded-2xl anton text-[#232323] dark:text-[#efeeee]'>02. ViewTube</a>
				// 		<a href="" className='bg-[#c3c3c3] dark:bg-[#19191a] w-[80%] text-xl px-10 py-3 rounded-2xl anton text-[#232323] dark:text-[#efeeee]'>03. Weatherly</a>
				// 		<a href="" className='bg-[#c3c3c3] dark:bg-[#19191a] w-[80%] text-xl px-10 py-3 rounded-2xl anton text-[#232323] dark:text-[#efeeee]'>04. E-voting system</a>
				// 	</div>	

				// </div>


				// <div className='lg:w-[65%] lg:h-full lg:max-h-[900px] hidden lg:flex justify-center items-center'>
				// 	<div className='w-[95%] h-[90%] flex flex-row justify-center items-center gap-5'>
				// 		<div className='w-[33%] h-[90%] flex flex-col items-end gap-5 justify-center'>
				// 			<div className='w-full xl:w-[90%] h-[30%] bg-gradient-to-tr dark:bg-gradient-to-t from-[#96b9b9] dark:from-[#063330] to-[#d5f8f9] dark:to-[#197159] overflow-hidden rounded-3xl shadow-md shadow-[#232323]/50'>
				// 				<div className='m-2 p-2 inline-block rounded-full bg-white/20'>
				// 					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ theme === 'dark' ? '#7be7ca' : '#1d6b6e'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
				// 				</div>
				// 				<div className='px-4 py-8 cabin font-bold text-white text-lg flex flex-col'>
				// 					<span>Explore my works, </span>
				// 					<span className='text-[#17f7ff] dark:text-[#7be7ca] text-3xl'>HERE</span>
				// 				</div>
				// 			</div>
				// 			<a href='' className='w-full h-[45%] bg-gradient-to-tr from-[#ab5d59] to-[#ffc7bd] rounded-3xl shadow-md shadow-[#232323]/50'>
				// 				<div className='m-2 p-2 inline-block rounded-full bg-white/20'>
				// 					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c22424" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
				// 				</div>
				// 				<div className='text-3xl text-center py-4 anton text-[#c22424]'>
				// 					ViewTube
				// 				</div>
				// 				<div className='text-[#ffd1d1] px-6 cabin'>
				// 				ViewTube is an ad-free alternative to YouTube, offering search and playback functionality powered by YouTube's official API.
				// 				</div>
				// 			</a >
				// 		</div>
				// 		<div className='w-[33%] h-[90%] flex flex-col gap-5'>
				// 			<a href="" className='w-full h-[60%] bg-gradient-to-tr from-[#695175] to-[#c6c4ee] rounded-3xl shadow-md shadow-[#232323]/50'>
				// 				<div className='m-2 p-2 inline-block rounded-full bg-white/20'>
				// 					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#401362" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-notebook-pen"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M18.4 2.6a2.17 2.17 0 0 1 3 3L16 11l-4 1 1-4Z"/></svg>
				// 				</div>
				// 				<div className='dosis text-[#401362] text-3xl p-4 font-semibold'>
				// 					Alfredough
				// 				</div>
				// 				<div className='p-4 belanosima text-[#34174a]'>
				// 					Alfredough is an online community for passionate writers and readers, featuring user-generated blogs, searchable by category for a personalized content experience.
				// 				</div>
				// 			</a>
				// 			<a href="" className='w-full h-[40%] bg-gradient-to-tr from-[#418667] to-[#98ffc1] rounded-3xl shadow-md shadow-[#232323]/50'>
				// 				<div className='m-2 p-2 inline-block rounded-full bg-white/20'>
				// 				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#165c2b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
				// 				</div>
				// 				<div className='protest text-[#165c2b] text-3xl px-4 py-3'>
				// 					Weatherly
				// 				</div>
				// 				<div className='px-4 text-[#165c2b] kanit'>
				// 					One-stop shop for global weather information, offering instant access to forecasts for any city worldwide.
				// 				</div>
				// 			</a>
				// 		</div>
				// 		<div className='w-[33%] h-[90%] flex flex-col gap-5 justify-center'>
				// 			<a href="" className='w-full h-[50%] bg-gradient-to-tr from-[#5e7a44] to-[#b5f975] rounded-3xl shadow-md shadow-[#232323]/50'>
				// 				<div className='m-2 p-2 inline-block rounded-full bg-white/20'>
				// 					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#384e25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
				// 				</div>
				// 				<div className='belanosima text-[#384e25] text-3xl px-4'>
				// 					E-voting
				// 				</div>
				// 				<div className='p-4 text-[#384e25] belanosima truncate-paragraph'>
				// 				A secure and efficient online voting platform built with React and blockchain technology, empowers voters to cast their ballots remotely, ensuring transparency, anonymity, and accessibility to their choices
				// 				</div>
				// 			</a>
				// 			<div className='w-[90%] h-[30%] bg-gradient-to-tr from-[#63405e] to-[#ffbff5] rounded-3xl'>
				// 				<div className='m-2 p-2 inline-block rounded-full bg-white/20'>
				// 					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#63405e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
				// 				</div>
				// 				<div className='belanosima text-[#442a40] text-3xl px-4'>
				// 					<span>Find me on GitHub - </span>
				// 					<span className='text-lg py-2 px-3 bg-white/30 rounded-xl '><a href="https://github.com/abhishekbhagwat">Click Here</a></span>
				// 				</div>
				// 			</div>
				// 		</div>
				// 	</div>
				// </div> */}









    // <>
	// 	{/* <div className='w-full h-[80px] sticky top-[60px]'></div> */}
	// 	<div className='w-full h-auto flex flex-col lg:flex-row justify-center mb-20 lg:mb-0'>
	// 		<div className='w-[90%] sm:w-[70%] md:w-[80%] lg:w-[50%] h-full my-[70px] md:mt-[80px]'>
	// 			<div className='text-5xl belanosima dark:text-white pl-7 pr-[20%] py-4 lg:pl-0 lg:pr-0 lg:text-center'>
	// 				Building with passion:
	// 			</div>
	// 			<div className='text-2xl sm:text-xl pl-[30%] lg:pl-0 lg:text-center mooli text-[#2ea380] dark:text-[#4df1c0] font-bold'>
	// 				Showcase of my Projects...
	// 			</div>
	// 			<div className='w-full md:w-[80%] mx-auto px-4 py-10 md:py-16 sm:py-8 text-md mooli font-bold dark:text-white dark:font-normal'>
	// 			<span>Welcome folks!</span> I'm Arijit, a passionate web developer with a strong interest in building user-friendly and impactful applications. This portfolio showcases a selection of my projects - all designed to address different needs and enhance user experiences.
	// 			</div>
	// 			<div className='w-auto max-w-[420px] mx-auto flex flex-col gap-4 px-10 text-xl kanit items-center'>
	// 				<a className='bg-[#bbbbbb] dark:bg-[#111111] dark:text-white shadow-md shadow-[#aaaaaa]/80 dark:shadow-black/50 w-[70%] px-6 py-2 rounded-xl' href="#alfredough">1. Alfredough</a>
	// 				<a className='bg-[#bbbbbb] dark:bg-[#111111] dark:text-white shadow-md shadow-[#aaaaaa]/80 dark:shadow-black/50 w-[70%] px-6 py-2 rounded-xl' href="#viewtube">2. ViewTube</a>
	// 				<a className='bg-[#bbbbbb] dark:bg-[#111111] dark:text-white shadow-md shadow-[#aaaaaa]/80 dark:shadow-black/50 w-[70%] px-6 py-2 rounded-xl' href="#weatherly">3. Weatherly</a>
	// 				<a className='bg-[#bbbbbb] dark:bg-[#111111] dark:text-white shadow-md shadow-[#aaaaaa]/80 dark:shadow-black/50 w-[70%] px-6 py-2 rounded-xl' href="#evoting">4. E-Voting</a>
	// 			</div>
	// 		</div>
	// 		<div className=' w-full h-auto lg:w-[50%] lg:h-[calc(100vh-80px)] lg:overflow-y-auto lg:mt-[80px] flex flex-col items-center' id='scrollHome'>
				
	// 			<div className='w-[90%] h-full' id='alfredough'>
	// 				<div className='text-center text-3xl belanosima py-6 dark:text-white'>Alfredough</div>
	// 				<ImageSlider images={alfredough} />
	// 				<div className='px-6 py-4 dark:text-white kanit'>
	// 					Alfredough is a user-friendly blogging platform that empowers you to effortlessly create, share, and manage your online content. Whether you're a seasoned author or just starting your blogging journey, Alfredough provides the tools and flexibility you need to bring your ideas to life.
	// 				</div>
	// 				<div className='w-full h-auto p-2 flex flex-row gap-2 items-center justify-end'>
	// 					<div className='text-md protest'>try it here - </div>
	// 					<a href="https://alfredough.vercel.app/">
	// 						<div className='border-2 rounded-lg border-[#2ea380] bg-white px-4 py-[4px] mooli'>Alfredough</div>
	// 					</a>
	// 				</div>
	// 			</div>

	// 			<div className='w-[90%] h-full' id='viewtube'>
	// 				<div className='text-center text-3xl belanosima py-6 dark:text-white'>ViewTube</div>
	// 				<ImageSlider images={alfredough} />
	// 				<div className='px-6 py-4 '>
	// 					Alfredough is a user-friendly blogging platform that empowers you to effortlessly create, share, and manage your online content. Whether you're a seasoned author or just starting your blogging journey, Alfredough provides the tools and flexibility you need to bring your ideas to life.
	// 				</div>
	// 				<div className='w-full h-auto p-2 flex flex-row gap-2 items-center justify-end'>
	// 					<div className='text-md protest'>try it here - </div>
	// 					<Link className='border-2 rounded-lg border-[#2ea380] bg-white px-4 py-[4px] mooli'>Alfredough</Link>
	// 				</div>
	// 			</div>

	// 			<div className='w-[90%] h-full' id='weatherly'>

	// 			</div>

	// 			<div className='w-[90%] h-full' id='evoting'>

	// 			</div>

	// 		</div>
	// 	</div>
	// </>
  )
}

export default Project