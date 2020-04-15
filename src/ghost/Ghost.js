import React from 'react';
import { ReactComponent as GhostSvg } from './ghost.svg';

import './style.css';

function Ghost() {
  return (
    <div className="ghost">
      <GhostSvg  />
    </div>
  );
}

export default Ghost;