import React, { useState, ChangeEvent } from 'react';
import './index.scss';

export const SelectElements = () => {
 const [pickedColor, setPickedColor] = useState<string>('red');
 const handleColorChange = (e: ChangeEvent<HTMLSelectElement>) => {
  setPickedColor(e.target.value);
 };
 return (
  <form className='item'>
   <fieldset>
    <legend>Selecting elements</legend>
    <p>
     <label data-testid='currently-selected-color'>
      Currently selected color: {pickedColor}
     </label>
    </p>
    <p>
     <select
      data-testid='select-element'
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
    </p>
   </fieldset>
  </form>
 );
};
