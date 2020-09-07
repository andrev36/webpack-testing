import React, {
 useRef,
 useState,
 ChangeEvent,
 FormEvent,
 useEffect
} from 'react';
import { gsap } from 'gsap';

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
    <div className='container__form' ref={formContainer}>
     <h2>Form</h2>
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
    </div>
   </section>
  </React.Fragment>
 );
};
