import { Buttons, } from 'components/ButtonComponent/Buttons'
import { FormComponent, } from 'components/FormComponent/FormComponent'
import { SelectElements, } from 'components/SelectComponent/SelectElement'
import React from 'react'
const BackgroundPicture = require( '../assets/images/background/background.png', )
 .default

interface Props {}

const SecondSlideContent = ( {
 printFormValues,
 handleGoToThirdSlide,
 handleGoToFirstSlide,
}: any, ) => {
 return (
  <form action='POST' onSubmit={printFormValues}>
   <section className='slide slide-2'>
    <img
     src={BackgroundPicture}
     alt='background'
     className='background-img'
    />
    <div className='slide-2-flex-item'>
     <Buttons />
    </div>
    <div className='slide-2-flex-item'>
     <SelectElements />
    </div>
    <div className='slide-2-flex-item'>
     <FormComponent />
    </div>
    <header className='btn-container-next-prev'>
     <button className='btn btn-go-prev-slide-2' onClick={handleGoToFirstSlide}>
      Previous
     </button>
     <button className='btn btn-go-next-slide-2' onClick={handleGoToThirdSlide}>
      Next
     </button>
    </header>
   </section>
  </form>
 )
}

export { SecondSlideContent, }
