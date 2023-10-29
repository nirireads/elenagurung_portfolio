import React from 'react'
import './App.scss';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import About from './components/About';
import MyNumbers from './components/MyNumbers';
import Portfolio from './components/Portfolio';
import Brands from './components/Brands';
import Testimonials from './components/MoreFromWeb'
import Contact from './components/Contact';
// import Demo from './components/Demo'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <MyNumbers />
      <Portfolio />
      <Brands />
      <Testimonials />
      {/* <Demo /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
