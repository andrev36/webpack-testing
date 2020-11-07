import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef, useState } from 'react';
import '../../index.scss';

gsap.registerPlugin(ScrollTrigger);

export const Buttons = () => {
 const [count, setCounter] = useState(0);
 const incrementContainerButtonRef = useRef(null);
 const decrementContainerButtonRef = useRef(null);
 const incrementButtonRef = useRef(null);
 const decrementButtonRef = useRef(null);

 const handleClickIncrement = () => {
  setCounter((count) => count + 1);
 };

 const handleClickDecrement = () => {
  setCounter((count) => count - 1);
 };

 useEffect(() => {
  gsap.fromTo(
   incrementContainerButtonRef.current,
   { x: '-=100', opacity: 0 },
   {
    x: '0',
    opacity: 1,
    stagger: 0.2,
    duration: 3,
    scrollTrigger: {
     trigger: '.container-increment__counter-btn-increment',
     start: 'center-=200 center+=200',
     markers: true
    }
   }
  );
  gsap.fromTo(
   decrementContainerButtonRef.current,
   { x: '+=100', opacity: 0 },
   {
    x: '0',
    opacity: 1,
    stagger: 0.2,
    duration: 3,
    scrollTrigger: {
     trigger: '.container-decrement__counter-btn-decrement',
     start: 'center-=200 center+=200',
     markers: true
    }
   }
  );
 }, []);

 return (
  <section className='item'>
   <div className='section-counter'>
    <div ref={incrementContainerButtonRef} className='container-increment'>
     <button
      ref={incrementButtonRef}
      onClick={handleClickIncrement}
      className='container-increment__counter-btn container-increment__counter-btn-increment'
     >
      <span>Increment</span>
     </button>
    </div>
    <h2>Current count:</h2>
    <h2 data-testid='countvalue'>{count}</h2>
    <div ref={decrementContainerButtonRef} className='container-decrement'>
     <button
      onClick={handleClickDecrement}
      className='container-decrement__counter-btn container-decrement__counter-btn-decrement'
      ref={decrementButtonRef}
     >
      <span>Decrement</span>
     </button>
    </div>
   </div>
  </section>
 );
};
