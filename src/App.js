import React, { Component } from 'react';

import './App.css';
import Header from './header';
import Board from './board';

class App extends Component {

  state = {
    score: 0
  }

  increaseScore = () => {
    this.setState({
      score: this.state.score + 1
    })
  }

  render() {
    return (
      <div>
          <Header score={this.state.score} />
          <Board increase={this.increaseScore} />
      </div>
    );
  }
}

export default App;
