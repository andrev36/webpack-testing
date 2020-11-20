import React, { useEffect, useRef, useState, } from 'react'
import '../../index.scss'

const FetchComponent = () => {
 const [quote, setQuote, ] = useState( '', )
 const containerRef = useRef( null, )

 useEffect( () => {
  fetch( 'https://api.kanye.rest', )
   .then( ( res, ) => res.json(), )
   .then( ( res, ) => setQuote( res.quote, ), )
   .catch( ( err, ) => console.log( err, ), )
 }, [], )

 return (
  <section className='item fetch-section'>
   <h2 ref={containerRef}>item names (Fetched from GraphQL API):</h2>
   <span className='fetch-section__quote'>{quote}</span>
  </section>
 )
}

export { FetchComponent, }
