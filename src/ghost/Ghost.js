import React, { Component } from 'react';

import { ReactComponent as GhostSvg } from './ghost.svg';

import './style.css';

class Ghost extends Component {

  state = {
    direction: 'left',
    position: {
      top: 50 * 3,
      left: 50 * 3
    }
  }

  componentDidMount() {
    // TODO: uncomment me when necessary
    // this.moveInterval = setInterval(this.move, 500);
    // this.changeDirectionInterval = setInterval(this.changeDirection, 500);
  }

  changeDirection = () => {
    // TODO: implement change direction
  }

  move = () => {
    const currentTop = this.state.position.top;
    const currentLeft = this.state.position.left;

    // TODO: move ghost
 }

  render() {
    return(
      <div style={this.state.position} className="ghost">
        <GhostSvg className={`ghost-${this.props.color}`} />
      </div>
    )
  }
}

Ghost.defaultProps = {
  color: 'red',
  step: 50, // move size
  size: 50, // ghost size
  border: 20,
  topScoreBoard: 100
};


export default Ghost;