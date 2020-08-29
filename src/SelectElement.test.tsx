import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SelectElements } from './SelectElement';

describe('SelectElement tests', () => {
 it('select element loads with initial value of select', () => {
  const { getByTestId } = render(<SelectElements />);

  const currentlySelectedColorValue = getByTestId('currently-selected-color');
  expect(currentlySelectedColorValue.textContent).toBe(
   'Currently selected color: red'
  );
 });
 it('select element changes color', () => {
  const { getByTestId } = render(<SelectElements />);

  const currentlySelectedColorValue = getByTestId('currently-selected-color');
  const selectElementValue = getByTestId('select-element');

  fireEvent.change(selectElementValue, {
   target: { value: 'green' }
  });

  expect(currentlySelectedColorValue.textContent).toBe(
   'Currently selected color: green'
  );
 });
});