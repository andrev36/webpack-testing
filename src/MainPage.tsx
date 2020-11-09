import { ThreeDimensionComponent } from 'components/ThreeDimensionComponent/ThreeDimensionComponent';
import React from 'react';
import { Buttons } from './components/ButtonComponent/Buttons';
import { FetchComponent } from './components/FetchComponent/FetchComponent';
import { FormComponent } from './components/FormComponent/FormComponent';
import { SelectElements } from './components/SelectComponent/SelectElement';
import { WaveComponent } from './components/WaveComponent/WaveComponent';
import './index.scss';

const MainPage = () => {
 return (
  <React.Fragment>
   <main className='container'>
    <div className='item-full-width three-dimension-container'>
     <ThreeDimensionComponent />
    </div>
    <Buttons />
    <SelectElements />
    <FetchComponent />
    <FormComponent />
    <WaveComponent />
   </main>
  </React.Fragment>
 );
};

export { MainPage };
