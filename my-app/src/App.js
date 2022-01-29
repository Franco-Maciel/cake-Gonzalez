import './style/global.css'
import { ItemsListContainer } from './componentes/ItemsListContainer/ItemsListContainer';
import { NavBar } from './componentes/NavBar/NavBar';

function App() {
  return (
    <>
     <NavBar/>
     <ItemsListContainer greeting = "Hola coder!"/>
    </>
  );
}

export default App;
