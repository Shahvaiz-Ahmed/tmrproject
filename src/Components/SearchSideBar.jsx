import React, { useState, useEffect } from 'react';
import './Static/css/SearchSideBar.css';
import product from './Static/images/product.png';
import Button from '@mui/material/Button';


function SearchSideBar() {
    const [csLower, setcsLower] = useState();
    const [csUpper, setcsUpper] = useState();
    const [idLower, setidLower] = useState();
    const [idUpper, setidUpper] = useState();
  
    const handleSizeValues = () => {
      setcsLower(document.querySelector('#cs-lower').value);
      setcsUpper(document.querySelector('#cs-upper').value);
      setidLower(document.querySelector('#id-lower').value);
      setidUpper(document.querySelector('#id-upper').value);
    };
    useEffect(() => {
        console.log(csLower, csUpper, idLower, idUpper);
      }, [csLower, csUpper, idLower, idUpper]);
      

  return (
    <div className="sidebar">
        <img src={product} alt="product" />
        <Button variant="contained" type="submit" onClick={handleSizeValues}>Contained</Button>
        <h2><strong>Switch</strong> between mm and in</h2>
        <div>
            <div>
                <p></p>
                <p>Lower</p>
                <p></p>
                <p>Upper</p>
            </div>
            <div>
                <p>CS(mm)</p>
                <input type="search" id='cs-lower'/>
                <p>to</p>
                <input type="search" id='cs-upper'/>
            </div>
            <div>
                <p>ID(mm)</p>
                <input type="search" id='id-lower'/>
                <p>to</p>
                <input type="search" id='id-upper'/>
            </div>
        </div>

    </div>
  )
}

export default SearchSideBar