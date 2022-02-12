import { CartWidget } from '../CartWidget/CartWidget';
import  Logo  from '../img/logo.png';
import {Link} from 'react-router-dom'


export const NavBar = () => {

    return (
        <header className="header">
            <img className="logo" src={Logo} alt="logo"/>

            <nav className="header-nav">
                <Link to="/" className="header-link">Home</Link>
                <Link to="/LatestNews" className="header-link">Novedades</Link>
                <Link to="/Contact" className="header-link">Contacto</Link>
                <Link to='/productos/FrutosSecos' className='header-link'>Frutos Secos</Link>
            </nav>
            <CartWidget/>
        </header>
    )
}