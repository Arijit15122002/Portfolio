import React, { useState } from 'react'
import useTheme from '../context/context'

function ImageSlider ({images}) {

    const {theme} = useTheme()
    const [index, setIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = index === 0
        const newIndex = isFirstSlide ? images.length - 1 : index - 1
        setIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = index === images.length - 1
        const newIndex = isLastSlide ? 0 : index + 1
        setIndex(newIndex)
    }

  return (
    <div className='w-full h-[30%] sm:h-[45%] md:h-[58%] lg:h-[45%] flex flex-col items-center justify-center'>
        <div className='w-full h-[calc(100vw*0.4)] md:h-[calc(100vw*0.42)] lg:h-[calc(100vw*0.)]  bg-[#232323] rounded-2xl bg-center bg-cover duration-500 flex flex-row gap-[90%] items-center justify-center' style={{
          backgroundImage: `url(${images[index].url})`
        }}>
            <div className='p-2 bg-black/80 dark:bg-white/70 rounded-full hover:scale-110 duration-200 cursor-pointer' onClick={prevSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={theme==='dark' ? 'black' : 'white'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
            </div>
            <div className='p-2 bg-black/80 dark:bg-white/70 rounded-full hover:scale-110 duration-200 cursor-pointer' onClick={nextSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={theme==='dark' ? 'black' : 'white'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
            </div>
        </div>
    </div>
  )
}

export default ImageSlider