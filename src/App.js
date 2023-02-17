
import {  Routes, Route } from 'react-router-dom';
import './App.css';
import AllComponents from './Components/Allcomponent';
import SearchSideBar from './Components/SearchSideBar';
import SearchTable from './Components/SearchTable';
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';
import { useEffect } from 'react';
import { useState } from 'react';
function App() {
  const [sideMenu, setsideMenu] = useState(false);

  useEffect(() => {  
    return () => {
      window.addEventListener('scroll', ()=>{ setsideMenu(false) });
    }
  }, [])
  return (
    <Routes>
      <Route path="/Product" element={<AllComponents />}/>
      <Route path="/" element={<>
        {sideMenu ? <Menu sideMenu={sideMenu} setsideMenu={setsideMenu} /> : <></>}
      <Navbar sideMenu={sideMenu} setsideMenu={setsideMenu} />
      <div className='search-body'>
       <SearchSideBar/>   <SearchTable/>
       </div>
        </>}/>
      </Routes>
  );
}

export default App;
