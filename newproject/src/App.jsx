import React from 'react';
import Mainhome from './mainHome'
import UploadPage from './components/uploadpage';
import { BrowserRouter as Router, Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
    <Router>
    <Routes>
      <Route path="/" element={<Mainhome />} />
      <Route path="/upload" element={<UploadPage />} />
    </Routes>
  </Router>
  </BrowserRouter>
  );
};



export default App;
