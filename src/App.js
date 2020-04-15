import React, { Component } from 'react';

import './App.css';
import Header from './header';
import Board from './board';

class App extends Component {

  render() {
    return (
      <div className="App">
          <Header />
          <Board />
      </div>
    );
  }
}

export default App;
