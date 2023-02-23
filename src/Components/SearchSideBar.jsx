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
                    <h2 className="padding-1">Lower</h2>
                    <h2 className="padding-2">Upper</h2>
                </div>
                <div>
                    <h2>CS(mm)</h2>
                    <input type="search" id='cs-lower' />
                    <p>to</p>
                    <input type="search" id='cs-upper' />
                </div>
                <div>
                    <h2>ID(mm)</h2>
                    <input type="search" id='id-lower' />
                    <p>to</p>
                    <input type="search" id='id-upper' />
                </div>
                <Button className="btn" variant="contained" type="submit" onClick={handleSizeValues}>Contained</Button>
                <div className="material-type">
                    <strong>Material Type</strong>
                </div>
                <div className="mtchecck-box">
                    <input type="checkbox" name="mmycheck   " id="1" />
                    <label htmlFor="1"><span style={{fontSize: "0.8rem"}}>QUALITY RUBBER</span></label>
                </div>
                <div className="mtchecck-box">
                    <input type="checkbox" name="mmycheck   " id="1" />
                    <label htmlFor="1"><span style={{fontSize: "0.8rem"}}>QUALITY RUBBER</span></label>
                </div>
                <div className="mtchecck-box">
                    <input type="checkbox" name="mmycheck   " id="1" />
                    <label htmlFor="1"><span style={{fontSize: "0.8rem"}}>QUALITY RUBBER</span></label>
                </div>
                <div className="mtchecck-box">
                    <input type="checkbox" name="mmycheck   " id="1" />
                    <label htmlFor="1"><span style={{fontSize: "0.8rem"}}>QUALITY RUBBER</span></label>
                </div>
                <div className="material-type">
                    <strong>Material Sub-type</strong>
                </div>
                <div className="mtchecck-box">
                    <input type="checkbox" name="mmycheck   " id="1" />
                    <label htmlFor="1"><span style={{fontSize: "0.8rem"}}>QUALITY RUBBER</span></label>
                </div>
                <div className="mtchecck-box">
                    <input type="checkbox" name="mmycheck   " id="1" />
                    <label htmlFor="1"><span style={{fontSize: "0.8rem"}}>QUALITY RUBBER</span></label>
                </div>
                <div className="mtchecck-box">
                    <input type="checkbox" name="mmycheck   " id="1" />
                    <label htmlFor="1"><span style={{fontSize: "0.8rem"}}>QUALITY RUBBER</span></label>
                </div>
                <div className="mtchecck-box">
                    <input type="checkbox" name="mmycheck   " id="1" />
                    <label htmlFor="1"><span style={{fontSize: "0.8rem"}}>QUALITY RUBBER</span></label>
                </div>
                <div className="material-type">
                    <strong>Material Compliances</strong>
                </div>
                <div className="mtchecck-box">
                    <input type="checkbox" name="mmycheck   " id="1" />
                    <label htmlFor="1"><span style={{fontSize: "0.8rem"}}>QUALITY RUBBER</span></label>
                </div>
                <div className="mtchecck-box">
                    <input type="checkbox" name="mmycheck   " id="1" />
                    <label htmlFor="1"><span style={{fontSize: "0.8rem"}}>QUALITY RUBBER</span></label>
                </div>
                <div className="mtchecck-box">
                    <input type="checkbox" name="mmycheck   " id="1" />
                    <label htmlFor="1"><span style={{fontSize: "0.8rem"}}>QUALITY RUBBER</span></label>
                </div>
                <div className="mtchecck-box">
                    <input type="checkbox" name="mmycheck   " id="1" />
                    <label htmlFor="1"><span style={{fontSize: "0.8rem"}}>QUALITY RUBBER</span></label>
                </div>
            </div>

        </div>
    )
}

export default SearchSideBar