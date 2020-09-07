import React, { useState, ChangeEvent } from 'react';
import './index.scss';

export const SelectElements = () => {
 const [pickedColor, setPickedColor] = useState<string>('blue');
 const handleColorChange = (e: ChangeEvent<HTMLSelectElement>) => {
  setPickedColor(e.target.value);
 };
 return (
  <div>
   <section className='container__select'>
    <svg
     width='770px'
     height='471px'
     viewBox='0 0 770 471'
     version='1.1'
     xmlns='http://www.w3.org/2000/svg'
     className='img-cloud'
    >
     <title>Combined Shape</title>
     <desc>Created with Sketch.</desc>
     <g
      id='Page-1'
      stroke='none'
      strokeWidth='1'
      fill='none'
      fillRule='evenodd'
     >
      <path
       d='M144.212377,462.78928 C134.83509,464.290153 125.231568,464.438317 115.604179,462.993705 C50.3259969,453.198562 7,409.356552 7,347.533295 C7,289.1092 54.5931438,241.138902 115.307847,236.04052 C114.224391,230.293943 113.659142,224.378971 113.659142,218.339844 C113.659142,162.721071 161.603078,117.633147 220.744921,117.633147 C229.187082,117.633147 237.401075,118.551856 245.280023,120.288762 C278.812818,53.3455432 351.311479,7 435.343115,7 C528.627279,7 607.698907,64.113422 635.029007,143.116433 C708.623372,160.931085 763,223.734176 763,298.475791 C763,387.007045 686.707729,458.788141 592.553415,458.893738 L592.50165,459.255636 L144.212377,462.78928 Z'
       id='Combined-Shape'
       stroke='#46AFE8'
       strokeWidth='14'
       fillRule='nonzero'
       className={`img-cloud-path--${pickedColor}`}
      ></path>
     </g>
    </svg>
    <h2 className='heading__picked-color'>
     <legend>Selecting elements</legend>
     <label data-testid='currently-selected-color'>
      Currently selected color: {pickedColor}
     </label>
    </h2>
    <form>
     <select
      data-testid='select'
      className='select'
      value={pickedColor}
      onChange={handleColorChange}
     >
      <option value='red' data-testid='red'>
       red
      </option>
      <option value='blue' data-testid='blue'>
       blue
      </option>
      <option value='green' data-testid='green'>
       green
      </option>
      <option value='yellow' data-testid='yellow'>
       yellow
      </option>
     </select>
    </form>
   </section>
  </div>
 );
};
