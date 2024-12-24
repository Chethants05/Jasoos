// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #4a90e2;
  padding: 15px;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavLink = styled(Link)`
  color: white;
  margin: 0 15px;
  cursor: pointer;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #d9d9d9;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="home" smooth={true} duration={500}>Home</NavLink>
      <NavLink to="images" smooth={true} duration={500}>Images</NavLink>
      <NavLink to="about" smooth={true} duration={500}>About Us</NavLink>
    </Nav>
  );
};

export default Navbar;
