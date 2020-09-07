import React, { useEffect, useRef } from 'react';
import './index.scss';
import { gsap } from 'gsap';

// ! TODO Finish wave animation
export const WaveComponent = () => {
 const FirstWaveRef = useRef(null);
 const SecondWaveRef = useRef(null);

 // const handleClick = () => undefined;
 const handleClick = () =>
  gsap.to(FirstWaveRef.current, {
   duration: 1,
   morphSVG: SecondWaveRef.current as any
  });
 // gsap.to('#wave1', { duration: 1, morphSVG: '#wave2' });
 // useEffect(() => {
 //  gsap.to('wave1', { duration: 1, morphSVG: 'wave2' });
 // }, []);
 return (
  <React.Fragment>
   <section className='item-full-width container-wave'>
    <button type='button' onClick={handleClick} className='btn-wave'>
     Test Button
    </button>
    <div className='container-wave-part'>
     {/*  className='container-wave-part--animation */}
     <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1440 320'
      className='svg-wave1'
      // ref={FirstWaveRef}
      // className='svg-wave1--animation'
     >
      <path
       fill='#0099ff'
       fillOpacity='1'
       d='M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
       className='wave1'
       id='wave1'
       ref={FirstWaveRef}
      ></path>
     </svg>
     <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1440 320'
      className='wave2-svg'
      // ref={SecondWaveRef}
     >
      <path
       fill='#0099ff'
       fillOpacity='1'
       d='M0,96L17.1,117.3C34.3,139,69,181,103,213.3C137.1,245,171,267,206,245.3C240,224,274,160,309,122.7C342.9,85,377,75,411,74.7C445.7,75,480,85,514,117.3C548.6,149,583,203,617,213.3C651.4,224,686,192,720,186.7C754.3,181,789,203,823,208C857.1,213,891,203,926,192C960,181,994,171,1029,138.7C1062.9,107,1097,53,1131,48C1165.7,43,1200,85,1234,101.3C1268.6,117,1303,107,1337,112C1371.4,117,1406,139,1423,149.3L1440,160L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z'
       className='wave2'
       id='wave2'
       ref={SecondWaveRef}
      ></path>
     </svg>
    </div>
   </section>
  </React.Fragment>
 );
};
