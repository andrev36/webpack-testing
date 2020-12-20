import { WaveComponent, } from 'components/WaveComponent/WaveComponent'
import React from 'react'

interface Props {
 handleGoToSecondSlide() : void
}

const ThirdSlideContent = ( { handleGoToSecondSlide, }: Props, ) => {
 return (
  <section className='slide slide-3'>
   <WaveComponent />
   <button className='btn btn-go-prev-slide-3' onClick={handleGoToSecondSlide}>
    Previous
   </button>
  </section>
 )
}

export { ThirdSlideContent, }
