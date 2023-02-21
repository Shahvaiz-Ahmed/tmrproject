
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
import Profile from './Components/Profile';
function App() {
  const [sideMenu, setsideMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {  
    return () => {
      window.addEventListener('scroll', ()=>{ setsideMenu(false) });
    }
  }, []);
  return (
    <Routes>
      <Route path="/Product" element={<AllComponents />}/>
      <Route path="/" element={<>
        {sideMenu ? <Menu sideMenu={sideMenu} setsideMenu={setsideMenu} /> : <></>}
      <Navbar sideMenu={sideMenu} setsideMenu={setsideMenu} setSearchTerm={setSearchTerm}/>
      <div className='search-body'>
       <SearchSideBar />   <SearchTable searchTerm={searchTerm} />
       </div>
        </>}/>
        <Route path="/Sign-up" element={<SignUp/>}/>
        <Route path="/Sign-in" element={<SignIn/>}/>
        <Route path="/Check-out" element={<Checkout/>}/>
        <Route path="/Profile:id" element={<Profile />}/>
      </Routes>
  );
}

export default App;
