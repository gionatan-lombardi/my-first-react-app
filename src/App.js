import { useState } from 'react';

import logo from './logo.svg';
import LogoImg from './components/LogoImg';
import ProductAdder from './components/ProductAdder'
import Product from './components/Product';
import Counter from './components/Counter';
import './App.css';

function App() {
  const [ products, setProducts ] = useState([])

  function removeProduct(id) {
    setProducts(products.filter(p => p.id !== id ))
  }

  return (
    <div className="App">
      <header className="App-header">
        <LogoImg alternativeText="React Header Logo" imageSrc={logo} />
      </header>
      <main>
        <ProductAdder addNewProduct={(newProduct) => setProducts([ newProduct, ...products ])} />
        <ul>
          { products.map((product) => <Product key={product.id} name={product.name} id={product.id} notes={product.notes} remove={() => removeProduct(product.id)} />) }
        </ul>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <Counter modalIsOpen={true} number={234} />
        <Counter modalIsOpen={false} number={32} />
      </main>
      <footer className="App-footer"><LogoImg alternativeText="Edgemony Footer Logo" imageSrc="https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png" /> © { (new Date().getFullYear())}</footer>
    </div>
  );
}

export default App;
