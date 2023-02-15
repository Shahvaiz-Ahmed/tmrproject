import React, { useState, useEffect } from 'react';
import './Static/css/SearchSideBar.css';
import product from './Static/images/product.png';
import Button from '@mui/material/Button';
import '@djthoms/pretty-checkbox';


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
                    <input type="search" id='cs-lower' />
                    <p>to</p>
                    <input type="search" id='cs-upper' />
                </div>
                <div>
                    <p>ID(mm)</p>
                    <input type="search" id='id-lower' />
                    <p>to</p>
                    <input type="search" id='id-upper' />
                </div>
                <Button className="btn" variant="contained" type="submit" onClick={handleSizeValues}>Contained</Button>
                <div className="material-type">
                    Material Type
                </div>
                <div className="mtchecck-box">
                    <input type="checkbox" name="mmycheck   " id="1" />
                    <label htmlFor="1">QUALITY RUBBER</label>
                </div>
                <div className="mtchecck-box">
                    <input type="checkbox" name="mmycheck   " id="1" />
                    <label htmlFor="1">QUALITY RUBBER</label>
                </div>
                <div className="mtchecck-box">
                    <input type="checkbox" name="mmycheck   " id="1" />
                    <label htmlFor="1">QUALITY RUBBER</label>
                </div>
                <div className="mtchecck-box">
                    <input type="checkbox" name="mmycheck   " id="1" />
                    <label htmlFor="1">QUALITY RUBBER</label>
                </div>
                <div className="material-type">
                    Material Sub-type
                </div>
                <div className="mtchecck-box">
                    <input type="checkbox" name="mmycheck   " id="1" />
                    <label htmlFor="1">QUALITY RUBBER</label>
                </div>
                <div className="mtchecck-box">
                    <input type="checkbox" name="mmycheck   " id="1" />
                    <label htmlFor="1">QUALITY RUBBER</label>
                </div>
                <div className="mtchecck-box">
                    <input type="checkbox" name="mmycheck   " id="1" />
                    <label htmlFor="1">QUALITY RUBBER</label>
                </div>
                <div className="mtchecck-box">
                    <input type="checkbox" name="mmycheck   " id="1" />
                    <label htmlFor="1">QUALITY RUBBER</label>
                </div>
                <div className="material-type">
                    Material Compliances
                </div>
                <div className="mtchecck-box">
                    <input type="checkbox" name="mmycheck   " id="1" />
                    <label htmlFor="1">QUALITY RUBBER</label>
                </div>
                <div className="mtchecck-box">
                    <input type="checkbox" name="mmycheck   " id="1" />
                    <label htmlFor="1">QUALITY RUBBER</label>
                </div>
                <div className="mtchecck-box">
                    <input type="checkbox" name="mmycheck   " id="1" />
                    <label htmlFor="1">QUALITY RUBBER</label>
                </div>
                <div className="mtchecck-box">
                    <input type="checkbox" name="mmycheck   " id="1" />
                    <label htmlFor="1">QUALITY RUBBER</label>
                </div>
            </div>

        </div>
    )
}

export default SearchSideBar