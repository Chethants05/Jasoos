import React from 'react';
import Mainhome from './mainHome'
import './App.css'
import UploadPage from './components/uploadpage';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
const App = () => {
  return (
<div className='app'>
    <Router>
    <Routes>
      <Route path="/" element={<Mainhome />} />
      <Route path="/upload" element={<UploadPage />} />
    </Routes>
  </Router>
  </div>
  );
};



export default App;
