import './App.css';
// import DetailedDescription from './Components/DetailedDescription';
// import ProductComponent from './Components/ProductComponent';
// import RecomendedItems from './Components/RecomendedItems';
import SearchBar from './Components/SearchBar';
import SearchSideBar from './Components/SearchSideBar';
import SearchTable from './Components/SearchTable';

function App() {
  return (
    <div className="App">
      {/* <ProductComponent/>
      <RecomendedItems/>
      <DetailedDescription/> */}
      <SearchBar/>
      <div className='search-body'>
        <SearchSideBar/>
      <SearchTable/>
      </div>
    </div>
  );
}

export default App;
