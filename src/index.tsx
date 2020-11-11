// tslint:disable: file-name-casing
import { ApolloClient, ApolloProvider, InMemoryCache, } from '@apollo/client'
import { CSSPlugin, gsap, } from 'gsap'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, } from 'react-router-dom'
import './index.scss'
import { Routes, } from './Routes'

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Force CSSPlugin to not get dropped during build
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
gsap.registerPlugin( CSSPlugin, )

const client = new ApolloClient( {
 cache: new InMemoryCache(),
 uri: 'http://localhost:3000/graphql',
}, )

class App extends React.Component {
 render() {
  return (
   <ApolloProvider client={client}>
    <BrowserRouter>
     <Routes />
    </BrowserRouter>
   </ApolloProvider>
  )
 }
}

ReactDOM.render( <App />, document.getElementById( 'root', ), )
