import React, { Component } from 'react';

import './style.css';

class Food extends Component {
  state = {
    position: {
      top: this.props.position.top,
      left: this.props.position.left
    },
    hidden: false
  }

  ate() {
    this.setState({
      hidden: true
    });
  }

  render() {
    return(
      <div style={this.state.position} className={this.state.hidden ? 'food hidden' : 'food'}>
        <div className="food-dot"></div>
      </div>
    );
  }
}

Food.defaultProps = {
  foodSize: 50
}

export default Food;