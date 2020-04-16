import React, { Component } from 'react';

import { ReactComponent as PacmanSvg } from './pacman.svg';
import './style.css';

class Pacman extends Component {

  state = {
    direction: 'right',
    position: {
      top: 0,
      left: 0
    }
  }

  constructor(props) {
    super(props);
    this.pacman = React.createRef();
  }

  componentDidMount() {
    this.pacman.current.focus();
  }

  handleKeyDown = (event) => {
    console.log(event.keyCode, event.key)
    // 39 ArrowRight
    // 40 ArrowDown
    // 37 ArrowLeft
    // 33 ArrowUp
    // if (event.key === 'Enter') {
    //   console.log('enter');
    // }
    const currentTop = this.state.position.top;
    const currentLeft = this.state.position.left;

    // TODO: move pacman
    
  }

  render() {
    return(
      <div
        ref={this.pacman}
        tabIndex="0"
        onKeyDown={this.handleKeyDown}
        className={`pacman pacman-${this.state.direction}`}
        style={this.state.position} >
          <PacmanSvg />
      </div>
    );
  }
}

Pacman.defaultProps = {
	step: 50, // move size
	size: 50, // pacman size
	border: 20, // app border
	topScoreBoard: 100
};

export default Pacman;