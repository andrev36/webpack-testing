import { fireEvent, render, } from '@testing-library/react'
import React from 'react'
import { WaveComponent, } from './WaveComponent'

describe( 'WaveComponent tests', () => {
 it( 'render button after third slide is showed', () => {
  const { getByTestId, } = render( <WaveComponent />, )

  const currentClickChestTextState = getByTestId( 'container-wave__btn-wave', )
  expect( currentClickChestTextState.textContent, ).toBe( 'Claim reward!', )
 }, )
 it( 'do not render click chest text before clicking button', () => {
  const { getByTestId, } = render( <WaveComponent />, )

  const currentClickChestTextState = getByTestId(
   'container-wave__info-treasure-opened',
  )
  expect( currentClickChestTextState.textContent, ).toBe( '', )
 }, )
 it( 'render click chest text after clicking button', () => {
  const { getByTestId, } = render( <WaveComponent />, )

  const buttonClaimReward = getByTestId( 'container-wave__btn-wave', )

  fireEvent.click( buttonClaimReward, )

  const currentClickChestTextState = getByTestId(
   'container-wave__info-treasure-opened',
  )

  expect( currentClickChestTextState.textContent, ).toBe( 'Click chest', )
 }, )
}, )
