import React from 'react'
import './app.css'
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/navbar';
import Dial from './Components/Pages/Contact';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginSignup from './Components/Pages/Login';
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Dial />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      <Home />
      <Footer />
      </BrowserRouter>
    </div>
  )
}
export default App;