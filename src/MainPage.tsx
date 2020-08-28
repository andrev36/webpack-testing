import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Buttons } from './Buttons';
import './index.scss';

interface Props {}

export const MainPage = () => {
 let containerRef = useRef(null);
 useEffect(() => {
  gsap.from(containerRef.current, { duration: 2, x: -100, opacity: 0 });
 }, []);
 return (
  <React.Fragment>
   <h1 className='heading__title'>
    Hello React and Webpack! Using hot reload!
   </h1>
   <section className='container'>
    <Buttons />
    <form className='item'>
     <fieldset>
      <legend>Selecting elements</legend>
      <p>
       <label>Select list</label>
      </p>
      <p>
       <select>
        <option value='1'>one</option>
        <option value='2'>two</option>
        <option value='3'>three</option>
        <option value='4'>four</option>
       </select>
      </p>
     </fieldset>
    </form>
    <div className='item'>
     <button>Test Button</button>
    </div>
    <div className='item'>
     <button>Test Button</button>
    </div>
   </section>
  </React.Fragment>
 );
};
