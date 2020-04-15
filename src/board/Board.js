import React, { Component } from 'react';

import Pacman from '../pacman';
import Ghost from '../ghost';

import './style.css';

class Board extends Component {

  render() {
    return (
      <div className="board">
        <Pacman />
        <Ghost />
      </div>
    )
  }
}

export default Board;