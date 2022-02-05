
import { ItemsListContainer } from './components/ItemListContainer/ItemsListContainer';
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.scss'

function App() {
  return (
    <>
     <NavBar/>
     <ItemsListContainer/>
    </>
  );
}

export default App;
