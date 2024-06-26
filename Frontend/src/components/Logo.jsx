import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Logo () {
return (
	<>
		<Link to={'/'}>
			<div className='w-[50px] h-[50px] bg-white dark:bg-black text-black dark:text-white anton rounded-lg flex flex-row items-center justify-center'>
				<div className=' text-2xl'>AB</div>
			</div>
		</Link>
	</>
)
}

export default Logo