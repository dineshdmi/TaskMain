// App.js

import React, { useState, useEffect } from 'react';
import './app.css';
import Footer from './Components/Footer/Footer';
import Booking from './Components/Pages/Booking';
import Navbar from './Components/Navbar/navbar';
import Dial from './Components/Pages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignup from './Components/Pages/Login';
import About from './Components/Pages/About';
import TravelInformationPage from './Components/TravelInformation/TravelInformationPage';
import Home from './Components/Pages/Home';
import Product from './Components/Pages/Product';

const App = () => {
  const [travelInfoData, setTravelInfoData] = useState('');

  // Effect to retrieve data from localStorage when the component mounts
  useEffect(() => {
    const storedData = localStorage.getItem('travelInfoData');
    if (storedData) {
      setTravelInfoData(storedData);
    }
  }, []);

  // Effect to save data to localStorage whenever travelInfoData changes
  useEffect(() => {
    localStorage.setItem('travelInfoData', travelInfoData);
  }, [travelInfoData]);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {/* <Booking /> */}
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Dial />} />
          <Route path="/product" element={<Product />} />
          <Route
            path="/Home"
            element={<TravelInformationPage data={travelInfoData} />}
          />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
