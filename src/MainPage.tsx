import { ThreeDimensionComponent, } from 'components/ThreeDimensionComponent/ThreeDimensionComponent'
import { gsap, } from 'gsap'
import { ScrollToPlugin, } from 'gsap/ScrollToPlugin'
import { ScrollTrigger, } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef, useState, } from 'react'
import { Buttons, } from './components/ButtonComponent/Buttons'
import { FetchComponent, } from './components/FetchComponent/FetchComponent'
import { FormComponent, } from './components/FormComponent/FormComponent'
import { SelectElements, } from './components/SelectComponent/SelectElement'
import { WaveComponent, } from './components/WaveComponent/WaveComponent'
import './index.scss'

gsap.registerPlugin( ScrollTrigger, )
gsap.registerPlugin( ScrollToPlugin, )

const MainPage = () => {
 const slideContainerRef = useRef<any>()
 const [currentSlide, setCurrentSlide, ] = useState<number>( 1, )

 const [pageHeight, setPageHeight, ] = useState( window.innerHeight, )

 const updatePageHeight = () => setPageHeight( window.innerHeight, )

 /*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ! TODO Fix bug with resizing (decrease size) - it don't
 ! update height
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
 useEffect( () => {
  window.addEventListener( 'resize', updatePageHeight, )

  gsap.set( slideContainerRef.current, {
   height: `${pageHeight} px`,
   scrollTo: {
    y: `.slide-${currentSlide}`,
   },
  }, )

  return () => window.removeEventListener( 'resize', updatePageHeight, )
 }, [], )

 const goToNextSlide = () => {
  gsap.to( slideContainerRef.current, {
   duration: 1,
   scrollTo: {
    y: `.slide-${currentSlide + 1}`,
   },
  }, )
  setCurrentSlide( currentSlide + 1, )
 }

 const goToPreviousSlide = () => {
  gsap.to( slideContainerRef.current, {
   duration: 1,
   scrollTo: {
    y: `.slide-${currentSlide - 1}`,
   },
  }, )
  setCurrentSlide( currentSlide - 1, )
 }

 const handleGoToNextSlide = () => goToNextSlide()
 const handleGoToPreviousSlide = () => goToPreviousSlide()

 return (
  <React.Fragment>
   <main className='slides-container' ref={slideContainerRef}>
    <section className='slide slide-1'>
     <ThreeDimensionComponent />
     <button className='btn go-next' onClick={handleGoToNextSlide}>
      Next
     </button>
    </section>
    <section className='slide slide-2'>
     <div className='slide-2-flex-item'>
      <Buttons />
     </div>
     <div className='slide-2-flex-item container__select'>
      <SelectElements />
     </div>
     <div className='slide-2-flex-item'>
      <FormComponent />
     </div>
     <button className='btn go-next' onClick={handleGoToNextSlide}>
      Next
     </button>
     <button className='btn go-prev' onClick={handleGoToPreviousSlide}>
      Previous
     </button>
    </section>
    <section className='slide slide-3'>
     <WaveComponent />
     <button
      className='btn go-prev'
      onClick={handleGoToPreviousSlide}
      style={{ position: 'absolute', top: '2rem', right: '2rem', }}
     >
      Previous
     </button>
    </section>
    <section className='slide slide-4'>
     <FetchComponent />
    </section>
   </main>
  </React.Fragment>
 )
}

export { MainPage, }
