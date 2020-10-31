import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { CSSPlugin, gsap } from 'gsap';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import { Routes } from './Routes';

// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin);

const client = new ApolloClient({
 uri: 'http://localhost:3000/graphql',
 cache: new InMemoryCache()
});

// ! TODO Dark mode in one grid window on/off with moon icon
// ! TODO Add Visibility sensor to animations
// ! TODO ThreeJS animations
class App extends React.Component {
 render() {
  return (
   <ApolloProvider client={client}>
    <BrowserRouter>
     <Routes />
    </BrowserRouter>
   </ApolloProvider>
  );
 }
}

ReactDOM.render(<App />, document.getElementById('root'));
