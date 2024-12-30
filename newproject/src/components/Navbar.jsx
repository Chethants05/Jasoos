import React, { useState } from 'react';
import { Link } from 'react-scroll';
import JasoosLogo from '../assets/Jasoos.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      style={{
        fontFamily: 'Poppins',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: 'linear-gradient(87deg, rgb(12, 100, 184) 0%, rgb(1, 29, 64) 100%)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        padding: '10px 20px',
      }}
    >
      <div
        className="logo"
        style={{
          fontSize: '20px',
          fontWeight: '700',
        }}
      >
        <img
          src={JasoosLogo}
          alt="Logo"
          style={{
            width: '30px',
          }}
        />
      </div>

      {/* Hamburger Menu Icon */}
      <div
        className="hamburger"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{
          display: 'none',
          cursor: 'pointer',
          fontSize: '25px',
        }}
      >
        &#9776;
      </div>

      {/* Navigation Links */}
      <div
        className={`nav-links ${isMenuOpen ? 'open' : ''}`}
        style={{
          display: 'flex',
          gap: '20px',
          fontSize: '15px',
          paddingLeft: '80px',
          flexDirection: isMenuOpen ? 'column' : 'row',
          position: isMenuOpen ? 'absolute' : 'static',
          top: isMenuOpen ? '60px' : 'auto',
          background: isMenuOpen ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
          padding: isMenuOpen ? '10px' : '0',
          right: isMenuOpen ? '10px' : 'auto',
          borderRadius: isMenuOpen ? '10px' : '0',
          
        }}
      >
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
      </div>

      {/* JOIN US! Button */}
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
      >
        <button
          style={{
            background: 'transparent',
            border: '1px solid rgb(255, 255, 255)',
            color: 'white',
            fontSize: '13px',
            fontWeight: 'bold',
            padding: '10px 20px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.color = 'black';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'white';
          }}
        >
          JOIN US!
        </button>
      </Link>

      <style>
        {`
          @media (max-width: 768px) {
            .hamburger {
              display: block;
            }

            .nav-links {
              display: none;
            }

            .nav-links.open {
              display: flex;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
