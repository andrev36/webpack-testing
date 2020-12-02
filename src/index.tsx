// tslint:disable: file-name-casing
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

class App extends React.Component {
 render() {
  return (
   <BrowserRouter>
    <Routes />
   </BrowserRouter>
  )
 }
}

ReactDOM.render( <App />, document.getElementById( 'root', ), )
