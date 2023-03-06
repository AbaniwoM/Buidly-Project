import React from 'react';
import Footer from '../../component/Footer/Footer';
import FooterTop from '../../component/Footer/FooterTop';
import NavBar from '../../component/Navbar/NavBar';
import NavTop from '../../component/Navbar/NavTop';
import About from '../About/About';
import Hero from '../Hero/Hero';
import Projects from '../Projects/Projects';
import Testimonials from '../Testimonials/Testimonials';
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="homeContainer">
        <div className="header">
            <NavTop />
            <NavBar />
        </div>
        <div className="main">
            <Hero />
            <About />
            <Projects />
            <Testimonials />
        </div>
        <div className="footer">
          <FooterTop />
          <Footer />
        </div>
    </div>
  )
}

export default HomePage;