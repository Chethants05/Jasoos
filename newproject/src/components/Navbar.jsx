import React, { useState } from 'react';
import { Link } from 'react-scroll';
import JasoosLogo from '../assets/Jasoos.png';
import styled from 'styled-components';

const Othernav = styled.div`
  font-size: 15px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding-left: 80px;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    padding-left: 0;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')}; /* Toggle visibility */
    background: rgba(1, 29, 64, 0.95);
    position: absolute;
    top: 60px; /* Adjust this value as per your navbar height */
    left: 0;
    z-index: 1000; /* Make sure it's above other content */
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 25px;

  @media (max-width: 600px) {
    display: block; /* Show the hamburger icon on mobile */
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close
  };

  return (
    <nav
      style={{
        fontFamily: "Poppins",
        position: 'sticky',
        top: '0',
        zIndex: '1000',
        background: "linear-gradient(87deg, rgb(12, 100, 184) 0%, rgb(1, 29, 64) 100%)",
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: "white",
        padding: "10px 20px",
      }}
    >
      <div
        className="logo"
        style={{
          fontSize: "20px",
          fontWeight: "700",
        }}
      >
        <img src={JasoosLogo} style={{ width: "30px" }} alt="Logo" />
      </div>
      
      <Hamburger onClick={toggleMenu}>☰</Hamburger> {/* Hamburger Icon */}

      <Othernav isOpen={isOpen}>
        <Link
          to="home"
          smooth={true}
          duration={500}
          style={{
            fontWeight: '400',
            color: 'white',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'color 0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.color = '#4a90e2')}
          onMouseLeave={(e) => (e.target.style.color = 'white')}
        >
          Home
        </Link>

        <Link
          to="AboutUs"
          smooth={true}
          duration={500}
          style={{
            fontWeight: '400',
            color: 'white',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'color 0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.color = '#4a90e2')}
          onMouseLeave={(e) => (e.target.style.color = 'white')}
        >
          About Us
        </Link>

        <Link
          to="services"
          smooth={true}
          duration={500}
          style={{
            fontWeight: '400',
            color: 'white',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'color 0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.color = '#4a90e2')}
          onMouseLeave={(e) => (e.target.style.color = 'white')}
        >
          Services
        </Link>

        <Link
          to="images"
          smooth={true}
          duration={500}
          style={{
            fontWeight: '400',
            color: 'white',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'color 0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.color = '#4a90e2')}
          onMouseLeave={(e) => (e.target.style.color = 'white')}
        >
          Tournaments
        </Link>
      </Othernav>
      
      {/* JOIN US! Button */}
      <Link
        to="footer"
        smooth={true}
        duration={500}
        style={{
          fontWeight: '400',
          color: 'white',
          textDecoration: 'none',
          cursor: 'pointer',
          transition: 'color 0.3s',
        }}
      >
        <button
          style={{
            background: "transparent",
            border: "1px solid rgb(255, 255, 255)",
            color: "white",
            fontSize: "13px",
            fontWeight: "bold",
            padding: "10px 20px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "white";
            e.target.style.color = "black";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#4a90e2";
          }}
        >
          JOIN US!
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
