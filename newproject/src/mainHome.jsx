import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Images from './components/Images';
import AboutUs from './components/AboutUs';
import ImageUploadAndDisplay from './imageupload';

function mainHome() {
  return (
    <div>
              <Navbar />
              <Home />
              <Images />
              <AboutUs />
              <button>
                Upload Page
              </button>
    </div>
  )
}

export default mainHome
