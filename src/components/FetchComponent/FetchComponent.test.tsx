import { render, } from '@testing-library/react'
import fs from 'fs'
import React from 'react'
import { FetchComponent, } from './FetchComponent'
const jsonData = require( './kanyeQuotes.json', )

describe( 'FetchComponent tests', () => {
 it( 'FetchComponent loads with no quote fetched inside list', () => {
  const { getByTestId, } = render( <FetchComponent />, )

  const fetchedQuote = getByTestId( 'fetch-section__quote', )
  expect( fetchedQuote.textContent, ).toBe( '', )
 }, )
 it( 'FetchComponent fetches quote and quote is contained in Kanye REST API', async () => {
  expect.assertions( 1, )
  const { getByTestId, } = render( <FetchComponent />, )

  const fetchQuote = () =>
   fetch( 'https://api.kanye.rest', )
    .then( ( res, ) => res.json(), )
    .catch( ( err, ) => console.log( err, ), )

  let data
  fs.readFile( jsonData, 'utf8', async ( err, dataFromFile, ) => {
   try {
    data = await JSON.parse( dataFromFile, )
    const fetchedQuoteSection = getByTestId( 'fetch-section__quote', )
    const fetchedQuote = await fetchQuote()
    expect( data, ).toContain( fetchedQuote, )
    expect( fetchedQuoteSection, ).toContain( fetchedQuote, )
   } catch ( e ) {
    console.log( 'err: ', err, )
   }
  }, )
 }, )
}, )
