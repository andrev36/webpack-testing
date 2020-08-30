import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FormComponent } from './FormComponent';

describe('FormComponent tests', () => {
 // it('FormComponent loads with name and email inputs', () => {
 //  const { getByTestId } = render(<FormComponent />);

 //  const formContainer = getByTestId('form-container');
 //  expect(formContainer).toBe(null);
 // });
 it('name input should allow letters to be inputted', () => {
  const { getByTestId, getByLabelText } = render(<FormComponent />);

  const formNameInput = getByTestId('form-name-input');
  expect(formNameInput).toBe('');

  fireEvent.change(formNameInput, { target: { value: 'andrew' } });
  expect(formNameInput).toBe('andrew');
 });
});
