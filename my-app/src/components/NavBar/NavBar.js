import { CartWidget } from '../CartWidget/CartWidget';
import  Logo  from '../img/logo.png';
import {Link} from 'react-router-dom'


export const NavBar = () => {

    return (
        <header className="header">
           <Link to="/" ><img className="logo" src={Logo} alt="logo"/></Link> 

            <nav className="header-nav">
                <div className='menu'>
                    <Link to="/" className="header-link">Productos</Link>
                    <Link to="/LatestNews" className="header-link">Novedades</Link>
                    <Link to="/Contact" className="header-link">Contacto</Link>
                </div>
                
                
                <div className='submenu'>
                    <Link to='/productos/FrutosSecos' className='header-sublink'>Frutos Secos</Link>
                    <Link to='/productos/Cereales' className='header-sublink'>Cereales</Link>
                    <Link to='/productos/Bebidas' className='header-sublink'>Bebidas</Link>
                </div>
                
            </nav>
            <CartWidget/>
        </header>
    )
}