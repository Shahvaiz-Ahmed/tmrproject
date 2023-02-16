import './App.css';
// import DetailedDescription from './Components/DetailedDescription';
// import ProductComponent from './Components/ProductComponent';
// import RecomendedItems from './Components/RecomendedItems';
import SearchSideBar from './Components/SearchSideBar';
import SearchTable from './Components/SearchTable';
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      {/* <ProductComponent/>
      <RecomendedItems/>
      <DetailedDescription/> */}
        <Navbar />
      <div className='search-body'>
        <SearchSideBar/>
      <SearchTable/>
      </div>
    </div>
  );
}

export default App;
