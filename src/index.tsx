import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
 render() {
  return <div>Hello React and Webpack! Using hot reload!</div>;
 }
}

ReactDOM.render(<App />, document.getElementById('root'));