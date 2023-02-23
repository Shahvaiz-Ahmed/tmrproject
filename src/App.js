import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import DetailedDescription from './Components/DetailedDescription';
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';
import ProductComponent from './Components/ProductComponent';
import RecomendedItems from './Components/RecomendedItems';
import axios from 'axios';
import SearchSideBar from './Components/SearchSideBar';
import SearchTable from './Components/SearchTable';
import {  Routes, Route } from 'react-router-dom';

function App() {
  const [sideMenu, setsideMenu] = useState(false);
  const username = 'MUHAMMAD ALI';
  const password = 'ZjpHC2TE16qjPqo6iUraaJrIg2gps4xHSdTmA9FVNd8=';
  // const [custData, setcustData] = useState([]);
  const [itemData, setitemData] = useState([]);
  const [searchValue, setsearchValue] = useState('');

  useEffect(() => {  
    return () => {
      
      window.addEventListener('scroll', ()=>{ setsideMenu(false) });

      axios.get('https://api.businesscentral.dynamics.com/v2.0/0cd74c11-7d97-4748-a720-ebbd5100b4e9/Sandbox1/api/TMRC/TMRC_Group/v2.0/companies(b290c1c3-11ab-ec11-bb8f-000d3a398a56)/CustomerRelative', {
        auth:{
          username,
          password
        }
      }).then(res=> console.log(res.data.value) )

      axios.get('https://api.businesscentral.dynamics.com/v2.0/0cd74c11-7d97-4748-a720-ebbd5100b4e9/Sandbox1/api/TMRC/TMRC_Group/v2.0/companies(b290c1c3-11ab-ec11-bb8f-000d3a398a56)/ItemRelative', {
        auth:{
          username,
          password
        }
      }).then((res)=> {
        setitemData(res.data.value);
       } )
    }
  }, [])
  

  return (
    
    <div className="App">
     <Routes>
      <Route path="/Product/:id" element={<>
        {
        sideMenu?<Menu sideMenu={sideMenu} setsideMenu={setsideMenu}/>:<></>
      }
      <Navbar sideMenu={sideMenu} setsideMenu={setsideMenu} setsearchValue={setsearchValue}/>
      <ProductComponent itemData={itemData} />
      <RecomendedItems/>
      <DetailedDescription/>
      </>}/>
      <Route path="/" element={<>
        {sideMenu ? <Menu sideMenu={sideMenu} setsideMenu={setsideMenu} /> : <></>}
      <Navbar sideMenu={sideMenu} setsideMenu={setsideMenu} setsearchValue={setsearchValue}/>
      <div className='search-body'>
       <SearchSideBar/> 
        <SearchTable searchValue={searchValue} itemData={itemData}/>
       </div>
        </>}/>
      </Routes>

    </div>
  );
}

export default App;
