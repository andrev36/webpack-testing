import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { SelectElements } from './SelectElement';

describe('SelectElement tests', () => {
 it('select element loads with initial value of select', () => {
  const { getByTestId } = render(<SelectElements />);

  const currentlySelectedColorValue = getByTestId('currently-selected-color');
  expect(currentlySelectedColorValue.textContent).toBe(
   'Currently selected color: blue'
  );
 });
 it('select element changes color', () => {
  const { getByTestId } = render(<SelectElements />);

  const currentlySelectedColorValue = getByTestId('currently-selected-color');
  const selectElementValue = getByTestId('select');

  fireEvent.change(selectElementValue, {
   target: { value: 'green' }
  });

  expect(currentlySelectedColorValue.textContent).toBe(
   'Currently selected color: green'
  );
 });
});
