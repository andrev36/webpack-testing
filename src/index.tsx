import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Routes } from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/all';

// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin);

const client = new ApolloClient({
 uri: 'http://localhost:3000/graphql',
 cache: new InMemoryCache()
});

// ! TODO Git merging: https://stackoverflow.com/questions/28932515/how-to-unmerge-a-git-merge#:~:text=3%20Answers&text=You%20can%20reset%20your%20branch,the%20HEADs%20you've%20had.
// ! TODO Dark mode in one grid window on/off with moon icon
// ! TODO Create ex. wave animation that is unveiling item
// after drag
// ! TODO Add Visibility sensor to animations
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
