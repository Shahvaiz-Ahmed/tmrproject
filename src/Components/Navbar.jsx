import React, { useState } from 'react';
import './Static/css/Navbar.css';
import hamburger from './Static/images/hamburger.png';
import account from './Static/images/account.png';
import cart from './Static/images/cart.png';
import search from './Static/images/search.gif';
import Toggle from './Toggle.jsx';

function Navbar(props) {
    const [dropdown, setdropdown] = useState(false);
    const [darkMode, setdarkMode] = useState(false);
    const [cssstyle, setcssstyle] = useState('imgOnLeft');

    const handleDropDown = ()=>{
        setdropdown(!dropdown);
    }

    const handleDarkMode = ()=>{
        setdarkMode(!darkMode);
        setcssstyle('imgOnRight');
    }

    const handleMenu = ()=>{
        props.setsideMenu(!props.sideMenu);

    }
   

  return (
    <div className="navbar">
        <img src= {hamburger} alt="hamburger" onClick={handleMenu} />
        <form onChange={(e)=>{
            e.preventDefault();
            props.setsearchValue(e.target.value);
        }}>
            <input type="search" name="search" id="search"/>
            <img src={search} alt="search" />
        </form>
        <img src={cart} alt="cart" />
        <Toggle onClick={handleDarkMode} cssstyle={cssstyle} setcssstyle={setcssstyle} darkMode={darkMode} />
        <img src={account} alt="account" onClick={handleDropDown}/>
        {
            dropdown?<ul>
            <li><strong><a href="/">Profile</a></strong></li>
            <li><strong><a href="/">Login</a></strong></li>
            <li><strong><a href="/">Register</a></strong></li>
            <li><strong><a href="/">Logout</a></strong></li>
        </ul>: <></>
        }
    </div>
  )
}

export default Navbar