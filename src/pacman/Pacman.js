import React, { Component } from 'react';

import { ReactComponent as PacmanSvg } from './pacman.svg';
import './style.css';

class Pacman extends Component {

  state = {
  }

  move() {

  }

  render() {
    return(
      <div className="pacman">
        <PacmanSvg />
      </div>
    );
  }
}

export default Pacman;