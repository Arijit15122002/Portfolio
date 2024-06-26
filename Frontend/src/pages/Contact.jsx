import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';
import useTheme from '../context/context'

function Contact () {

	const theme = useTheme();

	const [openForm, setOpenForm] = React.useState(false)

	const formOpen = () => {
		setOpenForm(!openForm)
	}

	const formRef = useRef();

	const sendEmail = (e) => {
	
		emailjs.sendForm(
			`${import.meta.env.VITE_SERVICE_ID}`, 
			`${import.meta.env.VITE_TEMPLATE_ID}`, 
			formRef.current, {
				publicKey: `${import.meta.env.VITE_PUBLIC_KEY}`,
			}
		)
		.then(
			(result) => {
				if(result.text === 'OK'){

					formOpen()

					toast.success("Your message sent successfully")

					const form = formRef.current;
					form.elements['user_name'].value = '';
					form.elements['user_email'].value = '';
					form.elements['message'].value = '';

				}
			},
			(error) => {
				console.log('FAILED...', error.text);
			}
		);
	};


  return (
    <div className='w-full h-[100vh] flex justify-center items-end relative'>
		<Toaster />
		<div className={`${openForm ? 'formShow' : 'formHidden'} fixed top-0 left-0 w-full h-full bg-[#232323]/50 dark:bg-[#ffffff]/40 backdrop-blur-md`}>
			<div className='mt-[60px] w-full h-[calc(100vh-60px)] flex justify-center items-center'>
				<form action=""
				ref = {formRef}
				className='w-[85%] max-w-[500px] h-[80%] sm:h-[90%] bg-[#dddddd] dark:bg-[#232323] rounded-xl flex flex-col items-center relative'
				>

					<div className='absolute p-2 rounded-full bg-[#efefef] dark:bg-[#444444] right-0 top-0 m-3 cursor-pointer'
					onClick={formOpen}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={theme.theme === 'dark' ? '#dddddd' : '#232323'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
					</div>

					<div className='w-[70%] py-10 flex flex-col gap-5 dark:text-[#ffffff]'>
						<span className='text-2xl protest'>FILL THE FORM, </span>
						<span className='text-xl dosis font-bold'>AND I WILL GET BACK TO YOU [VERY] QUICKLY...</span>
					</div>



					<div className='py-4 w-full flex flex-col items-center gap-5'>
						<input type="text"
						name="user_name"
						placeholder='Name'
						className='w-[70%] py-2 px-4 bg-inherit focus:outline-none text-xl itim text-[#232323] dark:text-white border-2 border-[#dddddd] dark:border-[#232323] border-b-[#232323] dark:border-b-white' />

						<input type="email"
						name="user_email"
						placeholder='Email'
						className='w-[70%] py-2 px-4 bg-inherit focus:outline-none text-xl itim text-[#232323] dark:text-white border-2 border-[#dddddd] dark:border-[#232323] border-b-[#232323] dark:border-b-white' />

						<textarea
						placeholder='Brief your IDEA here...'
						name="message"
						className='w-[70%] h-[180px] md:h-[130px] max-h-[180px] py-2 px-4 bg-[#eeeeee] dark:bg-[#444444] rounded-3xl focus:outline-none text-xl itim text-[#232323] dark:text-white '
						/>

						<div className='bg-[#232323] dark:bg-[#efefef] text-white dark:text-[#232323] anton text-xl px-6 py-3 rounded-md shadow-md shadow-black/70 cursor-pointer' onClick={sendEmail}>
							Submit
						</div>

					</div>
				</form>
			</div>
		</div>

	 	<div className='w-[90%] h-[90%] flex flex-col items-center justify-center gap-4'>
			<div className='w-auto mx-auto text-8xl md:text-9xl flex flex-col md:flex-row md:gap-12'>
				<div className='text-[#111111] dark:text-[#ffffff]'>
					<span className='cedarville font-semibold'>S</span><span className='protest'>IT</span>
				</div>
				<div className='monoton font-semibold text-[#232323] dark:text-[#ffffff]'>
					TIGHT
				</div>
			</div>
			<div className='w-full h-auto py-6 rounded-3xl flex flex-col items-center justify-center gap-20 md:gap-20'>
				<div className='w-full max-w-[500px] flex flex-row gap-5 items-center'>
					<div className='text-black dark:text-white text-2xl dosis font-bold w-[50%]'>
						HAVE AN IDEA?
					</div>
					<div className='flex justify-end w-[50%]'>
						<div className='bg-[#232323] dark:bg-[#efefef] inline-block px-4 py-2 text-2xl itim text-[#ffffff] dark:text-[#111111] rounded-md cursor-pointer shadow-md shadow-black/30'
						onClick={formOpen}>
							LET'S TALK
						</div>
					</div>
				</div>
				<div className='w-full max-w-[1200px] flex flex-col lg:flex-row items-center justify-between'>
					<div className='text-[#232323] dark:text-[#fefefe] text-7xl anton flex flex-col gap-10'>
						<div className='flex flex-col gap-2'>
							<div className=''>Let's chat </div>
							<div>WE REPLY FAST</div>
						</div>
						<div className='flex flex-row gap-5 items-center'>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
							<div className='text-xl anton underline'>
								<a href="mailto:K9mZ7@example.com">biswasarijit2002@gmail.com</a>
							</div>
						</div>
					</div>
					<div className='w-auto h-auto flex flex-col justify-center gap-4 mt-10 text-[#232323] dark:text-[#efefef] lg:hidden'>
						<div className='inline-block text-2xl protest'>
							Connect with me <span className='playwrite font-bold'>on...</span>
						</div>
						<div className='flex flex-row gap-5 mx-6'>
							<a href='https://www.facebook.com/profile.php?id=100034648763409' className='p-3 bg-[#cbcbcb] dark:bg-[#232323] rounded-full cursor-pointer'>
								<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
							</a>
							<a href='https://www.instagram.com/chord_s_/' className='p-3 bg-[#cbcbcb] dark:bg-[#232323] rounded-full cursor-pointer'>
								<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
							</a>
							<a href='https://www.linkedin.com/in/biswas2002/' className='p-3 bg-[#cbcbcb] dark:bg-[#232323] rounded-full cursor-pointer'>
								<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
							</a>
						</div>
					</div>
					<div className='w-auto h-auto lg:flex flex-col justify-center items-center gap-5 text-[#232323] dark:text-[#efefef] hidden'>
						<div className='inline-block text-3xl protest'>
							Connect with me <span className='playwrite font-bold'>on...</span>
						</div>
						<div className='flex flex-row gap-5'>
							<a href='https://www.facebook.com/profile.php?id=100034648763409' className='p-3 bg-[#cbcbcb] dark:bg-[#111111] rounded-full cursor-pointer flex flex-row gap-3 protest items-center'>
								<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
								<div>
									FACEBOOK
								</div>
							</a>
							<a href='https://www.instagram.com/chord_s_/' className='p-3 bg-[#cbcbcb] dark:bg-[#111111] rounded-full cursor-pointer flex flex-row gap-3 protest items-center'>
								<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
								<div>
									INSTAGRAM
								</div>
							</a>

							<a href='https://www.linkedin.com/in/biswas2002/' className='p-3 bg-[#cbcbcb] dark:bg-[#111111] rounded-full cursor-pointer flex flex-row gap-3 protest items-center'>
								<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
								<div>
									LINKEDIN
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
  )
}

export default Contact