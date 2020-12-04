import React, { ChangeEvent, FormEvent, Fragment, useState, } from 'react'
import '../../index.scss'

const FormComponent = () => {
 const [formValues, setFormValues, ] = useState( {
  name: '',
 }, )

 const printFormValues = ( e: FormEvent<HTMLFormElement>, ) => {
  e.preventDefault()
  console.log( formValues.name, )
 }

 const updateFormField = ( e: ChangeEvent<HTMLInputElement>, ) => {
  setFormValues( {
   ...formValues,
   [e.target.name]: e.target.value,
  }, )
 }

 return (
  <Fragment>
   <section className='section__form' data-testid='container__form'>
    <div className='slide-2-flex-item__numbering'>
     <p>3</p>
    </div>
    <div className='container-form'>
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
     </form>
    </div>
   </section>
  </Fragment>
 )
}

export { FormComponent, }
