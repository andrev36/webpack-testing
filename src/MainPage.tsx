import { ThreeDimensionComponent } from 'components/ThreeDimensionComponent/ThreeDimensionComponent';
import React from 'react';
import { Buttons } from './components/ButtonComponent/Buttons';
import { FetchComponent } from './components/FetchComponent/FetchComponent';
import { FormComponent } from './components/FormComponent/FormComponent';
import { SelectElements } from './components/SelectComponent/SelectElement';
import { WaveComponent } from './components/WaveComponent/WaveComponent';
import './index.scss';

export const MainPage = () => {
 return (
  <React.Fragment>
   <div>
    <h1 className='heading__title--shadow'>
     Hello React and Webpack! Using hot reload!
    </h1>
   </div>
   <main className='container'>
    <Buttons />
    <SelectElements />
    <FetchComponent />
    <FormComponent />
    <WaveComponent />
    <div className='item-full-width three-dimension-container'>
     <ThreeDimensionComponent />
    </div>
    <section className='item'>
     <div>123</div>
    </section>
   </main>
  </React.Fragment>
 );
};
