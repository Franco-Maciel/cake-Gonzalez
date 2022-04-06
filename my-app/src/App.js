
import { ItemsListContainer } from './components/ItemListContainer/ItemsListContainer';
import { NavBarcopy } from './components/NavBar/NavBarcopy';

import { Home } from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.scss'
import { ContactForm } from './components/Contact/Contact'
import { LatestNewsContain } from './components/LatestNews/LatestNewsContain'

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from './context/CartContext'
import { Cart } from "./components/Cart/Cart";
import { Checkout } from "./components/Checkout/Checkout";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBarcopy/>
   
        <Routes> 
          <Route path="/" element= {<Home/> }/>
                 
          <Route path='/productos/:catId' element={ <ItemsListContainer/> }/>
          <Route path='/detail/:itemId' element={ <ItemDetailContainer/> }/>
          <Route path="/Novedad/:novedadId"  element= {<LatestNewsContain/>}></Route>
          <Route path="/Contact" element= {<ContactForm/>}></Route>
          <Route path='/cart' element={ <Cart/> }></Route>
          <Route path='/checkout' element={ <Checkout/> } />

          <Route path='*' element={ <Navigate to='/'/> }/>
        </Routes>
        
       
        
      </BrowserRouter>
      
    </CartProvider>
  );
}

export default App;
