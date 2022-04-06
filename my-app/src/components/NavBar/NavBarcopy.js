import React, { useState } from "react";
import  Logo  from '../img/logo.png';
import {Link} from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  Container,
  LogoContainer,
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

export const  NavBarcopy = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const [isOpened, setIsOpened] = useState(false);

  

  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <LogoContainer>
            <Link to="/" ><img className="logo1" src={Logo} alt="logo"/></Link> 
          </LogoContainer>

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaHome />
                  <Link to='/' className="header-link">Home</Link>
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem   >
              <MenuItemLink opent={showMobileMenu} >
                <div >
                  <FaShoppingBasket />
                  <Link to='' className="header-linkc" onClick={() => setIsOpened(!isOpened)}>Productos</Link><KeyboardArrowDownIcon/>
                </div>  
              </MenuItemLink>
            </MenuItem>
            {isOpened ? <>
                <MenuItem  onClick={() => setShowMobileMenu(!showMobileMenu)}>
                  <MenuItemLink>
                    <div className="submenu">
                        <Link to='/productos/FrutosSecos' className='header-sublinkc'>Frutos Secos</Link>
                        <Link to='/productos/Cereales' className='header-sublinkc'>Cereales</Link>
                        <Link to='/productos/Bebidas' className='header-sublinkc'>Bebidas</Link>
                    </div>
                    </MenuItemLink>
                </MenuItem>
                </>
                : undefined }
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaRegStar />
                  <Link to="/Novedad/true" className="header-link">Novedades</Link>
                </div>
              </MenuItemLink>
            </MenuItem>
           
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaGlasses />
                  <Link to="/Contact" className="header-link">Contacto</Link>
                </div>
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

