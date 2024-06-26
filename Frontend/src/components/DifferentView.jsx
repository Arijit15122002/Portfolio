import React, {useEffect, useRef} from 'react'
// import AOS from 'aos'
// import 'aos/dist/aos.css'
import '../App.css'

import useTheme from '../context/context'


function MobileView () {
    const theme = useTheme()

    const observerRef = useRef(null)
    const observerRef2 = useRef(null)

    useEffect(() => {
		observerRef.current = new IntersectionObserver((entries) => {
		  entries.forEach((entry) => {
			if (entry.isIntersecting) {
			  entry.target.classList.add('show1');
			} else {
			  entry.target.classList.remove('show1');
			}
		  });
		});
		const hiddenElements = document.querySelectorAll('.customizedHidden1');
		hiddenElements.forEach((el) => observerRef.current.observe(el));
	  
		return () => {
		  if (observerRef.current) {
			observerRef.current.disconnect();
		    }
		};
    }, []);

    useEffect(() => {
    observerRef2.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show2');
        } else {
            entry.target.classList.remove('show2');
        }
        });
    });
    const hiddenElements = document.querySelectorAll('.customizedHidden2');
    hiddenElements.forEach((el) => observerRef2.current.observe(el));
    
    return () => {
        if (observerRef2.current) {
        observerRef2.current.disconnect();
        }
    };
    }, []);

    return (
        <>
            <div className='w-full h-auto max-w-[400px] bg-[#cccccc] dark:bg-[#232323] p-3 rounded-3xl shadow-md shadow-black/30 flex flex-col gap-3 customizedHidden1' data-aos="fade-up">
                <div className='flex flex-row gap-3 items-center'>
                    <div className='p-2 bg-[#dddddd] dark:bg-[#333333] rounded-xl inline-block'>
                        <svg fill={theme.theme === 'dark' ? '#dddddd' : '#232323'} width="50px" height="50px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <title>react</title>
                    <path d="M14.313 22.211c0.55 0.025 1.112 0.043 1.681 0.043 0.575 0 1.143-0.012 1.7-0.043-0.557 0.72-1.107 1.357-1.689 1.964l0.008-0.008c-0.579-0.6-1.135-1.238-1.659-1.902l-0.041-0.054zM8.615 21.411c1.083 0.275 2.404 0.509 3.752 0.653l0.131 0.011c0.825 1.133 1.659 2.13 2.554 3.068l-0.011-0.012c-1.311 1.463-3.080 2.491-5.081 2.86l-0.055 0.008c-0.004 0-0.008 0-0.012 0-0.248 0-0.482-0.061-0.687-0.169l0.008 0.004c-0.832-0.475-1.193-2.292-0.912-4.627 0.067-0.575 0.177-1.18 0.312-1.797zM23.398 21.398c0.118 0.474 0.229 1.078 0.308 1.692l0.009 0.086c0.287 2.334-0.067 4.149-0.892 4.634-0.184 0.102-0.404 0.162-0.638 0.162-0.023 0-0.046-0.001-0.069-0.002l0.003 0c-2.053-0.375-3.821-1.396-5.129-2.841l-0.007-0.008c0.879-0.923 1.707-1.918 2.466-2.965l0.058-0.084c1.476-0.154 2.799-0.392 4.088-0.717l-0.197 0.042zM9.784 17.666c0.25 0.49 0.512 0.978 0.8 1.468q0.431 0.731 0.881 1.428c-0.868-0.127-1.706-0.287-2.507-0.482 0.225-0.787 0.507-1.602 0.825-2.416zM22.212 17.641c0.331 0.821 0.612 1.64 0.845 2.434-0.8 0.196-1.645 0.362-2.519 0.487 0.3-0.469 0.6-0.952 0.881-1.447 0.281-0.487 0.544-0.985 0.795-1.475zM7.619 12.292c0.436 1.478 0.904 2.714 1.449 3.906l-0.075-0.182c-0.466 1.005-0.927 2.234-1.305 3.499l-0.052 0.205c-0.706-0.217-1.274-0.43-1.827-0.669l0.115 0.044c-2.164-0.921-3.564-2.132-3.564-3.092s1.4-2.177 3.564-3.094c0.525-0.225 1.1-0.428 1.694-0.617zM24.358 12.287c0.605 0.187 1.18 0.396 1.718 0.622 2.164 0.925 3.564 2.134 3.564 3.094-0.006 0.96-1.406 2.174-3.57 3.093-0.525 0.225-1.1 0.427-1.693 0.616-0.44-1.483-0.908-2.718-1.451-3.912l0.076 0.188c0.464-1.004 0.926-2.233 1.303-3.498l0.053-0.206zM20.53 11.444c0.869 0.129 1.706 0.287 2.507 0.484-0.225 0.79-0.506 1.602-0.825 2.416-0.25-0.487-0.512-0.978-0.8-1.467-0.281-0.49-0.581-0.967-0.881-1.432zM11.458 11.444c-0.3 0.471-0.6 0.953-0.88 1.45-0.281 0.487-0.544 0.977-0.794 1.467-0.331-0.82-0.612-1.637-0.845-2.433 0.8-0.187 1.643-0.354 2.518-0.482zM16 11.126c0.925 0 1.846 0.042 2.752 0.116q0.761 1.091 1.478 2.324 0.697 1.2 1.272 2.432c-0.385 0.819-0.807 1.637-1.266 2.437-0.475 0.825-0.966 1.61-1.475 2.337-0.91 0.079-1.832 0.122-2.762 0.122-0.925 0-1.846-0.044-2.752-0.116-0.507-0.727-1.002-1.505-1.478-2.324q-0.697-1.2-1.272-2.432c0.379-0.821 0.807-1.641 1.266-2.442 0.475-0.825 0.966-1.607 1.475-2.334 0.91-0.080 1.832-0.122 2.762-0.122zM15.981 7.845c0.58 0.6 1.136 1.237 1.659 1.901l0.040 0.053c-0.55-0.025-1.112-0.042-1.681-0.042-0.575 0-1.143 0.012-1.7 0.042 0.556-0.72 1.106-1.357 1.689-1.964l-0.008 0.008zM9.88 4.033c2.053 0.376 3.82 1.397 5.129 2.841l0.007 0.008c-0.879 0.924-1.707 1.919-2.466 2.968l-0.058 0.084c-1.475 0.153-2.798 0.389-4.086 0.714l0.196-0.042c-0.14-0.612-0.244-1.205-0.317-1.774-0.287-2.334 0.067-4.149 0.892-4.632 0.206-0.097 0.447-0.157 0.701-0.165l0.003-0zM22.090 4.008v0.008c0.013-0 0.028-0.001 0.044-0.001 0.239 0 0.464 0.059 0.662 0.163l-0.008-0.004c0.832 0.477 1.193 2.293 0.912 4.629-0.067 0.575-0.177 1.181-0.312 1.799-1.085-0.278-2.406-0.513-3.754-0.656l-0.128-0.011c-0.826-1.134-1.66-2.131-2.555-3.070l0.012 0.012c1.311-1.46 3.077-2.488 5.074-2.859l0.056-0.009zM22.096 2.646c-2.442 0.371-4.556 1.557-6.1 3.268l-0.008 0.009c-1.555-1.71-3.669-2.888-6.051-3.245l-0.056-0.007c-0.013-0-0.029-0-0.045-0-0.491 0-0.952 0.129-1.351 0.355l0.014-0.007c-1.718 0.991-2.103 4.079-1.216 7.954-3.804 1.175-6.278 3.053-6.278 5.032 0 1.987 2.487 3.87 6.302 5.036-0.88 3.89-0.487 6.983 1.235 7.973 0.378 0.217 0.832 0.344 1.315 0.344 0.022 0 0.044-0 0.065-0.001l-0.003 0c2.442-0.371 4.556-1.558 6.1-3.27l0.008-0.009c1.555 1.711 3.669 2.889 6.051 3.246l0.056 0.007c0.015 0 0.034 0 0.052 0 0.488 0 0.947-0.128 1.344-0.351l-0.014 0.007c1.717-0.99 2.103-4.078 1.216-7.954 3.79-1.165 6.264-3.047 6.264-5.029 0-1.987-2.487-3.87-6.302-5.039 0.88-3.886 0.487-6.982-1.235-7.973-0.382-0.219-0.84-0.348-1.328-0.348-0.013 0-0.026 0-0.039 0l0.002-0zM18.787 16.005c0 1.543-1.251 2.794-2.794 2.794s-2.794-1.251-2.794-2.794c0-1.543 1.251-2.794 2.794-2.794 0.772 0 1.47 0.313 1.976 0.818v0c0.506 0.506 0.818 1.204 0.818 1.976 0 0 0 0 0 0v0z"></path>
                        </svg>
                    </div>
                    <div className='text-3xl font-semibold kanit text-[#232323] dark:text-[#dddddd]'>
                        ReactJS
                    </div>
                </div>
                <div className='text-lg px-4 py-2 kanit bg-[#dddddd] dark:bg-[#333333] rounded-xl text-[#232323] dark:text-[#dddddd]'>
                    React excels in crafting performant UIs with reusable components. This keeps code clean and ensures smooth user experiences.
                </div>
            </div>

            <div className='w-full h-auto max-w-[400px] bg-[#cccccc] dark:bg-[#232323] p-3 rounded-3xl shadow-md shadow-black/30 flex flex-col gap-3 customizedHidden2'>
                <div className='flex flex-row gap-3 items-center'>
                    <div className='p-2 bg-[#dddddd] dark:bg-[#333333] rounded-xl inline-block'>
                        <svg fill={theme.theme === 'dark' ? '#dddddd' : '#232323'} width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"/></svg>
                    </div>
                    <div className='text-3xl font-semibold kanit text-[#232323] dark:text-[#dddddd]'>
                        Tailwind CSS
                    </div>
                </div>
                <div className='text-lg px-4 py-2 kanit bg-[#dddddd] dark:bg-[#333333] rounded-xl text-[#232323] dark:text-[#dddddd]'>
                    Let's me rapidly build responsive UIs with utility classes. Eliminate bulky CSS frameworks for a streamlined workflow.
                </div>
            </div>

            <div className='w-full h-auto max-w-[400px] bg-[#cccccc] dark:bg-[#232323] p-3 rounded-3xl shadow-md shadow-black/30 flex flex-col gap-3 customizedHidden1' >
                <div className='flex flex-row gap-3 items-center'>
                    <div className='p-2 bg-[#dddddd] dark:bg-[#333333] rounded-xl inline-block'>
                    <svg fill={theme.theme === 'dark' ? '#dddddd' : '#232323'} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width="50px"
                    height="50px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                    <g id="5151e0c8492e5103c096af88a51f17e3">
                    <path display="inline" d="M482.585,147.869v216.113c0,14.025-7.546,27.084-19.672,34.143L275.665,506.241 c-5.989,3.474-12.782,5.259-19.719,5.259c-6.838,0-13.649-1.785-19.639-5.259l-62.521-36.99c-9.326-5.207-4.775-7.059-1.692-8.128
                    c12.454-4.322,14.973-5.318,28.268-12.863c1.387-0.793,3.216-0.483,4.647,0.343l48.031,28.519c1.741,0.981,4.2,0.981,5.801,0
                    l187.263-108.086c1.744-0.996,2.862-2.983,2.862-5.053V147.869c0-2.117-1.118-4.094-2.906-5.163L258.874,34.716
                    c-1.726-1.01-4.03-1.01-5.768,0L65.962,142.736c-1.818,1.04-2.965,3.079-2.965,5.133v216.113c0,2.069,1.146,4.009,2.954,4.99
                    l51.299,29.654c27.829,13.903,44.875-2.485,44.875-18.956V166.309c0-3.017,2.423-5.396,5.439-5.396h23.747
                    c2.969,0,5.429,2.378,5.429,5.396v213.362c0,37.146-20.236,58.454-55.452,58.454c-10.816,0-19.347,0-43.138-11.713l-49.098-28.287
                    c-12.133-6.995-19.638-20.117-19.638-34.143V147.869c0-14.043,7.505-27.15,19.638-34.135L236.308,5.526
                    c11.85-6.701,27.608-6.701,39.357,0l187.248,108.208C475.039,120.748,482.585,133.826,482.585,147.869z M321.171,343.367
                    c-55.88,0-68.175-14.048-72.294-41.836c-0.477-2.966-3.018-5.175-6.063-5.175h-27.306c-3.382,0-6.096,2.703-6.096,6.104
                    c0,35.56,19.354,77.971,111.759,77.971c66.906,0,105.269-26.339,105.269-72.343c0-45.623-30.827-57.76-95.709-66.35
                    c-65.579-8.678-72.243-13.147-72.243-28.508c0-12.661,5.643-29.581,54.216-29.581c43.374,0,59.365,9.349,65.94,38.576
                    c0.579,2.755,3.083,4.765,5.923,4.765h27.409c1.7,0,3.315-0.73,4.47-1.943c1.158-1.28,1.773-2.947,1.611-4.695
                    c-4.241-50.377-37.713-73.844-105.354-73.844c-60.209,0-96.118,25.414-96.118,68.002c0,46.217,35.729,59,93.5,64.702
                    c69.138,6.782,74.504,16.883,74.504,30.488C384.589,333.299,365.655,343.367,321.171,343.367z">
                    </path></g>
                    </svg>
                    </div>
                    <div className='text-3xl font-semibold kanit text-[#232323] dark:text-[#dddddd]'>
                        NodeJS
                    </div>
                </div>
                <div className='text-lg px-4 py-2 kanit bg-[#dddddd] dark:bg-[#333333] rounded-xl text-[#232323] dark:text-[#dddddd]'>
                    Power web applications with JavaScript on the server. Efficient and scalable for building performant backends.
                </div>
            </div>

            <div className='w-full h-auto max-w-[400px] bg-[#cccccc] dark:bg-[#232323] p-3 rounded-3xl shadow-md shadow-black/30 flex flex-col gap-3 customizedHidden2'>
                <div className='flex flex-row gap-3 items-center'>
                    <div className='p-2 bg-[#dddddd] dark:bg-[#333333] rounded-xl inline-block'>
                    <svg fill={theme.theme === 'dark' ? '#dddddd' : '#232323'} width="50px" height="50px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <title>mongodb</title>
                    <path d="M15.821 23.185s0-10.361 0.344-10.36c0.266 0 0.612 13.365 0.612 13.365-0.476-0.056-0.956-2.199-0.956-3.005zM22.489 12.945c-0.919-4.016-2.932-7.469-5.708-10.134l-0.007-0.006c-0.338-0.516-0.647-1.108-0.895-1.732l-0.024-0.068c0.001 0.020 0.001 0.044 0.001 0.068 0 0.565-0.253 1.070-0.652 1.409l-0.003 0.002c-3.574 3.034-5.848 7.505-5.923 12.508l-0 0.013c-0.001 0.062-0.001 0.135-0.001 0.208 0 4.957 2.385 9.357 6.070 12.115l0.039 0.028 0.087 0.063q0.241 1.784 0.412 3.576h0.601c0.166-1.491 0.39-2.796 0.683-4.076l-0.046 0.239c0.396-0.275 0.742-0.56 1.065-0.869l-0.003 0.003c2.801-2.597 4.549-6.297 4.549-10.404 0-0.061-0-0.121-0.001-0.182l0 0.009c-0.003-0.981-0.092-1.94-0.261-2.871l0.015 0.099z"></path>
                    </svg>
                    </div>
                    <div className='text-3xl font-semibold kanit text-[#232323] dark:text-[#dddddd]'>
                        MongoDB
                    </div>
                </div>
                <div className='text-lg px-4 py-2 kanit bg-[#dddddd] dark:bg-[#333333] rounded-xl text-[#232323] dark:text-[#dddddd]'>
                    Flexible NoSQL database for storing and managing data. Scales effortlessly for modern web applications.
                </div>
            </div>

            <div className='w-full h-auto max-w-[400px] bg-[#cccccc] dark:bg-[#232323] p-3 rounded-3xl shadow-md shadow-black/30 flex flex-col gap-3 customizedHidden1'>
                <div className='flex flex-row gap-3 items-center'>
                    <div className='p-2 bg-[#dddddd] dark:bg-[#333333] rounded-xl inline-block'>
                    <svg fill={theme.theme === 'dark' ? '#dddddd' : '#232323'} width="50px" height="50px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"/></svg>
                    </div>
                    <div className='text-3xl font-semibold kanit text-[#232323] dark:text-[#dddddd]'>
                        Express
                    </div>
                </div>
                <div className='text-lg px-4 py-2 kanit bg-[#dddddd] dark:bg-[#333333] rounded-xl text-[#232323] dark:text-[#dddddd]'>
                    This powerful framework for Node.js simplifies building APIs and web applications. With Express, I can focus on core functionalities, leaving the boilerplate code behind.
                </div>
            </div>

            <div className='w-full h-auto max-w-[400px] bg-[#cccccc] dark:bg-[#232323] p-3 rounded-3xl shadow-md shadow-black/30 flex flex-col gap-3 customizedHidden2'>
                <div className='flex flex-row gap-3 items-center'>
                    <div className='p-2 bg-[#dddddd] dark:bg-[#333333] rounded-xl inline-block'>
                    <svg width="50px" height="50px" viewBox="-1 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Dribbble-Light-Preview" transform="translate(-61.000000, -7639.000000)" fill={theme.theme === 'dark' ? '#dddddd' : '#232323'}>
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path d="M19.4350881,7485 L19.4279481,7485 L10.8119794,7485 L11.0180201,7487 L19.2300674,7487 C19.109707,7488.752 18.7455658,7492.464 18.6119454,7494.153 L13.99949,7495.451 L13.99949,7495.455 L13.98929,7495.46 L9.37377458,7493.836 L9.05757353,7490 L11.3199411,7490 L11.4800816,7492.063 L13.99337,7493 L13.99949,7493 L16.5086984,7492.1 L16.7667592,7489 L8.95659319,7489 C8.91885306,7488.599 8.43333144,7483.392 8.34867116,7483 L19.6370488,7483 C19.5738086,7483.66 19.5095484,7484.338 19.4350881,7485 L19.4350881,7485 Z M5,7479 L6.63812546,7497.148 L13.98929,7499 L21.3598345,7497.111 L23,7479 L5,7479 Z" id="html-[#124]">
                    </path></g></g></g>
                    </svg>
                    </div>
                    <div className='text-3xl font-semibold kanit text-[#232323] dark:text-[#dddddd]'>
                        HTML
                    </div>
                </div>
                <div className='text-lg px-4 py-2 kanit bg-[#dddddd] dark:bg-[#333333] rounded-xl text-[#232323] dark:text-[#dddddd]'>
                    The foundation of web development. It lets me structure and present content, creating the building blocks for engaging online experiences.
                </div>
            </div>

            <div className='w-full h-auto max-w-[400px] bg-[#cccccc] dark:bg-[#232323] p-3 rounded-3xl shadow-md shadow-black/30 flex flex-col gap-3 customizedHidden1'>
                <div className='flex flex-row gap-3 items-center'>
                    <div className='p-2 bg-[#dddddd] dark:bg-[#333333] rounded-xl inline-block'>
                    <svg fill={theme.theme === 'dark' ? '#dddddd' : '#232323'} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width="50px"
	                height="50px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                    <g id="c133de6af664cd4f011a55de6b001a2b">
                    <path display="inline" d="M204.064,46.682v22.018h-56.302V0.501h56.302v24.13h-32.172v22.051H204.064z M261.941,24.631h22.492
                    V0.501h-56.308c0,0,0,12.112,0,24.13c7.533,7.533,11.461,11.139,22.356,22.034c-6.369,0-22.356,0.022-22.356,0.021v22.014h56.308
                    V46.682L261.941,24.631z M341.746,24.631h22.49V0.501H307.93c0,0,0,12.112,0,24.13c7.531,7.533,11.461,11.139,22.355,22.034
                    c-6.365,0-22.355,0.022-22.355,0.021v22.014h56.307V46.682L341.746,24.631z M438.395,101.112l-34.203,370.486l-148.193,39.9
                    l-148.196-39.9L73.605,101.112H438.395z M369.477,176.444H255.865h-115.62l5.529,44.739h110.091h6.184l-6.184,2.574
                    l-106.067,44.177l3.518,43.73l102.549,0.333l54.963,0.175l-3.521,58.311l-51.442,14.484v-0.046l-0.422,0.116l-49.684-12.542
                    l-3.015-36.195h-0.164h-46.085h-0.162l6.032,69.876l93.5,27.649v-0.05l0.168,0.05l93-27.146L361.1,267.935H255.865h-0.26
                    l0.26-0.112l109.086-46.639L369.477,176.444z"></path></g></svg>
                    </div>
                    <div className='text-3xl font-semibold kanit text-[#232323] dark:text-[#dddddd]'>
                        CSS
                    </div>
                </div>
                <div className='text-lg px-4 py-2 kanit bg-[#dddddd] dark:bg-[#333333] rounded-xl text-[#232323] dark:text-[#dddddd]'>
                    The stylist of the web. It breathes life into HTML, allowing me to control the visual appearance and user experience of web pages.
                </div>
            </div>

            <div className='w-full h-auto max-w-[400px] bg-[#cccccc] dark:bg-[#232323] p-3 rounded-3xl shadow-md shadow-black/30 flex flex-col gap-3 customizedHidden2'>
                <div className='flex flex-row gap-3 items-center'>
                    <div className='p-2 bg-[#dddddd] dark:bg-[#333333] rounded-xl inline-block'>
                    <svg fill={theme.theme === 'dark' ? '#dddddd' : '#232323'}  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width="50px"
	                height="50px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                    <g id="5151e0c8492e5103c096af88a51e75c7">

                    <path display="inline" fill-rule="evenodd" clip-rule="evenodd" d="M1.008,0.5C0.438,0.583,0.48,1.27,0.521,1.958
                    c0,169.668,0,339.31,0,508.974c169.364,1.135,340.808,0.162,510.979,0.486c0-170.309,0-340.61,0-510.918
                    C341.342,0.5,171.167,0.5,1.008,0.5z M259.893,452.167c-11.822,11.919-30.478, 18.938-53.429,18.938
                    c-37.643,0-58.543-18.34-71.884-43.711c12.842-8.2,25.966-16.122,39.344-23.795c5.456,15.262,23.886,32.42,44.683,21.857
                    c13.183-6.699,11.661-27.01,11.661-49.054c0-45.773,0-98.578,0-139.872c-0.042-0.688-0.083-1.375,0.482-1.458
                    c15.707,0,31.413,0,47.116,0c0,36.788,0,78.402,0,117.529C277.866,395.199,280.91,430.988,259.893,452.167z M470.696,409.917
                    c-2.674,39.884-35.243,61.063-79.17,61.188c-43.062,0.124-70.624-19.013-87.433-48.567c12.085-8.317,25.778-15.017,38.375-22.822
                    c10.08,15.761,27.537,30.91,53.429,28.652c16.131-1.406,34.856-14.555,24.285-34.482c-5.127-9.66-17.516-14.567-28.656-19.425
                    c-35.352-15.424-76.828-29.571-72.861-84.992c1.327-18.514,9.852-31.525,20.889-40.796c11.311-9.5,26.46-15.867,46.629-16.511
                    c36.629-1.173,56.723,15.12,70.429,37.884c-11.664,8.891-24.514,16.608-37.401,24.281c-4.229-12.995-24.644-25.658-41.772-17.969
                    c-7.789,3.493-14.788,13.761-10.684,26.224c3.66,11.115,18.589,17.199,30.599,22.344
                    C433.706,340.486,474.331,355.693,470.696,409.917z"></path></g></svg>
                    </div>
                    <div className='text-3xl font-semibold kanit text-[#232323] dark:text-[#dddddd]'>
                        JavaScript
                    </div>
                </div>
                <div className='text-lg px-4 py-2 kanit bg-[#dddddd] dark:bg-[#333333] rounded-xl text-[#232323] dark:text-[#dddddd]'>
                    Powering interactivity. It brings web pages to life, enabling dynamic behavior and user engagement.
                </div>
            </div>
        </>
    )
}

function ComputerView() {

    const theme = useTheme();

    return (
    <>
        <div className='w-[98%] mt-[20px] max-w-[850px] h-[95%] items-center mx-auto overflow-y-auto' id='scrollHome'>
            <div className='w-full h-[210px] flex flex-row items-end gap-3 my-3'>
                <div className='w-[55%] h-[85%] bg-gradient-to-br from-[#555555] to-[#cccccc] dark:to-[#394042] rounded-3xl flex flex-col shadow-md shadow-black/40'>
                    <div className='flex flex-row gap-3 items-center p-2 '>
                        <div className='p-2 bg-[#ffffff] dark:bg-[#333333] rounded-xl inline-block'>
                            <svg fill="#02b2d5" width="50px" height="50px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <title>react</title>
                            <path d="M14.313 22.211c0.55 0.025 1.112 0.043 1.681 0.043 0.575 0 1.143-0.012 1.7-0.043-0.557 0.72-1.107 1.357-1.689 1.964l0.008-0.008c-0.579-0.6-1.135-1.238-1.659-1.902l-0.041-0.054zM8.615 21.411c1.083 0.275 2.404 0.509 3.752 0.653l0.131 0.011c0.825 1.133 1.659 2.13 2.554 3.068l-0.011-0.012c-1.311 1.463-3.080 2.491-5.081 2.86l-0.055 0.008c-0.004 0-0.008 0-0.012 0-0.248 0-0.482-0.061-0.687-0.169l0.008 0.004c-0.832-0.475-1.193-2.292-0.912-4.627 0.067-0.575 0.177-1.18 0.312-1.797zM23.398 21.398c0.118 0.474 0.229 1.078 0.308 1.692l0.009 0.086c0.287 2.334-0.067 4.149-0.892 4.634-0.184 0.102-0.404 0.162-0.638 0.162-0.023 0-0.046-0.001-0.069-0.002l0.003 0c-2.053-0.375-3.821-1.396-5.129-2.841l-0.007-0.008c0.879-0.923 1.707-1.918 2.466-2.965l0.058-0.084c1.476-0.154 2.799-0.392 4.088-0.717l-0.197 0.042zM9.784 17.666c0.25 0.49 0.512 0.978 0.8 1.468q0.431 0.731 0.881 1.428c-0.868-0.127-1.706-0.287-2.507-0.482 0.225-0.787 0.507-1.602 0.825-2.416zM22.212 17.641c0.331 0.821 0.612 1.64 0.845 2.434-0.8 0.196-1.645 0.362-2.519 0.487 0.3-0.469 0.6-0.952 0.881-1.447 0.281-0.487 0.544-0.985 0.795-1.475zM7.619 12.292c0.436 1.478 0.904 2.714 1.449 3.906l-0.075-0.182c-0.466 1.005-0.927 2.234-1.305 3.499l-0.052 0.205c-0.706-0.217-1.274-0.43-1.827-0.669l0.115 0.044c-2.164-0.921-3.564-2.132-3.564-3.092s1.4-2.177 3.564-3.094c0.525-0.225 1.1-0.428 1.694-0.617zM24.358 12.287c0.605 0.187 1.18 0.396 1.718 0.622 2.164 0.925 3.564 2.134 3.564 3.094-0.006 0.96-1.406 2.174-3.57 3.093-0.525 0.225-1.1 0.427-1.693 0.616-0.44-1.483-0.908-2.718-1.451-3.912l0.076 0.188c0.464-1.004 0.926-2.233 1.303-3.498l0.053-0.206zM20.53 11.444c0.869 0.129 1.706 0.287 2.507 0.484-0.225 0.79-0.506 1.602-0.825 2.416-0.25-0.487-0.512-0.978-0.8-1.467-0.281-0.49-0.581-0.967-0.881-1.432zM11.458 11.444c-0.3 0.471-0.6 0.953-0.88 1.45-0.281 0.487-0.544 0.977-0.794 1.467-0.331-0.82-0.612-1.637-0.845-2.433 0.8-0.187 1.643-0.354 2.518-0.482zM16 11.126c0.925 0 1.846 0.042 2.752 0.116q0.761 1.091 1.478 2.324 0.697 1.2 1.272 2.432c-0.385 0.819-0.807 1.637-1.266 2.437-0.475 0.825-0.966 1.61-1.475 2.337-0.91 0.079-1.832 0.122-2.762 0.122-0.925 0-1.846-0.044-2.752-0.116-0.507-0.727-1.002-1.505-1.478-2.324q-0.697-1.2-1.272-2.432c0.379-0.821 0.807-1.641 1.266-2.442 0.475-0.825 0.966-1.607 1.475-2.334 0.91-0.080 1.832-0.122 2.762-0.122zM15.981 7.845c0.58 0.6 1.136 1.237 1.659 1.901l0.040 0.053c-0.55-0.025-1.112-0.042-1.681-0.042-0.575 0-1.143 0.012-1.7 0.042 0.556-0.72 1.106-1.357 1.689-1.964l-0.008 0.008zM9.88 4.033c2.053 0.376 3.82 1.397 5.129 2.841l0.007 0.008c-0.879 0.924-1.707 1.919-2.466 2.968l-0.058 0.084c-1.475 0.153-2.798 0.389-4.086 0.714l0.196-0.042c-0.14-0.612-0.244-1.205-0.317-1.774-0.287-2.334 0.067-4.149 0.892-4.632 0.206-0.097 0.447-0.157 0.701-0.165l0.003-0zM22.090 4.008v0.008c0.013-0 0.028-0.001 0.044-0.001 0.239 0 0.464 0.059 0.662 0.163l-0.008-0.004c0.832 0.477 1.193 2.293 0.912 4.629-0.067 0.575-0.177 1.181-0.312 1.799-1.085-0.278-2.406-0.513-3.754-0.656l-0.128-0.011c-0.826-1.134-1.66-2.131-2.555-3.070l0.012 0.012c1.311-1.46 3.077-2.488 5.074-2.859l0.056-0.009zM22.096 2.646c-2.442 0.371-4.556 1.557-6.1 3.268l-0.008 0.009c-1.555-1.71-3.669-2.888-6.051-3.245l-0.056-0.007c-0.013-0-0.029-0-0.045-0-0.491 0-0.952 0.129-1.351 0.355l0.014-0.007c-1.718 0.991-2.103 4.079-1.216 7.954-3.804 1.175-6.278 3.053-6.278 5.032 0 1.987 2.487 3.87 6.302 5.036-0.88 3.89-0.487 6.983 1.235 7.973 0.378 0.217 0.832 0.344 1.315 0.344 0.022 0 0.044-0 0.065-0.001l-0.003 0c2.442-0.371 4.556-1.558 6.1-3.27l0.008-0.009c1.555 1.711 3.669 2.889 6.051 3.246l0.056 0.007c0.015 0 0.034 0 0.052 0 0.488 0 0.947-0.128 1.344-0.351l-0.014 0.007c1.717-0.99 2.103-4.078 1.216-7.954 3.79-1.165 6.264-3.047 6.264-5.029 0-1.987-2.487-3.87-6.302-5.039 0.88-3.886 0.487-6.982-1.235-7.973-0.382-0.219-0.84-0.348-1.328-0.348-0.013 0-0.026 0-0.039 0l0.002-0zM18.787 16.005c0 1.543-1.251 2.794-2.794 2.794s-2.794-1.251-2.794-2.794c0-1.543 1.251-2.794 2.794-2.794 0.772 0 1.47 0.313 1.976 0.818v0c0.506 0.506 0.818 1.204 0.818 1.976 0 0 0 0 0 0v0z"></path>
                            </svg>
                        </div>
                        <div className='text-3xl font-semibold kanit text-[#eeeeee] dark:text-[#111111]'>
                            ReactJS
                        </div>
                    </div>
                    <div className='px-6 kanit text-[#232323] dark:text-[#eeeeee]'>
                        React excels in crafting performant UIs with reusable components. This keeps code clean and ensures smooth user experiences.
                    </div>
                </div>
                <div className='w-[43%] h-full bg-[#444444] dark:bg-[#aaaaaa] rounded-3xl flex flex-col shadow-md shadow-black/40'>
                    <div className='p-2 flex flex-row gap-3 items-center'>
                        <div className='p-2 bg-[#333333] dark:bg-[#dddddd] rounded-xl inline-block'>
                            <svg fill={theme.theme === 'dark' ? '#232323' : '#dddddd'} width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"/></svg>
                        </div>
                        <div className='text-3xl font-semibold kanit dark:text-[#232323] text-[#dddddd]'>
                            Tailwind CSS
                        </div>
                    </div>
                    <div className='px-2 kanit rounded-xl dark:text-[#232323] text-[#dddddd]'>
                        Let's me rapidly build responsive UIs with utility classes. Eliminate bulky CSS frameworks for a streamlined workflow.
                    </div>
                </div>
            </div>
            <div className='w-full h-[220px] flex flex-row items-center gap-3 my-3'>
                <div className='w-[40%] h-full bg-[#dcdadc] dark:bg-[#111111] rounded-3xl shadow-md shadow-black/40'>
                    <div className='p-4 flex flex-row gap-3 items-center'>
                        <div className='p-2 bg-[#535353] dark:bg-[#cccccc] rounded-xl inline-block'>
                            <svg fill={theme.theme === 'dark' ? '#232323' : '#dddddd'} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width="50px"
                            height="50px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                            <g id="5151e0c8492e5103c096af88a51f17e3">
                            <path display="inline" d="M482.585,147.869v216.113c0,14.025-7.546,27.084-19.672,34.143L275.665,506.241 c-5.989,3.474-12.782,5.259-19.719,5.259c-6.838,0-13.649-1.785-19.639-5.259l-62.521-36.99c-9.326-5.207-4.775-7.059-1.692-8.128
                            c12.454-4.322,14.973-5.318,28.268-12.863c1.387-0.793,3.216-0.483,4.647,0.343l48.031,28.519c1.741,0.981,4.2,0.981,5.801,0
                            l187.263-108.086c1.744-0.996,2.862-2.983,2.862-5.053V147.869c0-2.117-1.118-4.094-2.906-5.163L258.874,34.716
                            c-1.726-1.01-4.03-1.01-5.768,0L65.962,142.736c-1.818,1.04-2.965,3.079-2.965,5.133v216.113c0,2.069,1.146,4.009,2.954,4.99
                            l51.299,29.654c27.829,13.903,44.875-2.485,44.875-18.956V166.309c0-3.017,2.423-5.396,5.439-5.396h23.747
                            c2.969,0,5.429,2.378,5.429,5.396v213.362c0,37.146-20.236,58.454-55.452,58.454c-10.816,0-19.347,0-43.138-11.713l-49.098-28.287
                            c-12.133-6.995-19.638-20.117-19.638-34.143V147.869c0-14.043,7.505-27.15,19.638-34.135L236.308,5.526
                            c11.85-6.701,27.608-6.701,39.357,0l187.248,108.208C475.039,120.748,482.585,133.826,482.585,147.869z M321.171,343.367
                            c-55.88,0-68.175-14.048-72.294-41.836c-0.477-2.966-3.018-5.175-6.063-5.175h-27.306c-3.382,0-6.096,2.703-6.096,6.104
                            c0,35.56,19.354,77.971,111.759,77.971c66.906,0,105.269-26.339,105.269-72.343c0-45.623-30.827-57.76-95.709-66.35
                            c-65.579-8.678-72.243-13.147-72.243-28.508c0-12.661,5.643-29.581,54.216-29.581c43.374,0,59.365,9.349,65.94,38.576
                            c0.579,2.755,3.083,4.765,5.923,4.765h27.409c1.7,0,3.315-0.73,4.47-1.943c1.158-1.28,1.773-2.947,1.611-4.695
                            c-4.241-50.377-37.713-73.844-105.354-73.844c-60.209,0-96.118,25.414-96.118,68.002c0,46.217,35.729,59,93.5,64.702
                            c69.138,6.782,74.504,16.883,74.504,30.488C384.589,333.299,365.655,343.367,321.171,343.367z">
                            </path></g>
                            </svg>
                        </div>
                        <div className='text-3xl font-semibold kanit text-[#232323] dark:text-[#dddddd]'>
                            NodeJS
                        </div>
                    </div>
                    <div className='px-6 kanit text-[#232323] dark:text-[#cccccc]'>
                        Power web applications with JavaScript on the server. Efficient and scalable for building performant backends.
                    </div>
                </div>
                <div className='w-[60%] h-full bg-gradient-to-br from-[#46a562] via-[#9bf0b1] to-[#b7d1bf] dark:from-[#3a8747] dark:to-[#002e09] rounded-3xl shadow-md shadow-black/40'>
                    <div className='p-2 flex flex-row gap-3 items-center'>
                        <div className='p-2 bg-[#ffffff] dark:bg-[#111111] rounded-xl inline-block'>
                        <svg fill={theme.theme === 'dark' ? '#47a14d' : '#47a14d'} width="50px" height="50px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>mongodb</title>
                        <path d="M15.821 23.185s0-10.361 0.344-10.36c0.266 0 0.612 13.365 0.612 13.365-0.476-0.056-0.956-2.199-0.956-3.005zM22.489 12.945c-0.919-4.016-2.932-7.469-5.708-10.134l-0.007-0.006c-0.338-0.516-0.647-1.108-0.895-1.732l-0.024-0.068c0.001 0.020 0.001 0.044 0.001 0.068 0 0.565-0.253 1.070-0.652 1.409l-0.003 0.002c-3.574 3.034-5.848 7.505-5.923 12.508l-0 0.013c-0.001 0.062-0.001 0.135-0.001 0.208 0 4.957 2.385 9.357 6.070 12.115l0.039 0.028 0.087 0.063q0.241 1.784 0.412 3.576h0.601c0.166-1.491 0.39-2.796 0.683-4.076l-0.046 0.239c0.396-0.275 0.742-0.56 1.065-0.869l-0.003 0.003c2.801-2.597 4.549-6.297 4.549-10.404 0-0.061-0-0.121-0.001-0.182l0 0.009c-0.003-0.981-0.092-1.94-0.261-2.871l0.015 0.099z"></path>
                        </svg>
                        </div>
                        <div className='text-3xl font-semibold kanit text-[#276a2b] dark:text-[#47ff7b]'>
                            MongoDB
                        </div>
                    </div>
                    <div className='kanit px-4 text-[#276a2b] dark:text-[#b4ffc9]'>
                        Flexible NoSQL databases offer a powerful solution for storing and managing data in modern web applications, allowing for effortless scaling and adapting to ever-changing data structures and requirements.
                    </div>
                </div>
            </div>
            <div className=' w-full h-[220px] flex flex-row items-start justify-center gap-3 my-3'>
                <div className='w-[50%] h-[70%] bg-gradient-to-bl from-[#888888] rounded-3xl flex flex-col shadow-md shadow-black/40'>
                    <div className='p-2 flex flex-row gap-3 items-center'>
                        <div className='p-2 bg-[#dddddd] dark:bg-[#333333] rounded-xl inline-block'>
                        <svg fill={theme.theme === 'dark' ? '#dddddd' : '#232323'} width="50px" height="50px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"/></svg>
                        </div>
                        <div className='text-3xl font-semibold kanit text-[#232323] dark:text-[#dddddd]'>
                            Express
                        </div>
                    </div>
                    <div className='kanit px-4 text-[#232323] dark:text-[#dddddd]'>
                        Streamline web development. Build APIs and web apps faster by focusing on what matters.
                    </div>
                </div>
                <div className='w-[50%] h-full rounded-3xl bg-gradient-to-tl from-[#888888] dark:from-[#232323] dark:to-[#111111] flex flex-col shadow-md shadow-black/40'>
                    <div className='p-2 flex flex-row gap-3 items-center'>
                        <div className='p-2 dark:bg-[#ef7605] bg-[#ef7605] rounded-xl inline-block'>
                        <svg width="50px" height="50px" viewBox="-1 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Dribbble-Light-Preview" transform="translate(-61.000000, -7639.000000)" fill="#ffffff">
                        <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path d="M19.4350881,7485 L19.4279481,7485 L10.8119794,7485 L11.0180201,7487 L19.2300674,7487 C19.109707,7488.752 18.7455658,7492.464 18.6119454,7494.153 L13.99949,7495.451 L13.99949,7495.455 L13.98929,7495.46 L9.37377458,7493.836 L9.05757353,7490 L11.3199411,7490 L11.4800816,7492.063 L13.99337,7493 L13.99949,7493 L16.5086984,7492.1 L16.7667592,7489 L8.95659319,7489 C8.91885306,7488.599 8.43333144,7483.392 8.34867116,7483 L19.6370488,7483 C19.5738086,7483.66 19.5095484,7484.338 19.4350881,7485 L19.4350881,7485 Z M5,7479 L6.63812546,7497.148 L13.98929,7499 L21.3598345,7497.111 L23,7479 L5,7479 Z" id="html-[#124]">
                        </path></g></g></g>
                        </svg>
                        </div>
                        <div className='text-3xl font-semibold kanit text-[#232323] dark:text-[#dddddd]'>
                            HTML
                        </div>
                    </div>
                    <div className='px-6 kanit text-[#232323] dark:text-[#dddddd]'>
                    The foundation of web development, HTML provides the structure and language for web pages. It lets me define content, design layouts, and create the building blocks for engaging online experiences.
                        </div>
                </div>
            </div>
            <div className='w-full h-[200px] flex flex-row gap-3 my-3 justify-start'>
                <div className='w-[49%] h-[90%] bg-gradient-to-br from-[#999999] dark:from-[#222222] rounded-3xl -mt-[65px] shadow-md shadow-black/40'>
                    <div className='p-2 flex flex-row gap-3 items-center'>
                        <div className='p-2 bg-[#0f94e7] rounded-xl inline-block'>
                        <svg fill={theme.theme === 'dark' ? '#ffffff' : '#ffffff'} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width="50px"
                        height="50px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                        <g id="c133de6af664cd4f011a55de6b001a2b">
                        <path display="inline" d="M204.064,46.682v22.018h-56.302V0.501h56.302v24.13h-32.172v22.051H204.064z M261.941,24.631h22.492
                        V0.501h-56.308c0,0,0,12.112,0,24.13c7.533,7.533,11.461,11.139,22.356,22.034c-6.369,0-22.356,0.022-22.356,0.021v22.014h56.308
                        V46.682L261.941,24.631z M341.746,24.631h22.49V0.501H307.93c0,0,0,12.112,0,24.13c7.531,7.533,11.461,11.139,22.355,22.034
                        c-6.365,0-22.355,0.022-22.355,0.021v22.014h56.307V46.682L341.746,24.631z M438.395,101.112l-34.203,370.486l-148.193,39.9
                        l-148.196-39.9L73.605,101.112H438.395z M369.477,176.444H255.865h-115.62l5.529,44.739h110.091h6.184l-6.184,2.574
                        l-106.067,44.177l3.518,43.73l102.549,0.333l54.963,0.175l-3.521,58.311l-51.442,14.484v-0.046l-0.422,0.116l-49.684-12.542
                        l-3.015-36.195h-0.164h-46.085h-0.162l6.032,69.876l93.5,27.649v-0.05l0.168,0.05l93-27.146L361.1,267.935H255.865h-0.26
                        l0.26-0.112l109.086-46.639L369.477,176.444z"></path></g></svg>
                        </div>
                        <div className='text-3xl font-semibold kanit text-[#232323] dark:text-[#dddddd]'>
                            CSS
                        </div>
                    </div>
                    <div className='px-6 py-1 kanit text-[#232323] dark:text-[#dddddd]'>
                    The stylist of the web. It breathes life into HTML, allowing me to control the visual appearance and user experience of web pages.
                    </div>
                </div>
                <div className='w-[40%] h-[90%] bg-gradient-to-b from-[#444444] dark:from-[#666666] rounded-3xl flex flex-col shadow-md shadow-black/40'>
                    <div className='p-2 flex flex-row gap-3 items-center'>
                        <div className='p-2 bg-[#f5f52e]  rounded-xl inline-block'>
                        <svg fill='#232323'  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width="50px"
                        height="50px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                        <g id="5151e0c8492e5103c096af88a51e75c7">

                        <path display="inline" fill-rule="evenodd" clip-rule="evenodd" d="M1.008,0.5C0.438,0.583,0.48,1.27,0.521,1.958
                        c0,169.668,0,339.31,0,508.974c169.364,1.135,340.808,0.162,510.979,0.486c0-170.309,0-340.61,0-510.918
                        C341.342,0.5,171.167,0.5,1.008,0.5z M259.893,452.167c-11.822,11.919-30.478, 18.938-53.429,18.938
                        c-37.643,0-58.543-18.34-71.884-43.711c12.842-8.2,25.966-16.122,39.344-23.795c5.456,15.262,23.886,32.42,44.683,21.857
                        c13.183-6.699,11.661-27.01,11.661-49.054c0-45.773,0-98.578,0-139.872c-0.042-0.688-0.083-1.375,0.482-1.458
                        c15.707,0,31.413,0,47.116,0c0,36.788,0,78.402,0,117.529C277.866,395.199,280.91,430.988,259.893,452.167z M470.696,409.917
                        c-2.674,39.884-35.243,61.063-79.17,61.188c-43.062,0.124-70.624-19.013-87.433-48.567c12.085-8.317,25.778-15.017,38.375-22.822
                        c10.08,15.761,27.537,30.91,53.429,28.652c16.131-1.406,34.856-14.555,24.285-34.482c-5.127-9.66-17.516-14.567-28.656-19.425
                        c-35.352-15.424-76.828-29.571-72.861-84.992c1.327-18.514,9.852-31.525,20.889-40.796c11.311-9.5,26.46-15.867,46.629-16.511
                        c36.629-1.173,56.723,15.12,70.429,37.884c-11.664,8.891-24.514,16.608-37.401,24.281c-4.229-12.995-24.644-25.658-41.772-17.969
                        c-7.789,3.493-14.788,13.761-10.684,26.224c3.66,11.115,18.589,17.199,30.599,22.344
                        C433.706,340.486,474.331,355.693,470.696,409.917z"></path></g></svg>
                        </div>
                        <div className='text-3xl font-semibold kanit dark:text-[#232323] text-[#eeeeee]'>
                            JavaScript
                        </div>
                    </div>
                    <div className='px-4 py-1 kanit text-[#232323] dark:text-[#dddddd]'>
                    Powering interactivity. It brings web pages to life, enabling dynamic behavior and user engagement.
                    </div>
                </div>
            </div>
            <div className='w-full h-[200px] flex flex-row gap-3 my-3 justify-end'>
                <div className='w-[40%] h-[80%] bg-[#555555] dark: rounded-3xl -mt-[85px]'>
                    <div className='p-2 flex flex-row gap-3 items-center'>
                        <div className='p-2 bg-[#ffffff] dark:bg-[#333333] rounded-xl inline-block'>
                        <svg fill="#f3b012" width="50px" height="50px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
                        </div>
                        <div className='text-3xl font-semibold kanit text-[#ffffff] dark:text-[#dddddd]'>
                            LeetCode
                        </div>
                    </div>
                    <div className='px-4 py-1 kanit text-[#ffffff] dark:text-[#dddddd]'>
                        <div>
                            <span>230+</span> problems solved
                        </div>
                        <div>
                            Find me on <a href="" className='text-[#f3b012] font-semibold'>LeetCode</a>
                        </div>

                    </div>
                </div>
                <div className='w-[50%] h-[70%] flex justify-start items-start'>
                    <div className='w-[50%] h-full bg-[#232323] dark:bg-gradient-to-br from-[#cccccc] dark:to-[#232323] rounded-3xl -mt-[18px] flex justify-center items-center'>
                        <span className=' text-lg text-white dark:text-[#232323] p-6 protest'>
                            Find me on GitHub: 
                        </span>
                        <a href="" className='px-6'>
                        <svg width="50px" height="50px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Page-1" stroke="none" stroke-width="1" fill="white" fill-rule="none">
                            <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill={theme === 'dark' ? '#232323' : '#eeeeee'}>
                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                    <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]">
                                    </path>
                                </g>
                            </g>
                        </g>
                    </svg>
                        </a>

                    </div>
                </div>
            </div>
        </div>  
    </>
    )
}

export {MobileView, ComputerView}