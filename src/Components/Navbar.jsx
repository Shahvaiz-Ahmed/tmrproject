import React, { useState } from 'react';
import './Static/css/Navbar.css';
import hamburger from './Static/images/hamburger.png';
import account from './Static/images/account.png';
import cart from './Static/images/cart.png';
import search from './Static/images/search.gif';
import Toggle from './Toggle.jsx';

function Navbar() {
    const [dropdown, setdropdown] = useState(false);
    // const [darkMode, setdarkMode] = useState(false);

    const handleDropDown = ()=>{
        setdropdown(!dropdown);
    }

  return (
    <div className="navbar">
        <img src= {hamburger} alt="hamburger" />
        <form action="" method="get">
            <input type="search" name="search" id="search" />
            <img src={search} alt="search" />
        </form>
        <img src={cart} alt="cart" />
        <Toggle/>
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