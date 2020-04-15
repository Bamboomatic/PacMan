import React from 'react';

import './style.css';

function Header() {
  return (
    <div className="header">
        <span className="left title">PACMAN</span>
				<span className="right score">SCORE: <span className="points">0</span></span>
    </div>
  );
}

export default Header;