import React, { useState, ChangeEvent } from 'react';
import '../../index.scss';
import onClickOutside from 'react-onclickoutside';

const SelectElementsComponent = () => {
 const [pickedColor, setPickedColor] = useState<string>('blue');
 const [listOpen, setListOpen] = useState(false);

 const toggleList = () => {
  setListOpen(!listOpen);
 };

 const handleColorChange = (value: string) => () => {
  setPickedColor(value);
  setListOpen(false);
 };

 const colors = ['blue', 'red', 'green', 'yellow'];

 const selectList = () => {
  return (
   <ul className='select-wrapper__list' data-testid='select'>
    {colors.map((color: string) => (
     <li
      key={color}
      value={color}
      data-testid={color}
      className='select-wrapper__list-item'
      onClick={handleColorChange(color)}
     >
      <span>{color}</span>
     </li>
    ))}
   </ul>
  );
 };

 (SelectElementsComponent as any).handleClickOutside = () => setListOpen(false);

 return (
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
    <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
     <path
      d='M144.212377,462.78928 C134.83509,464.290153 125.231568,464.438317 115.604179,462.993705 C50.3259969,453.198562 7,409.356552 7,347.533295 C7,289.1092 54.5931438,241.138902 115.307847,236.04052 C114.224391,230.293943 113.659142,224.378971 113.659142,218.339844 C113.659142,162.721071 161.603078,117.633147 220.744921,117.633147 C229.187082,117.633147 237.401075,118.551856 245.280023,120.288762 C278.812818,53.3455432 351.311479,7 435.343115,7 C528.627279,7 607.698907,64.113422 635.029007,143.116433 C708.623372,160.931085 763,223.734176 763,298.475791 C763,387.007045 686.707729,458.788141 592.553415,458.893738 L592.50165,459.255636 L144.212377,462.78928 Z'
      id='Combined-Shape'
      stroke='#46AFE8'
      strokeWidth='14'
      fillRule='nonzero'
      className={`img-cloud-path--${pickedColor}`}
     />
    </g>
   </svg>
   <h2 className='heading__picked-color'>
    <legend>Selecting elements</legend>
    <label data-testid='currently-selected-color'>
     Currently selected color: {pickedColor}
    </label>
   </h2>
   <section className='select-wrapper'>
    <header className='select-header'>
     <div className='select-header__title' onClick={() => toggleList()}>
      Select color
      <span>
       {listOpen ? (
        <svg
         xmlns='http://www.w3.org/2000/svg'
         width='20'
         height='20'
         fill='none'
         viewBox='0 0 24 24'
        >
         <path
          fill='#000'
          fillRule='evenodd'
          d='M5.30568 15.694C5.71325 16.102 6.37407 16.102 6.78165 15.694L12 10.4699L17.2183 15.694C17.6259 16.102 18.2867 16.102 18.6943 15.694C19.1019 15.286 19.1019 14.6244 18.6943 14.2164L12.7904 8.30602C12.5733 8.08864 12.2843 7.98707 12 8.00131C11.7157 7.98709 11.4267 8.08866 11.2096 8.30602L5.30568 14.2164C4.8981 14.6244 4.8981 15.286 5.30568 15.694Z'
          clipRule='evenodd'
         />
        </svg>
       ) : (
        <svg
         xmlns='http://www.w3.org/2000/svg'
         data-name='Layer 1'
         viewBox='0 0 32 32'
         width='20'
         height='20'
        >
         <path d='M16,22a2,2,0,0,1-1.41-.59l-10-10A2,2,0,0,1,7.41,8.59L16,17.17l8.59-8.58a2,2,0,0,1,2.82,2.82l-10,10A2,2,0,0,1,16,22Z' />
        </svg>
       )}
      </span>
     </div>
    </header>
    {listOpen ? selectList() : null}
   </section>
  </section>
 );
};

const clickOutsideConfig = {
 handleClickOutside: () => (SelectElementsComponent as any).handleClickOutside
};

export const SelectElements = onClickOutside(
 SelectElementsComponent,
 clickOutsideConfig
);
