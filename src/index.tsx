import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Routes } from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { gsap, CSSPlugin } from 'gsap';

// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin);

const client = new ApolloClient({
 uri: 'http://localhost:3000/graphql',
 cache: new InMemoryCache()
});

// ! TODO Dark mode in one grid window on/off with moon icon
// ! TODO Create ex. wave animation that is unveiling item
// after drag
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
