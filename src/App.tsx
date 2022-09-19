import { Header } from './components/Header';
import { Home } from './components/Home';
import { Product } from './components/Product';
import './style/global.ts';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Product/>
    </div>
  );
}

export default App;
