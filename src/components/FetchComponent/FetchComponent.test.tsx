import { render, } from '@testing-library/react';
import React from 'react';
import { FetchComponent, queryFetch, } from './FetchComponent';

describe( 'FetchComponent tests', () => {
 it( 'FetchComponent loads with nothing fetched inside list', () => {
  const { getByTestId, } = render( <FetchComponent />, );

  const fetchedContinents = getByTestId( 'continents-list', );
  expect( fetchedContinents.textContent, ).toBe( '', );
 }, );
 it( 'FetchComponent fetches continent', async () => {
  expect.assertions( 1, );
  // const { getByTestId } = render(<FetchComponent />);

  // const fetchedContinentsList = getByTestId('continents-list');
  const data = await queryFetch( `
   query {
     continents {
       name
       code
     }
   }
 `, );
  expect( data.data.continents.name, ).toContain( 'Africa', );
 }, );
}, );
