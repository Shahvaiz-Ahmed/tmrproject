import React from 'react';
import './Static/css/Menu.css';
import cross from './Static/images/cross.png';

function Menu(props) {

    const handleSideMenu = ()=>{
        props.setsideMenu(!props.sideMenu);
    }

  return (
    <div className="menu">
        <img src={cross} alt="cross" onClick={handleSideMenu}/>
        <ul>
            <li><a href="/"><strong> Home</strong></a></li>
            <li><a href="/"><strong> About Us</strong></a></li>
            <li><a href="/"><strong> Contact Us</strong></a></li>
            <li><a href="/"><strong> Buy Online</strong></a></li>
            <li><a href="/"><strong> Blog</strong></a></li>
        </ul>
    </div>
  )
}

export default Menu