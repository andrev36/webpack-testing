import { gsap, } from 'gsap'
import { ScrollTrigger, } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef, useState, } from 'react'
import '../../index.scss'

gsap.registerPlugin( ScrollTrigger, )

const Buttons = () => {
 const [count, setCounter, ] = useState( 0, )
 const decrementButtonRef = useRef( null, )
 const decrementContainerButtonRef = useRef( null, )
 const incrementButtonRef = useRef( null, )
 const incrementContainerButtonRef = useRef( null, )

 const handleClickIncrement = () => {
  setCounter( ( countIncrement, ) => countIncrement + 1, )
 }

 const handleClickDecrement = () => {
  setCounter( ( countDecrement, ) => countDecrement - 1, )
 }

 useEffect( () => {
  gsap.fromTo(
   incrementContainerButtonRef.current,
   { x: '-=100', opacity: 0, },
   {
    duration: 3,
    opacity: 1,
    scrollTrigger: {
     start: 'center-=200 center+=200',
     trigger: '.container-increment__counter-btn-increment',
    },
    stagger: 0.2,
    x: '0',
   },
  )
  gsap.fromTo(
   decrementContainerButtonRef.current,
   { x: '+=100', opacity: 0, },
   {
    duration: 3,
    opacity: 1,
    scrollTrigger: {
     start: 'center-=200 center+=200',
     trigger: '.container-decrement__counter-btn-decrement',
    },
    stagger: 0.2,
    x: '0',
   },
  )
 }, [], )

 return (
  <section className='item'>
   <div className='section-counter'>
    <div ref={incrementContainerButtonRef} className='container-increment'>
     <button
      className='container-increment__counter-btn container-increment__counter-btn-increment'
      onClick={handleClickIncrement}
      ref={incrementButtonRef}
     >
      <span>Increment</span>
     </button>
    </div>
    <h2>Current count:</h2>
    <h2 data-testid='countvalue'>{count}</h2>
    <div ref={decrementContainerButtonRef} className='container-decrement'>
     <button
      className='container-decrement__counter-btn container-decrement__counter-btn-decrement'
      onClick={handleClickDecrement}
      ref={decrementButtonRef}
     >
      <span>Decrement</span>
     </button>
    </div>
   </div>
  </section>
 )
}

export { Buttons, }
