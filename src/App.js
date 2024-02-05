import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Apple from './components/Apple';
import Lamborghini from './components/Lamborghini';
import Starbucks from './components/Starbucks';
import Pizzaweb from './components/Pizzaweb/Pizzaweb';
import PizzaAbout from './components/Pizzaweb/PizzaAbout';
import PizzaMenu from './components/Pizzaweb/PizzaMenu';
import PizzaCart from './components/Pizzaweb/PizzaCart';
import { ShopContextProvider } from './components/Pizzaweb/helpers/PizzaShopContext';
import PizzaCheckout from './components/Pizzaweb/PizzaCheckout';
import Movies from './components/Movies/Movies';
import MovieItem from './components/Movies/MovieItem';
import MovieSearch from './components/Movies/MovieSearch';
import FacebookMobile from './components/FacebookMobile';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/appleweb' Component={Apple}></Route>
          <Route path='/lamborghini' Component={Lamborghini}></Route>
          <Route path='/starbucks' Component={Starbucks}></Route>
          <Route path='/pizzaweb' Component={Pizzaweb}></Route>
          <Route path='/pizzaweb/about' Component={PizzaAbout}></Route>
          <Route path='/pizzaweb/menu' Component={PizzaMenu}></Route>
          <Route path='/pizzaweb/cart' Component={PizzaCart}></Route>
          <Route path='/pizzaweb/checkout' Component={PizzaCheckout}></Route>
          <Route path='/moviemania' Component={Movies}></Route>
          <Route path='/moviemania/search/:id' Component={MovieSearch}></Route>
          <Route path='/moviemania/:title' Component={MovieItem}></Route>
          <Route path='/facebookmobile' Component={FacebookMobile}></Route>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
