import {
 GSAPFadeInAnimationFromValues,
 GSAPFadeInAnimationToValues
} from 'animations/fadeInAnimations';
import { VisibilityAnimationHook } from 'animations/VisibilityAnimationHook';
import { gsap } from 'gsap';
import React, { useRef } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import '../../index.scss';
const TreasureIcon = require('../../assets/images/treasure.svg').default;

const WaveComponent = () => {
 const WaveContainerRef = useRef(null);
 const WaveButtonRef = useRef(null);

 const handleClick = () => {
  gsap.to(WaveContainerRef.current, {
   duration: 1,
   y: 100
  });
 };

 const fadeInFromRightSideAnimation = gsap.fromTo(
  WaveButtonRef.current,
  GSAPFadeInAnimationFromValues(100),
  GSAPFadeInAnimationToValues()
 );

 const { onChange } = VisibilityAnimationHook(fadeInFromRightSideAnimation);

 return (
  <React.Fragment>
   <section className='item-full-width container-wave'>
    <VisibilitySensor onChange={onChange}>
     <button
      ref={WaveButtonRef}
      type='button'
      onClick={handleClick}
      className='container-wave__btn-wave'
     >
      Test Button
     </button>
    </VisibilitySensor>
    <div className='container-wave__treasure-img'>
     <img src={TreasureIcon} alt='treasure' width='100px' />
    </div>
    <div className='container-wave-part' ref={WaveContainerRef}>
     <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1440 320'
      className='svg-wave1'
     >
      <path
       fill='#0099ff'
       fillOpacity='1'
       d='M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
       className='wave1'
       id='wave1'
      />
     </svg>
    </div>
   </section>
  </React.Fragment>
 );
};

export { WaveComponent };
