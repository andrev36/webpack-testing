import React from 'react';
import { Route, Switch } from 'react-router';
import { MainPage } from './MainPage';

export const Routes = () => {
 return (
  <>
   <Route exact path='/' component={MainPage} />
   {/* <Route path='/graphql' component={CheckoutPage} /> */}
  </>
 );
};
