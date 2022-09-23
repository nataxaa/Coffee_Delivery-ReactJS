import { Header } from './components/Header';
import { Home } from './components/Home';
import { Product } from './components/Product';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './style/global.ts';
import { ShopCart } from './components/ShopCart';
import CartProvider from './context/cart';

function App() {
  return (
    <div className="App">
          <CartProvider>
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/ShopProduct' element={<ShopCart/>}/>
        </Routes>
      </Router>
          </CartProvider>
    </div>
  );
}

export default App;
