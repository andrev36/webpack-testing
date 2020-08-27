import React from 'react';

interface Props {}

export const MainPage = () => {
 // useEffect(() => {
 //  animation();
 // }, []);
 return (
  <React.Fragment>
   <h1 className='heading__title'>
    Hello React and Webpack! Using hot reload!
   </h1>
   <section className='container'>
    <div className='item'>
     <button>Test Button</button>
    </div>
    <div className='item'>
     <button>Test Button</button>
    </div>
    <div className='item'>
     <button>Test Button</button>
    </div>
    <div className='item'>
     <button>Test Button</button>
    </div>
   </section>
  </React.Fragment>
 );
};
