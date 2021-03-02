import logo from './logo.svg';
import LogoImg from './components/LogoImg';
import Product from './components/Product';
import Counter from './components/Counter';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <LogoImg alternativeText="React Header Logo" imageSrc={logo} />
      </header>
      <main>
        <Counter modalIsOpen={true} number={234} />
        <Counter modalIsOpen={false} number={32} />
        <ul>
         <Product name="Red Shoe" price={23.5} />
         <Product name="Blue Shoe" price={98.3} />
         <Product name="Black Shoe" price={52.7} />
        </ul>
      </main>
      <footer className="App-footer"><LogoImg alternativeText="Edgemony Footer Logo" imageSrc="https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png" /> © { (new Date().getFullYear())}</footer>
    </div>
  );
}

export default App;
