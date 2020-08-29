import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FetchComponent, queryFetch } from './FetchComponent';

describe('FetchComponent tests', () => {
 it('FetchComponent loads with nothing fetched inside list', () => {
  const { getByTestId } = render(<FetchComponent />);

  const fetchedContinents = getByTestId('continents-list');
  expect(fetchedContinents).toBe(null);
 });
 it('FetchComponent fetches continent', () => {
  expect.assertions(1);
  const { getByTestId } = render(<FetchComponent />);

  const fetchedContinentsList = getByTestId('continents-list');
  return queryFetch(`
  query {
    continents {
      name
      code
    }
  }
`).then((data: any) => {
   expect(data.data.continents.name).toContain('Africa');
  });
 });
});
