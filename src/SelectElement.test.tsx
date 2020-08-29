import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SelectElements } from './SelectElement';

describe('select element tests', () => {
 it('select element loads with initial value of select', () => {
  const { getByTestId } = render(<SelectElements />);

  const currentlySelectedColorValue = getByTestId('currently-selected-color');
  expect(currentlySelectedColorValue.textContent).toBe(
   'Currently selected color: red'
  );

  const selectElementValue = getByTestId('select-element');

  fireEvent.change(selectElementValue, {
   target: { value: 'green' }
  });

  expect(currentlySelectedColorValue.textContent).toBe(
   'Currently selected color: green'
  );
 });
});
