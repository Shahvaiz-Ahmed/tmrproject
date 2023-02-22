import React from 'react';
import DetailedDescription from './DetailedDescription';
import Menu from './Menu';
import Navbar from './Navbar';
import ProductComponent from './ProductComponent';
import RecomendedItems from './RecomendedItems';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
function AllComponents(props) {
    const [sideMenu, setsideMenu] = useState(false);
    const { ItemNo } = useParams();
    console.log(ItemNo)
    function findItemData(arr, ItemNo) {
      const filteredArr = arr.filter(item => item.ItemNo === ItemNo);
      return filteredArr;
    }
    const array=findItemData(props.arr, ItemNo);
    console.log(array)
    useEffect(() => {  
      return () => {
        window.addEventListener('scroll', ()=>{ setsideMenu(false) });
      }
    }, [])

  return (
    <div className="App">
      {sideMenu ? <Menu sideMenu={sideMenu} setsideMenu={setsideMenu} /> : <></>}
      <Navbar sideMenu={sideMenu} setsideMenu={setsideMenu} />
      <ProductComponent itemdata={array} ite/>
      <RecomendedItems itemdata={array}/>
      <DetailedDescription itemdata={array}/>
    </div>
  );
}

export default AllComponents;
