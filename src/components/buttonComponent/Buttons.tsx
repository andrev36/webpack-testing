import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import '../../index.scss';

export const Buttons = () => {
 const [count, setCounter] = useState(0);
 const incrementButtonRef = useRef(null);
 const decrementButtonRef = useRef(null);
 useEffect(() => {
  gsap.from(incrementButtonRef.current, { duration: 2, x: -100, opacity: 0 });
  gsap.from(decrementButtonRef.current, { duration: 2, x: 100, opacity: 0 });
 }, []);
 return (
  <section className='item counter'>
   <button
    ref={incrementButtonRef}
    onClick={() => setCounter((count) => count + 1)}
    className='counter__btn'
   >
    Increment
   </button>
   <h2>Current count:</h2>
   <h2 data-testid='countvalue'>{count}</h2>
   <button
    ref={decrementButtonRef}
    onClick={() => setCounter((count) => count - 1)}
    className='counter__btn'
   >
    Decrement
   </button>
  </section>
 );
};
