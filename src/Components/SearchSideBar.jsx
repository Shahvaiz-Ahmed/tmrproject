import React from 'react';
import './Static/css/SearchSideBar.css';
import product from './Static/images/product.png';
import Button from '@mui/material/Button';
import StandardSizeSearch from './StandardSizeSearch';


function SearchSideBar() {
    
    const handleSizeValues = ()=>{
        const cslowervalue = document.querySelector('#cs-lower').value;
        const csuppervalue = document.querySelector('#cs-upper').value;
        const idlowervalue = document.querySelector('#id-lower').value;
        const iduppervalue = document.querySelector('#id-upper').value;
        
        console.log(cslowervalue, csuppervalue, idlowervalue, iduppervalue);
    }

  return (
    <div className="sidebar">
        <img src={product} alt="product" />
        <Button variant="contained" type='submit' onClick={handleSizeValues} >Contained</Button>
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
        <StandardSizeSearch/>
    </div>
  )
}

export default SearchSideBar