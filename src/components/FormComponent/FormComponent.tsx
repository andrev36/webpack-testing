import { gsap, } from 'gsap'
import React, {
 ChangeEvent,
 FormEvent,
 Fragment,
 useRef,
 useState,
} from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import { VisibilityAnimationHook, } from '../../animations/VisibilityAnimationHook'
import '../../index.scss'

const FormComponent = () => {
 const [formValues, setFormValues, ] = useState( {
  email: '',
  name: '',
 }, )

 const printFormValues = ( e: FormEvent<HTMLFormElement>, ) => {
  e.preventDefault()
  console.log( formValues.name, formValues.email, )
 }

 const updateFormField = ( e: ChangeEvent<HTMLInputElement>, ) => {
  setFormValues( {
   ...formValues,
   [e.target.name]: e.target.value,
  }, )
 }

 const formContainerRef = useRef( null, )

 const hingeAnimation = gsap.from( formContainerRef.current, {
  duration: 3.5,
  ease: 'Back.easeOut',
  rotationX: 100,
  transformOrigin: '50% 0',
 }, )

 const { onChange: onChangeHingeAnimation, } = VisibilityAnimationHook(
  hingeAnimation,
 )

 return (
  <Fragment>
   <section className='item section__form' data-testid='container__form'>
    <VisibilitySensor onChange={onChangeHingeAnimation}>
     <div className='container-form' ref={formContainerRef}>
      <h2>Form</h2>
      <form action='POST' onSubmit={printFormValues}>
       <section className='form__input-with-label'>
        <div>
         <label htmlFor='name' id='name'>
          Name
         </label>
        </div>
        <div>
         <input
          data-testid='form-name-input'
          name='name'
          onChange={updateFormField}
          placeholder='Name'
          type='text'
          value={formValues.name}
         />
        </div>
       </section>
       <br />
       <section className='form__input-with-label'>
        <div>
         <label htmlFor='email'>Email</label>
        </div>
        <input
         data-testid='form-email-input'
         name='email'
         onChange={updateFormField}
         placeholder='Email'
         type='email'
         value={formValues.email}
        />
       </section>
       <br />
       <button type='submit' className='form__btn'>
        Submit
       </button>
      </form>
     </div>
    </VisibilitySensor>
   </section>
  </Fragment>
 )
}

export { FormComponent, }
