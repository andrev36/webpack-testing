import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { MainPage } from './MainPage';

class App extends React.Component {
 render() {
  return <MainPage />;
 }
}

ReactDOM.render(<App />, document.getElementById('root'));
