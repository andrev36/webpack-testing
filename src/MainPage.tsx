import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Buttons } from './Buttons';
import './index.scss';
import { gql, useQuery } from '@apollo/client';
import { FetchComponent } from './FetchComponent';
import { SelectElements } from './SelectElement';

export const MainPage = () => {
 return (
  <React.Fragment>
   <h1 className='heading__title'>
    Hello React and Webpack! Using hot reload!
   </h1>
   <section className='container'>
    <Buttons />
    <SelectElements />
    <FetchComponent />
    <div className='item'>
     <button>Test Button</button>
    </div>
   </section>
  </React.Fragment>
 );
};
