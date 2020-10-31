import {
 GSAPFadeInAnimationFromValues,
 GSAPFadeInAnimationToValues
} from 'animations/fadeInAnimations';
import { VisibilityAnimationHook } from 'animations/VisibilityAnimationHook';
import { gsap } from 'gsap';
import React, { useRef, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import '../../index.scss';

export const Buttons = () => {
 const [count, setCounter] = useState(0);
 const incrementButtonRef = useRef(null);
 const decrementButtonRef = useRef(null);

 const fadeInFromLeftSideAnimation = gsap.fromTo(
  incrementButtonRef.current,
  GSAPFadeInAnimationFromValues(100),
  GSAPFadeInAnimationToValues()
 );

 const fadeInFromRightSideAnimation = gsap.fromTo(
  decrementButtonRef.current,
  GSAPFadeInAnimationFromValues(-100),
  GSAPFadeInAnimationToValues()
 );

 const onChangeFadeFromLeftSide = VisibilityAnimationHook(
  fadeInFromLeftSideAnimation
 );
 const onChangeFadeFromRightSide = VisibilityAnimationHook(
  fadeInFromRightSideAnimation
 );

 return (
  <section className='item'>
   <div className='section-counter'>
    <VisibilitySensor onChange={onChangeFadeFromLeftSide}>
     <button
      ref={incrementButtonRef}
      onClick={() => setCounter((count) => count + 1)}
      className='counter__btn'
     >
      Increment
     </button>
    </VisibilitySensor>
    <h2>Current count:</h2>
    <h2 data-testid='countvalue'>{count}</h2>
    <VisibilitySensor onChange={onChangeFadeFromRightSide}>
     <button
      ref={decrementButtonRef}
      onClick={() => setCounter((count) => count - 1)}
      className='counter__btn'
     >
      Decrement
     </button>
    </VisibilitySensor>
   </div>
  </section>
 );
};
