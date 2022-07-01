import './App.css';
import {BrowserRouter, Routes, Route, Switch} from 'react-router-dom';
import TopNav from './components/TopNav';
import NavBar from './components/NavBar';
// import MenuBar from './components/MenuList';
// import Slider from './components/slider';
// import Advertise from './components/headerAdvertise'
import ProductItem from './components/product/ProductItem'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopNav />
        {/* <NavBar /> */}
        <Switch>
        <Route path="/" exact component={NavBar} />
          <Route path="/product/:id" component={ProductItem} />
        </Switch>
        {/* <Slider />
        <MenuBar />
        <Advertise /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
