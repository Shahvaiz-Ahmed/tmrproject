import React from 'react';
import moon from './Static/images/moon.png';
import brightness from './Static/images/brightness.png';
import './Static/css/Toggle.css'

function Toggle() {
  return (
    <div className="toggle">
        <button className="t-button"></button>
        <div className="sun"><img src={brightness} alt="brightness" /></div>
        <div className="moon"><img src={moon} alt="moon" /></div>
    </div>
  )
}

export default Toggle