import { CartWidget } from '../CartWidget/CartWidget';
import  Logo  from '../img/logo.png';
export const NavBar = () => {

    return (
        <header className="header">
            <img className="logo" src={Logo} alt="logo"/>

            <nav className="header-nav">
                <p className="header-link">productos</p>
                <p className="header-link">novedades</p>
                <p className="header-link">contacto</p>
            </nav>
            <CartWidget/>
        </header>
    )
}