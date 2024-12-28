import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from './components/Navbar';
import Home from './components/Home';
import Images from './components/Images';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
// import Clients from './components/Clients';

function MainHome() {
  const navigate = useNavigate(); // Initialize navigate

  const handleNavigation = () => {
    navigate('/upload'); // Navigate to the Upload Page
  };

  return (
    <div>
      <Navbar />
      <Home />
      <AboutUs />
      <Images />
      {/* <Clients /> */}
      <Footer />
    </div>
  );
}

export default MainHome;
