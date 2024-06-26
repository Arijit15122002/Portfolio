import React from 'react'
import { DotButton, useDotButton } from './CarouselDotButtons'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './CarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

const Carousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className='z-0'>
      <section className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((project) => (
            <div className="embla__slide w-[80%]" key={project}>
              {project}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute w-full top-[45%] flex flex-col justify-center items-center">
        <div className="embla__buttons w-[102%] flex flex-row justify-between ">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

          <div className="embla__dots flex flex-row absolute -bottom-[300px]">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={'embla__dot'.concat(
                  index === selectedIndex ? ' embla__dot--selected' : ''
                )}
              />
            ))}
          </div>
      </div>
    </section>
    </div>
  )
}

export default Carousel
