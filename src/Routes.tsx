import React from 'react';
import { Route } from 'react-router';
import { MainPage } from './MainPage';

export const Routes = () => {
 return (
  <>
   <Route exact path='/' component={MainPage} />
  </>
 );
};
