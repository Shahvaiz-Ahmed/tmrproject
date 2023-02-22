import React, { useState } from 'react';
import './Static/css/Navbar.css';
import hamburger from './Static/images/hamburger.png';
import account from './Static/images/account.png';
import cart from './Static/images/cart.png';
import search from './Static/images/search.gif';
import Toggle from './Toggle.jsx';
import { Link } from 'react-router-dom';

function Navbar(props) {
    const [inputValue, setInputValue] = useState('');
    const [dropdown, setdropdown] = useState(false);
    
    // const [darkMode, setdarkMode] = useState(false);

    const handleDropDown = () => {
        setdropdown(!dropdown);
    }
    function handleInputChange(event) {
        setInputValue(event.target.value);
      }
      function handleSubmit(event) {
        props.setSearchTerm(inputValue);
      }
    const handleMenu = () => {
        props.setsideMenu(!props.sideMenu);
    }
    return (
        <div className="navbar">
            <img src={hamburger} alt="hamburger" onClick={handleMenu} />
             <form   method="get">
                <input type="search" name="search" id="search" value={inputValue}
                    onChange={handleInputChange}/>
                <Link  onClick={handleSubmit} to="/"><img src={search} alt="search" /></Link>
                </form>
            <Link to="/Check-out"> <img src={cart} alt="cart" /></Link>
            <Toggle />
            <img src={account} alt="account" onClick={handleDropDown} />
            {
                dropdown ? <ul>
                    <li><Link to="/Profile:id">  <strong>Profile</strong></Link></li>
                    <li><Link to="/Sign-in"><strong>Login</strong></Link></li>
                    <li> <Link to="/Sign-up"><strong>Register</strong> </Link>  </li>
                    <li><Link to=""><strong>Logout</strong></Link></li>
                </ul> : <></>
            }
        </div>
    )
}

export default Navbar