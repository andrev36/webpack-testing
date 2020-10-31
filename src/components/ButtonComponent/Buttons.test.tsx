import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Buttons } from './Buttons';

// Check this blog about testing counter and form: https://blog.logrocket.com/a-quick-guide-to-testing-react-hooks-fa584c415407/
// Example of testing useState hook: https://stackoverflow.com/a/60148368/11788161
describe('counter buttons test', () => {
 it('Buttons load with initial value of 0', () => {
  const { getByTestId } = render(<Buttons />);
  const countValue = getByTestId('countvalue');

  expect(countValue.textContent).toBe('0');
 });
 it('should increment count by 1', () => {
  const { getByText, getByTestId } = render(<Buttons />);
  const countValue = getByTestId('countvalue');

  fireEvent.click(getByText(/Increment/));

  expect(countValue.textContent).toBe('1');
 });
 it('should decrement count by 1', () => {
  const { getByText, getByTestId } = render(<Buttons />);
  const countValue = getByTestId('countvalue');

  fireEvent.click(getByText(/Decrement/));

  expect(countValue.textContent).toBe('-1');
 });
});
