import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
//   NavBtn,
//   NavBtnLink,
} from './NavBarElements';
  
const NavBar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/crypto' activeStyle>
            Crypto
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact
          </NavLink>

        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};
  
export default NavBar;