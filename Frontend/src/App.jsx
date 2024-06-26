import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/context'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import Layout from './Layout'
import Homescreen from './pages/Homescreen'
import About from './pages/About'
import Project from './pages/Project'
import Skill from './pages/Skill'
import Contact from './pages/Contact'


function App() {
  	const [theme, setTheme] = useState('light')

	const lightMode = () => {
		setTheme('light')
	}
	const darkMode = () => {
		setTheme('dark')
	}
	useEffect(() => {
		document.querySelector('html').classList.remove('light', 'dark')
		document.querySelector('html').classList.add(theme)
	}, [theme])

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={ <Layout/> }>
				<Route path='' element={ <Homescreen/> } />
				<Route path='/about' element={ <About/> } />
				<Route path='/project' element={ <Project/> } />
				<Route path='/skill' element={ <Skill/> } />
				<Route path='/about' element={ <About/> } />
				<Route path='/contact' element={ <Contact/> } />
			</Route>
		)
	)

return (
	<>
	<ThemeProvider value={{theme, darkMode, lightMode}}>
		<RouterProvider router={router} />
	</ThemeProvider>
	</>
)
}

export default App
