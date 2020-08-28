import React from 'react';
import ReactDOM from 'react-dom';
import { MainPage } from './MainPage';
import './index.scss';

class App extends React.Component {
 render() {
  return <MainPage />;
 }
}

ReactDOM.render(<App />, document.getElementById('root'));
