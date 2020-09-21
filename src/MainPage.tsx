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
import { ThreeDimensionComponent } from 'components/ThreeDimensionComponent/ThreeDimensionComponent';

// Force CSSPlugin to not get dropped during build
// gsap.registerPlugin(CSSPlugin);
// gsap.registerPlugin(MorphSVGPlugin);

export const MainPage = () => {
 return (
  <React.Fragment>
   <div>
    <h1 className='heading__title--shadow'>
     Hello React and Webpack! Using hot reload!
    </h1>
   </div>
   <main className='container'>
    <div className='item-full-width three-dimension-container'>
     <ThreeDimensionComponent />
    </div>
    <Buttons />
    <SelectElements />
    <FetchComponent />
    <FormComponent />
    <WaveComponent />
    {/* <section className='item'>
     <div>123</div>
    </section> */}
    <section className='item'>
     <div>123</div>
    </section>
   </main>
  </React.Fragment>
 );
};
