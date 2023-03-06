import React from 'react';
import Footer from '../../component/Footer/Footer';
import InnerHero from '../../component/InnerHero/InnerHero';
import NavBar from '../../component/Navbar/NavBar';
import NavTop from '../../component/Navbar/NavTop';
import Contact from './Contact';
import "./InnerContact.scss";

const InnerContact = () => {
  return (
    <div className='inCont'>
       <NavTop />
       <NavBar />
       <InnerHero aboutIn="Contact Us" />
       <Contact />
       <Footer />
    </div>
  )
}

export default InnerContact;