
import {  Routes, Route } from 'react-router-dom';
import './App.css';
import AllComponents from './Components/Allcomponent';
import SearchSideBar from './Components/SearchSideBar';
import SearchTable from './Components/SearchTable';
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';
import { useEffect } from 'react';
import { useState } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Checkout from './Checkout';
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
        <Route path="/Sign-up" element={<SignUp/>}/>
        <Route path="/Sign-in" element={<SignIn/>}/>
        <Route path="/Check-out" element={<Checkout/>}/>
      </Routes>
  );
}

export default App;
