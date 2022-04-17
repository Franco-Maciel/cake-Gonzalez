import React, { useState } from "react";
import { CartWidget } from '../CartWidget/CartWidget';
import  Logo  from '../img/logo.png';
import {Link} from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import {
  Container,
  LogoContainer,
  CartContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "./NavBarElem";
import {
  FaShoppingBasket,
  FaBars,
  FaTimes,
  FaHome,
  FaRegStar,
  FaGlasses,
} from "react-icons/fa";
import { IconContext } from "react-icons";

export const  NavBarRspv= () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const [isOpened, setIsOpened] = useState(false);

  

  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <LogoContainer>
            <Link to="/" ><img className="logo1" src={Logo} alt="logo"/></Link> 
          </LogoContainer>

          <CartContainer>
            <CartWidget/>
          </CartContainer>
          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaHome />
                  <Link to='/' className="header-linkc">Home</Link>
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem   >
              <MenuItemLink >
                <div >
                  <FaShoppingBasket />
                  <Link to='' className="header-linkc" onClick={() => setIsOpened(!isOpened)}>Productos</Link><KeyboardArrowDownIcon/>
                </div>  
              </MenuItemLink>
            </MenuItem>
            {isOpened ? 
            <>
            
              <MenuItemLink id="submenu-nav" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                
                  <Link to='/productos/FrutosSecos' className='header-sublinkc'>Frutos Secos</Link>
                  <Link to='/productos/Cereales' className='header-sublinkc'>Cereales</Link>
                  <Link to='/productos/Bebidas' className='header-sublinkc'>Bebidas</Link>
                
              </MenuItemLink>
            
            </>
            : undefined }
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaRegStar />
                  <Link to="/Novedad/true" className="header-linkc">Novedades</Link>
                </div>
              </MenuItemLink>
            </MenuItem>
           
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaGlasses />
                  <Link to="/Contact" className="header-linkc">Contacto</Link>
                </div>
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      
      </Wrapper>
    </Container>
  );
};

