import { FetchComponent, } from 'components/FetchComponent/FetchComponent'
import { gsap, } from 'gsap'
import React, { useState, } from 'react'
import '../../index.scss'
import { Portal, } from './Portal'
const TreasureIcon = require( '../../assets/images/treasure.svg', ).default
const PortalCloseIcon = require( '../../assets/images/close.svg', ).default
const SunIcon = require( '../../assets/images/sun.svg', ).default
const CloudIcon = require( '../../assets/images/cloud2.svg', ).default

const WaveComponent = () => {
 const [isPortalVisible, setPortalVisible, ] = useState( false, )
 const [chestOpened, setChestOpened, ] = useState( false, )

 const handleButtonClick = () => {
  setChestOpened( true, )
  gsap.to( '.container-wave-part', {
   duration: 1,
   y: 100,
  }, )
  gsap.to( '.container-wave__treasure-img', {
   duration: 0.1,
   repeat: -1,
   x: '-=5',
   y: '+=5',
   yoyo: true,
  }, )
 }

 const handleChestIconClick = () => {
  setPortalVisible( true, )
 }

 const handlePortalCloseButtonClick = () => {
  setPortalVisible( false, )
 }

 const chosenAnimalFromStorage = localStorage.getItem( 'chosenAnimal', )
 const chosenColorFromStorage = localStorage.getItem( 'chosenColor', )
 const chosenAnimalCountFromStorage = localStorage.getItem( 'chosenAnimalCount', )
 const firstNameFromStorage = localStorage.getItem( 'firstName', )

 return (
  <React.Fragment>
   <section className='container-wave'>
    <div className='container-wave__container-heading'>
     <h1 className='container-wave__heading'>
      Press button and then chest which will show beneath waves!
     </h1>
    </div>
    <button
     className='container-wave__btn-wave'
     onClick={handleButtonClick}
     type='button'
    >
     Claim reward!
    </button>
    <div className='container-wave__sand-background' />
    <div className='container-wave__container-cloud-img'>
     <img alt='cloud' className='container-wave__cloud-img' src={CloudIcon} />
    </div>
    <div className='container-wave__container-sun-img'>
     <img
      alt='sun'
      className='container-wave__sun-img'
      src={SunIcon}
      width='100px'
     />
    </div>
    <div className='container-wave__container-treasure-img'>
     <img
      alt='treasure'
      className='container-wave__treasure-img'
      onClick={handleChestIconClick}
      src={TreasureIcon}
      width='100px'
     />
    </div>
    {chestOpened ? (
     <div className='container-wave__info-treasure-opened'>
      <h1>Click chest</h1>
     </div>
    ) : null}
    <div className='container-wave-part'>
     <svg
      className='svg-wave1'
      viewBox='0 0 1440 320'
      xmlns='http://www.w3.org/2000/svg'
     >
      <path
       className='wave1'
       d='M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
       fill='#0099ff'
       fillOpacity='1'
       id='wave1'
      />
     </svg>
    </div>
    {isPortalVisible ? (
     <Portal id='modal-root'>
      <section className='container-portal'>
       <div className='container-portal__container-heading'>
        <h1 className='container-portal__heading'>Congratulations</h1>
       </div>
       <div className='container-portal__container-heading-second'>
        <h2 className='container-portal__heading-second'>
         As a reward please enjoy Kanye West quote
        </h2>
       </div>
       <header className='container-close-icon'>
        <button
         className='btn container-close-icon__btn'
         onClick={handlePortalCloseButtonClick}
        >
         <span>Close</span>
         <img
          alt='close portal'
          className='container-close-icon__img'
          src={PortalCloseIcon}
         />
        </button>
       </header>
       <FetchComponent />
       <section className='container-portal__submitted-data'>
        <p>Adopted animal: {chosenAnimalFromStorage}</p>
        <p>Chosen animal name: {firstNameFromStorage}</p>
        <p>Chosen pet toy color: {chosenColorFromStorage}</p>
        <p>Chosen animal count: {chosenAnimalCountFromStorage}</p>
       </section>
      </section>
     </Portal>
    ) : null}
   </section>
  </React.Fragment>
 )
}

export { WaveComponent, }
