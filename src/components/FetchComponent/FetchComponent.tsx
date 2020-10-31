import { FadeInContainerAnimation } from 'animations/FadeInContainerAnimation';
import React, { useEffect, useState } from 'react';
import '../../index.scss';
const GlobeIcon = require('../../assets/images/globe.svg').default;

interface Props {
 name?: string;
 code?: string;
}

export const queryFetch = (query: string) =>
 fetch('https://countries.trevorblades.com/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
   query
  })
 })
  .then((res) => res.json())
  .catch((err) => console.log(err));

export const FetchComponent = () => {
 const [continents, setContinent] = useState([]);

 useEffect(() => {
  queryFetch(`
  query {
    continents {
      name
      code
    }
  }
`)
   .then((data) => setContinent(data.data.continents))
   .catch((err) => console.log(err));
 }, []);

 return (
  <section className='item fetch-section'>
   <FadeInContainerAnimation>
    <h2>Continent names (Fetched from GraphQL API):</h2>
   </FadeInContainerAnimation>
   <ul data-testid='continents-list' className='fetch-section__continents-list'>
    {continents.length
     ? continents.map((continent: Props, index: number) => {
        return (
         <li key={index}>
          <img
           src={GlobeIcon}
           alt='globe'
           className='fetch-section__globe-svg'
          />
          <span>{continent.name}</span>
         </li>
        );
       })
     : null}
   </ul>
  </section>
 );
};
