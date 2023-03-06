import React from 'react';
import Footer from '../../component/Footer/Footer';
import FooterTop from '../../component/Footer/FooterTop';
import InnerHero from '../../component/InnerHero/InnerHero';
import NavBar from '../../component/Navbar/NavBar';
import NavTop from '../../component/Navbar/NavTop';
import Testimonials from '../Testimonials/Testimonials';
import "./InnerAbout.scss";
import OurTeam from './OurTeam';
import Special from './Special';

const InnerAbout = () => {
  return (
    <div className='inAbtCont'>
       <NavTop />
       <NavBar />
       <InnerHero aboutIn="About Us" />
       <Special />
       <OurTeam />
       <Testimonials />
       <FooterTop />
       <Footer />
    </div>
  )
}

export default InnerAbout;