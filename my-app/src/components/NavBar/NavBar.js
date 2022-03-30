import { CartWidget } from '../CartWidget/CartWidget';
import  Logo  from '../img/logo.png';
import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const NavBar = () => {
    const [isOpened, setIsOpened] = useState(false);

    const openClose = () =>{
        setIsOpened(!isOpened)
    }
    return (
        <header className="header">
           <Link to="/" ><img className="logo" src={Logo} alt="logo"/></Link> 

            <nav className="header-nav">
                <div className='menu'>
                    <Link to='/' className="header-link">Home</Link>
                    <ul>
                        <Link to='' className="header-link" onClick={openClose}>Productos<KeyboardArrowDownIcon/></Link>
                        
                        {isOpened ?
                        <div className='submenu'>
                        <li><Link to='/productos/FrutosSecos' className='header-sublink'>Frutos Secos</Link></li>
                        <li><Link to='/productos/Cereales' className='header-sublink'>Cereales</Link></li>
                        <li><Link to='/productos/Bebidas' className='header-sublink'>Bebidas</Link></li>
                        </div>
                        : undefined
                        }
                    </ul>
                    <Link to="/Novedad/true" className="header-link">Novedades</Link>
                    <Link to="/Contact" className="header-link">Contacto</Link>
                </div>  
                
            </nav>
            <CartWidget/>
        </header>
    )
}