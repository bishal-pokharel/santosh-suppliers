import './App.css';
import {BrowserRouter, Routes, Route, Switch} from 'react-router-dom';
import TopNav from './components/TopNav';
import NavBar from './components/NavBar';
import ProductItem from './components/product/ProductItem';
import Footer from './components/Footer';
import SingleProduct from './components/individualitem/SingleProduct'
import MenuBar from './components/MenuList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopNav />
        <NavBar />
        <Routes>
          {/* <Route exact path="/" element={<NavBar />} /> */}
          <Route exact path="/" element={<MenuBar />} />
          <Route exact path="/product/:id" element={<ProductItem />} />
          <Route exact path="/individualitem/:product_name" element={<SingleProduct />} />
        </Routes>
        {/* <Slider />
        <MenuBar />
        <Advertise /> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
