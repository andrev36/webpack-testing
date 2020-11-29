import { ThreeDimensionComponent, } from 'components/ThreeDimensionComponent/ThreeDimensionComponent'
import { gsap, } from 'gsap'
import { ScrollToPlugin, } from 'gsap/ScrollToPlugin'
import { ScrollTrigger, } from 'gsap/ScrollTrigger'
import React, { useEffect, useState, } from 'react'
import { Buttons, } from './components/ButtonComponent/Buttons'
import { FormComponent, } from './components/FormComponent/FormComponent'
import { SelectElements, } from './components/SelectComponent/SelectElement'
import { WaveComponent, } from './components/WaveComponent/WaveComponent'
import './index.scss'
const BackgroundPicture = require( './assets/images/background/background.png', ).default

gsap.registerPlugin( ScrollTrigger, )
gsap.registerPlugin( ScrollToPlugin, )

const MainPage = () => {
 const [currentSlide, setCurrentSlide, ] = useState<number>( 1, )

 const [pageHeight, setPageHeight, ] = useState( window.innerHeight, )

 const updatePageHeight = () => setPageHeight( window.innerHeight, )

 /*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ! TODO Fix bug with resizing (decrease size) - it don't
 ! update height
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
 useEffect( () => {
  window.addEventListener( 'resize', updatePageHeight, )
  gsap.to( '.slides-container', {
   duration: 0.1,
   scrollTo: {
    y: `.slide-${currentSlide}`,
   },
  }, )

  return () => window.removeEventListener( 'resize', updatePageHeight, )
 }, [ window.innerHeight, ], )

 const goToSlide = ( slide: number, ) => {
  setCurrentSlide( slide, )
  gsap.to( '.slides-container', {
   duration: 1,
   scrollTo: {
    y: `.slide-${slide}`,
   },
  }, )
  setCurrentSlide( slide, )
 }

 const handleGoToFirstSlide = () => goToSlide( 1, )

 const handleGoToSecondSlide = () => {
  goToSlide( 2, )
  gsap.fromTo(
   '.container-increment',
   { x: '-=100', opacity: 0, },
   {
    duration: 3,
    opacity: 1,
    stagger: 0.2,
    x: '0',
   },
  )
  gsap.fromTo(
   '.container-decrement',
   { x: '+=100', opacity: 0, },
   {
    duration: 3,
    opacity: 1,
    stagger: 0.2,
    x: '0',
   },
  )
  gsap.fromTo(
   '.heading__picked-color',
   { x: '-=100', opacity: 0, },
   {
    duration: 3,
    opacity: 1,
    stagger: 0.2,
    x: '0',
   },
  )
  gsap.fromTo(
   '.select-wrapper',
   { x: '+=100', opacity: 0, },
   {
    duration: 3,
    opacity: 1,
    stagger: 0.2,
    x: '0',
   },
  )
  gsap.from( '.container-form', {
   duration: 3.5,
   ease: 'Back.easeOut',
   rotationX: 100,
   transformOrigin: '50% 0',
  }, )
 }

 const handleGoToThirdSlide = () => {
  goToSlide( 3, )
  gsap.fromTo(
   '.container-wave__btn-wave',
   {
    autoAlpha: 0,
    duration: 2,
    opacity: 0,
    x: 100,
   },
   {
    autoAlpha: 1,
    opacity: 1,
    x: 0,
   },
  )
 }

 return (
  <React.Fragment>
   <main className='slides-container'>
    <section className='slide slide-1'>
     <img
      src={BackgroundPicture}
      alt='background'
      className='slide-1__background-img'
     />
     <ThreeDimensionComponent />
     <header className='btn-container-next-prev'>
      <button
       className='btn btn-go-next-slide-1'
       onClick={handleGoToSecondSlide}
      >
       Next
      </button>
     </header>
    </section>
    <section className='slide slide-2'>
     <div className='slide-2-flex-item'>
      <Buttons />
     </div>
     <div className='slide-2-flex-item'>
      <SelectElements />
     </div>
     <div className='slide-2-flex-item'>
      <FormComponent />
     </div>
     <header className='btn-container-next-prev'>
      <button
       className='btn btn-go-prev-slide-2'
       onClick={handleGoToFirstSlide}
      >
       Previous
      </button>
      <button
       className='btn btn-go-next-slide-2'
       onClick={handleGoToThirdSlide}
      >
       Next
      </button>
     </header>
    </section>
    <section className='slide slide-3'>
     <WaveComponent />
     <button
      className='btn btn-go-prev-slide-3'
      onClick={handleGoToSecondSlide}
     >
      Previous
     </button>
    </section>
   </main>
  </React.Fragment>
 )
}

export { MainPage, }
