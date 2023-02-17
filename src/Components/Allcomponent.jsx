import React from 'react';
import DetailedDescription from './DetailedDescription';
import Menu from './Menu';
import Navbar from './Navbar';
import ProductComponent from './ProductComponent';
import RecomendedItems from './RecomendedItems';
import { useEffect } from 'react';
import { useState } from 'react';
function AllComponents() {
    const [sideMenu, setsideMenu] = useState(false);

    useEffect(() => {  
      return () => {
        window.addEventListener('scroll', ()=>{ setsideMenu(false) });
      }
    }, [])

  return (
    <div className="App">
      {sideMenu ? <Menu sideMenu={sideMenu} setsideMenu={setsideMenu} /> : <></>}
      <Navbar sideMenu={sideMenu} setsideMenu={setsideMenu} />
      <ProductComponent />
      <RecomendedItems />
      <DetailedDescription />
    </div>
  );
}

export default AllComponents;
