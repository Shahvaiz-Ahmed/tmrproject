import './App.css';
// import DetailedDescription from './Components/DetailedDescription';
import Navbar from './Components/Navbar';
// import ProductComponent from './Components/ProductComponent';
// import RecomendedItems from './Components/RecomendedItems';
import SearchSideBar from './Components/SearchSideBar';
import SearchTable from './Components/SearchTable';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <ProductComponent/>
      <RecomendedItems/>
      <DetailedDescription/>
      */}
      <div className='search-body'>
        <SearchSideBar/>
      <SearchTable/>
      </div>
    </div>
  );
}

export default App;
