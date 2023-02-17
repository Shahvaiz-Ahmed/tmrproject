
import {  Routes, Route } from 'react-router-dom';
import './App.css';
import AllComponents from './Components/Allcomponent';
import SearchSideBar from './Components/SearchSideBar';
import SearchTable from './Components/SearchTable';

function App() {

  return (
    <Routes>
      <Route path="/Product" element={<AllComponents />}/>
      <Route path="/" element={<><div className='search-body'>
       <SearchSideBar/>   <SearchTable/>
       </div>
        </>}/>
      </Routes>
  );
}

export default App;
