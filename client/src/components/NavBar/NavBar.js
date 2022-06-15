import React, { useState, Fragment } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavBarElements';

// import { IconContext } from 'react-icons/lib';

import Auth from "../../Utils/Auth";


  
const NavBar = () => {

  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click);


  //if (Auth.loggedIn()) {
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
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
//  } 
//  else {
//       return (
//       <NavMenu onClick={handleClick} click={click}>


//           <NavLink to="/home" onClick={event =>  window.location.href='/'}>
//               Home
//           </NavLink>
 
      

//           <NavLink to="/login" onClick={event => window.location.href='/login'}>
//               Log in / Signup
//           </NavLink>

//       </NavMenu>
//       );
//     }
};
  
export default NavBar;