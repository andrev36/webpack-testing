import { fireEvent, render, } from '@testing-library/react'
import React from 'react'
import { Buttons, } from './Buttons'

describe( 'counter buttons test', () => {
 it( 'Buttons load with initial value of 0', () => {
  const { getByTestId, } = render( <Buttons />, )
  const countValue = getByTestId( 'countvalue', )

  expect( countValue.textContent, ).toBe( '0', )
 }, )
 it( 'should increment count by 1', () => {
  const { getByText, getByTestId, } = render( <Buttons />, )
  const countValue = getByTestId( 'countvalue', )

  fireEvent.click( getByText( /Increment/, ), )

  expect( countValue.textContent, ).toBe( '1', )
 }, )
 it( 'should decrement count by 1', () => {
  const { getByText, getByTestId, } = render( <Buttons />, )
  const countValue = getByTestId( 'countvalue', )

  fireEvent.click( getByText( /Decrement/, ), )

  expect( countValue.textContent, ).toBe( '-1', )
 }, )
}, )
