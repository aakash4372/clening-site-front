import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbarsection from './Page/Navbar';
import Carousel from './Page/Carousel';
import Aboutus from './Page/Aboutus';
import ZigZagLayout from './routerpage/Service';
import CustomSlider from './routerpage/Work';
import Contact from './Page/Contact';
import ScrollIndicator from './Page/Indicator';
import ScrollToTop from './Page/top';

const Layout = ({ children }) => (
  <>
    <Navbarsection /> 
    {children}
  </>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Layout><Carousel /></Layout>} />
        <Route path="/about" element={<Layout><Aboutus /></Layout>} />
        <Route path="/services" element={<Layout><ZigZagLayout /></Layout>} />
        <Route path="/our-work" element={<Layout><CustomSlider /></Layout>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <ScrollIndicator/>
    </Router>
  );
}
