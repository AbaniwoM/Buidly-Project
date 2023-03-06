import React from 'react';
import "./Footer.scss";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GrTwitter } from "react-icons/gr";

const Footer = () => {
  const win: Window = window;
  return (
    <div id="ftArea">
    <div className="footCont">
      <div className="upp">
        <div className="ftAbout">
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
        </div>
        <div className="ftFeatures">
            <h3>Features</h3>
            <ul>
                <li>About Us</li>
                <li>Testimonials</li>
                <li>Contact Us</li>
                <li>Projects</li>
            </ul>
        </div>
        <div className="ftFollow">
            <h3>Follow Us</h3>
            <div className="ftIcons">
            <li onClick={() => (win.location = "")}><AiFillGithub /></li>
            <li onClick={() => (win.location = "")}><AiFillLinkedin /></li>
            <li onClick={() => (win.location = "")}><GrTwitter /></li>
            </div>
        </div>
        <div className="ftNews">
            <h3>Subscribe Newsletter</h3>
            <div className="emailInput">
                <input placeholder="Enter Email" type="email" />
                <button>Send</button>
            </div>
        </div>
      </div>
      <div className="ftLine"></div>
      <div className="downn">
        <p>Copyright &copy; 2023 All rights reserved | Pictures by <span className="ftSpan" onClick={ () => (win.location = "https://www.freepik.com/free-photos-vectors/fintech")}>Freepik</span></p>
      </div>
    </div>
    </div>
  )
}

export default Footer;

