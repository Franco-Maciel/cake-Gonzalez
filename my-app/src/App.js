
import { ItemsListContainer } from './components/ItemListContainer/ItemsListContainer';
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.scss'
import { ContactForm } from './components/Contact/Contact'
import { LatestNews } from './components/LatestNews/LatestNews'

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (
    
    <BrowserRouter>
      <NavBar/>
      
      <Routes>
        <Route path="/" element= {<ItemsListContainer/>}></Route>
        <Route path='/productos/:catId' element={ <ItemsListContainer/> }/>
        <Route path='/detail/:itemId' element={ <ItemDetailContainer/> }/>
        <Route path="/LatestNews" element= {<LatestNews/>}></Route>
        <Route path="/Contact" element= {<ContactForm/>}></Route>

        <Route path='*' element={ <Navigate to='/'/> }/>
      </Routes>
      
      
    </BrowserRouter>
      
   
  );
}

export default App;
