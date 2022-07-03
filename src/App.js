import './App.css';
import {BrowserRouter, Routes, Route, Switch} from 'react-router-dom';
import TopNav from './components/TopNav';
import NavBar from './components/NavBar';
import ProductItem from './components/product/ProductItem';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopNav />
        {/* <NavBar /> */}
        <Routes>
          <Route exact path="/" element={<NavBar />} />
          <Route exact path="/product/:id" element={<ProductItem />} />
        </Routes>
        {/* <Slider />
        <MenuBar />
        <Advertise /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
