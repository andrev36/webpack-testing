import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Buttons } from './Buttons';

// Check this blog about testing counter and form: https://blog.logrocket.com/a-quick-guide-to-testing-react-hooks-fa584c415407/
// Example of testing useState hook: https://stackoverflow.com/a/60148368/11788161
describe('counter buttons test', () => {
 it('should increment count by 1', () => {});
});

const { getByText, asFragment } = render(<Buttons />);
const firstRender = asFragment();

fireEvent.click(getByText(/Increment/));

expect(firstRender).toBe(1);
// This will snapshot only the difference between the first render, and the
// state of the DOM after the click event.
// See https://github.com/jest-community/snapshot-diff
// expect(firstRender).toMatchDiffSnapshot(asFragment());
