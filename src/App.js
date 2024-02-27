import './App.css';
import Cart from './Components/Cart/Cart';
import AllCategories from './Components/Filter/AllCategories';
import Fruits from './Components/FruitComponents/Fruits';

function App() {
  return (
    <div className="App">
      <div className='block'>
        <AllCategories />
        <Cart />
      </div>
      <div className='block'>
        <Fruits />
      </div>
    </div>
  );
}

export default App;
