import './App.css';
import {BrowserRouter, Routes, Route, Switch} from 'react-router-dom';
import TopNav from './components/TopNav';
import NavBar from './components/NavBar';
import MenuBar from './components/MenuList';
import Slider from './components/slider';
import Advertise from './components/headerAdvertise'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopNav />
        <NavBar />
        <Routes>
          <Route exact path="/product/:id" element={<MenuBar />} />
        </Routes>
        <Slider />
        <MenuBar />
        <Advertise />
      </BrowserRouter>
    </div>
  );
}

export default App;
