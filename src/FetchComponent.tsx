import React, { useEffect, useState } from 'react';
import './index.scss';

interface Props {
 name?: string;
 code?: string;
}

export const queryFetch = (query: any) =>
 fetch('https://countries.trevorblades.com/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
   query: query
  })
 }).then((res) => res.json());

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
`).then((data: any) => setContinent(data.data.continents));
 }, []);

 return (
  <div className='item'>
   <ul data-testid='continents-list'>
    Continent names (Fetched from GraphQL API):
    {continents.map((continent: Props, index: number) => {
     return <li key={index}>{continent.name}</li>;
    })}
   </ul>
  </div>
 );
};
