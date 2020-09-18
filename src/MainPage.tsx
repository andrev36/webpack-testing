import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Buttons } from './components/buttonComponent/Buttons';
import './index.scss';
import { gql, useQuery } from '@apollo/client';
import { FetchComponent } from './components/fetchComponent/FetchComponent';
import { SelectElements } from './components/selectComponent/SelectElement';
import { FormComponent } from './components/formComponent/FormComponent';
import { WaveComponent } from './components/waveComponent/WaveComponent';
import { CSSPlugin, MorphSVGPlugin } from 'gsap/all';

// Force CSSPlugin to not get dropped during build
// gsap.registerPlugin(CSSPlugin);
// gsap.registerPlugin(MorphSVGPlugin);

export const MainPage = () => {
 const mainHeadingRef = useRef(null);
 useEffect(() => {
  // const tl = gsap.timeline({ repeat: 6, repeatDelay: 1, yoyo: true });
  // tl.to(
  //  mainHeadingRef.current,
  //  {
  //   duration: 0.2,
  //   className: '+=superShadow',
  //   top: '-=10px',
  //   ease: 'power1.in',
  //   stagger: 0.3
  //  },
  //  'start'
  // );
 }, []);
 return (
  <React.Fragment>
   <div>
    <h1 className='heading__title--shadow' ref={mainHeadingRef}>
     Hello React and Webpack! Using hot reload!
    </h1>
   </div>
   <main className='container'>
    <Buttons />
    <SelectElements />
    <FetchComponent />
    <FormComponent />
    <WaveComponent />
    <section className='item'>
     <div>123</div>
    </section>
    <section className='item'>
     <div>123</div>
    </section>
   </main>
  </React.Fragment>
 );
};
