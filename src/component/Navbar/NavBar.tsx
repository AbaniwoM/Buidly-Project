import React from 'react';
import Hamburger from '../Hamburger/Hamburger';
import "./NavBar.scss";
import {Link} from 'react-scroll';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="navBarContainer">
       <div className="title" onClick={() => navigate("/")}>Bu!dly</div>
       <div className="content">
           <li className="hmLink">
              <div onClick={() => navigate("/home")}>Home</div>
            </li>
           <li>
              <div onClick={() => navigate("/about")}>About</div>
           </li>
           <Link to="projs" smooth={true} duration={1000}>
             <li className="pjLink">Projects</li>
           </Link>
           <li>
              <div onClick={() => navigate("/contact")}>Contact</div>
           </li>
       </div>
       <div className="hamburger">
          <Hamburger />
       </div>
    </div>
  )
}

export default NavBar;