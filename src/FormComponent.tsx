import React, { useRef, useState, ChangeEvent, FormEvent } from 'react';

interface Props {}

export const FormComponent = () => {
 const [formValues, setFormValues] = useState({
  name: '',
  email: ''
 });

 const printFormValues = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(formValues.name, formValues.email);
 };

 const updateFormField = (e: ChangeEvent<HTMLInputElement>) => {
  setFormValues({
   ...formValues,
   [e.target.name]: e.target.value
  });
 };

 return (
  <React.Fragment>
   <section className='item' data-testid='form-container'>
    <form action='POST' onSubmit={printFormValues}>
     <section>
      <label htmlFor='name' id='name'>
       Name
      </label>
      <input
       type='text'
       name='name'
       value={formValues.name}
       onChange={updateFormField}
       data-testid='form-name-input'
      />
     </section>
     <br />
     <section>
      <label htmlFor='email'>Email</label>
      <input
       type='email'
       name='email'
       value={formValues.email}
       onChange={updateFormField}
       data-testid='form-email-input'
      />
     </section>
     <br />
     <button>Submit</button>
    </form>
   </section>
  </React.Fragment>
 );
};
