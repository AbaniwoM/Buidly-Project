import React from 'react';
import "./NavTop.scss";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GrTwitter } from "react-icons/gr";

const NavTop = () => {
  const win: Window = window;
  return (
    <div className="navTopContainer">
       <div className="contact">
            <div className="detail">
                <h2>Phone:</h2>
                <h3 onClick={() => (win.location = "tel:+1 XXX 6788 XXX")}>+1 345 6788 3452</h3>
            </div>
            <div className="detail">
                <h2>Email:</h2>
                <h3 onClick={() => (win.location = "mailto:info@yourdomain.com")}>info@yourdomain.com</h3>
            </div>
       </div>
       <div className="icons">
            <li onClick={() => (win.location = "")}><AiFillGithub /></li>
            <li onClick={() => (win.location = "")}><AiFillLinkedin /></li>
            <li onClick={() => (win.location = "")}><GrTwitter /></li>
       </div>
    </div>
  )
}

export default NavTop;