import React, { Component } from 'react';
import routes from './route.js';
import Nav from './components/Nav/Nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        {routes}
      </div>
    );
  }
}

export default App;
