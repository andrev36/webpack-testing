import React, { useEffect, useState } from 'react';
import '../../index.scss';
import GlobeIcon from '../../assets/images/globe.png';

interface Props {
 name?: string;
 code?: string;
}

export const queryFetch = (query: any) =>
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
   .then((data: any) => setContinent(data.data.continents))
   .catch((err: any) => console.log(err));
 }, []);

 return (
  <section className='item fetch-section'>
   <h2>Continent names (Fetched from GraphQL API):</h2>
   <ul data-testid='continents-list' className='fetch-section__continents-list'>
    {continents.length
     ? continents.map((continent: Props, index: number) => {
        return (
         <li key={index}>
          <img src={GlobeIcon} alt='globe' />
          {continent.name}
         </li>
        );
       })
     : null}
   </ul>
  </section>
 );
};
