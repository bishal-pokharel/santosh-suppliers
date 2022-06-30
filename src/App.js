import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TopNav from './components/TopNav';
import NavBar from './components/NavBar';
// import MenuBar from './components/MenuList';
// import Slider from './components/slider';
// import Advertise from './components/headerAdvertise'
import ProductItem from './components/product/ProductItem'

function App() {
  return (
    <div className="App">
      <Router>
        <TopNav />
        {/* <NavBar /> */}
        <Switch>
        <Route exact path="/" component={NavBar} />
        <Route exact path="/product/:id" component={ProductItem} />
        </Switch>
        {/* <Slider />
        <MenuBar />
        <Advertise /> */}
      </Router>
    </div>
  );
}

export default App;
