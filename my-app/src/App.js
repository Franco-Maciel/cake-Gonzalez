
import { ItemsListContainer } from './components/ItemListContainer/ItemsListContainer';
import { NavBar } from './components/NavBar/NavBar';
import { Carousel } from './components/Carousel/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.scss'
import { ContactForm } from './components/Contact/Contact'
import { LatestNews } from './components/LatestNews/LatestNews'

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from './context/CartContext'
import { Cart } from "./components/Cart/Cart";
import { Checkout } from "./components/Checkout/Checkout";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
   
        <Routes> 
          <Route path="/" 
              element= 
              {<>
                <Carousel/>
                <ItemsListContainer/>
              </>}>
          </Route>         
          <Route path='/productos/:catId' element={ <ItemsListContainer/> }/>
          <Route path='/detail/:itemId' element={ <ItemDetailContainer/> }/>
          <Route path="/LatestNews" element= {<LatestNews/>}></Route>
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
