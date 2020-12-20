import { ThreeDimensionComponent, } from 'components/ThreeDimensionComponent/ThreeDimensionComponent'
import React from 'react'
const BackgroundPicture = require( '../assets/images/background/background.png', )
 .default

interface Props {
 handleGoToSecondSlide() : void;
}

const FirstSlideContent = ( { handleGoToSecondSlide, }: Props, ) => {
 return (
  <section className='slide slide-1'>
   <h1 className='slide-1__heading'>Adopt an animal</h1>
   <img src={BackgroundPicture} alt='background' className='background-img' />
   <ThreeDimensionComponent />
   <header className='btn-container-next-prev'>
    <button className='btn btn-go-next-slide-1' onClick={handleGoToSecondSlide}>
     Next
    </button>
   </header>
  </section>
 )
}

export { FirstSlideContent, }
