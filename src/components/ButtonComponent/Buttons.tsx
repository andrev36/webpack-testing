import { gsap, } from 'gsap'
import { ScrollTrigger, } from 'gsap/ScrollTrigger'
import React, { useState, } from 'react'
import '../../index.scss'

gsap.registerPlugin( ScrollTrigger, )

const Buttons = () => {
 const [count, setCounter, ] = useState( 0, )

 const handleClickIncrement = () => {
  setCounter( ( countIncrement, ) => countIncrement + 1, )
 }

 const handleClickDecrement = () => {
  setCounter( ( countDecrement, ) => countDecrement - 1, )
 }

 return (
  <div className='section-counter'>
   <div className='section-counter__container-increment'>
    <div className='slide-2-flex-item__numbering'>
     <p>1</p>
    </div>
    <button
     className='btn container-increment__counter-btn-increment'
     onClick={handleClickIncrement}
    >
     <span>Increment</span>
    </button>
   </div>
   <h2>Current count:</h2>
   <h2 data-testid='countvalue'>{count}</h2>
   <div className='section-counter__container-decrement'>
    <button
     className='btn container-decrement__counter-btn-decrement'
     onClick={handleClickDecrement}
    >
     <span>Decrement</span>
    </button>
   </div>
  </div>
 )
}

export { Buttons, }
