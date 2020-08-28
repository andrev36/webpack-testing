import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainPage } from './MainPage';

export const Routes = () => {
 return (
  <>
   <Switch>
    <Route exact path='/' component={MainPage} />
    {/* <Route path='/graphql' component={CheckoutPage} /> */}
   </Switch>
  </>
 );
};
