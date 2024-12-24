import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Images from './components/Images';
import AboutUs from './components/AboutUs';
import ImageUploadAndDisplay from './imageupload';
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <ImageUploadAndDisplay/>
      <Images />
      <AboutUs />
    </div>
  );
};



export default App;
