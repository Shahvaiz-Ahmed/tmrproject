import './App.css';
import DetailedDescription from './Components/DetailedDescription';
import ProductComponent from './Components/ProductComponent';
import RecomendedItems from './Components/RecomendedItems';

function App() {
  return (
    <div className="App">
      <ProductComponent/>
      <RecomendedItems/>
      <DetailedDescription/>
    </div>
  );
}

export default App;
