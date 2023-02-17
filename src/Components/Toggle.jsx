import React from 'react';
import circle from './Static/images/circle.png';
import './Static/css/Toggle.css'

function Toggle(props) {  

  return (
    <div className="toggle" >
      <img src={circle} alt="circle" className={props.cssstyle} />
    </div>
  )
}

export default Toggle