import React, { useEffect, useState, } from 'react'
import '../../index.scss'

const FetchComponent = () => {
 const [quote, setQuote, ] = useState( '', )

 useEffect( () => {
  fetch( 'https://api.kanye.rest', )
   .then( ( res, ) => res.json(), )
   .then( ( res, ) => setQuote( res.quote, ), )
   .catch( ( err, ) => console.log( err, ), )
 }, [], )

 return (
  <section className='fetch-section'>
   <div className='fetch-section__quote'>
    <q>{quote}</q>
   </div>
   <p className='fetch-section_quote-author'>- Kanye West</p>
  </section>
 )
}

export { FetchComponent, }
