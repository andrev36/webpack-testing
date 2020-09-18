import React, {
 useRef,
 useState,
 ChangeEvent,
 FormEvent,
 useEffect
} from 'react';
import { gsap } from 'gsap';
import '../../index.scss';

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

 const formContainer = useRef(null);
 useEffect(() => {
  gsap.from(formContainer.current, {
   duration: 3.5,
   rotationX: 100,
   transformOrigin: '50% 0',
   ease: 'Back.easeOut'
  });
 }, []);

 return (
  <React.Fragment>
   <section className='item section__form' data-testid='container__form'>
    <div className='container-form' ref={formContainer}>
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
         type='text'
         name='name'
         placeholder='Name'
         value={formValues.name}
         onChange={updateFormField}
         data-testid='form-name-input'
        />
       </div>
      </section>
      <br />
      <section className='form__input-with-label'>
       <div>
        <label htmlFor='email'>Email</label>
       </div>
       <input
        type='email'
        name='email'
        placeholder='Email'
        value={formValues.email}
        onChange={updateFormField}
        data-testid='form-email-input'
       />
      </section>
      <br />
      <button type='submit' className='form__btn'>
       Submit
      </button>
     </form>
    </div>
   </section>
  </React.Fragment>
 );
};
