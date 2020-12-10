import { gsap, } from 'gsap'
import { ScrollToPlugin, } from 'gsap/ScrollToPlugin'
import { ScrollTrigger, } from 'gsap/ScrollTrigger'
import React, { useEffect, useState, } from 'react'
import { FirstSlideContent, } from 'slides/FirstSlideContent'
import { SecondSlideContent, } from 'slides/SecondSlideContent'
import { ThirdSlideContent, } from 'slides/ThirdSlideContent'
import './index.scss'

gsap.registerPlugin( ScrollTrigger, )
gsap.registerPlugin( ScrollToPlugin, )

const MainPage = () => {
 const [currentSlide, setCurrentSlide, ] = useState<number>( 1, )

 const [pageHeight, setPageHeight, ] = useState( window.innerHeight, )

 const updatePageHeight = () => setPageHeight( window.innerHeight, )

 useEffect( () => {
  window.addEventListener( 'resize', updatePageHeight, )
  gsap.to( '.slides-container', {
   duration: 0.1,
   scrollTo: {
    y: `.slide-${currentSlide}`,
   },
  }, )

  return () => window.removeEventListener( 'resize', updatePageHeight, )
 }, [window.innerHeight, ], )

 const goToSlide = ( slide: number, ) => {
  setCurrentSlide( slide, )
  gsap.to( '.slides-container', {
   duration: 1,
   scrollTo: {
    y: `.slide-${slide}`,
   },
  }, )
 }

 const handleGoToFirstSlide = () => goToSlide( 1, )

 const handleGoToSecondSlide = () => {
  goToSlide( 2, )
  gsap.fromTo(
   '.section-counter__container-increment',
   { x: '-=100', opacity: 0, },
   {
    duration: 3,
    opacity: 1,
    stagger: 0.2,
    x: '0',
   },
  )
  gsap.fromTo(
   '.section-counter__container-decrement',
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
   duration: 6.5,
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
    <FirstSlideContent handleGoToSecondSlide={handleGoToSecondSlide} />
    <SecondSlideContent
     handleGoToThirdSlide={handleGoToThirdSlide}
     handleGoToFirstSlide={handleGoToFirstSlide}
    />
    <ThirdSlideContent handleGoToSecondSlide={handleGoToSecondSlide} />
   </main>
  </React.Fragment>
 )
}

export { MainPage, }
