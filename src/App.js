import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import DetailedDescription from './Components/DetailedDescription';
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';
import ProductComponent from './Components/ProductComponent';
import RecomendedItems from './Components/RecomendedItems';
import SearchSideBar from './Components/SearchSideBar';
import SearchTable from './Components/SearchTable';

function App() {
  const [sideMenu, setsideMenu] = useState(false);

  useEffect(() => {  
    return () => {
      window.addEventListener('scroll', ()=>{ setsideMenu(false) });
    }
  }, [])
  

  return (
    
    <div className="App">
      {
        sideMenu?<Menu sideMenu={sideMenu} setsideMenu={setsideMenu}/>:<></>
      }
      <Navbar sideMenu={sideMenu} setsideMenu={setsideMenu}/>
      <ProductComponent/>
      <RecomendedItems/>
      <DetailedDescription/>
      <div className='search-body'>
        <SearchSideBar/>
      <SearchTable/>
      </div>
    </div>
  );
}

export default App;
