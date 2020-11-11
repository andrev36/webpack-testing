import React from 'react'
import { Route, } from 'react-router'
import { MainPage, } from './MainPage'

const Routes = () => {
 return (
  <>
   <Route exact path='/' component={MainPage} />
  </>
 )
}

export { Routes, }
