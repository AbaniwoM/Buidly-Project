import React from 'react';
import TypedComponent from '../../component/Typed/TypedComponent';
import "./Hero.scss"
import HeroCard from './HeroCard';
import {Link} from 'react-scroll';
const Monitor = require("../../component/Images/monitor.png");
const Art = require("../../component/Images/artly.png");
const Puzzle = require("../../component/Images/puzzly.png");
const Message = require("../../component/Images/message.png");


const Hero = () => {
  const win: Window = window;
  return (
    <div>
    <div className="heroContainer">
        <div className="heroNote">
            {/* <div className="txt" onClick={ () => (win.location = "https://www.freepik.com/free-photos-vectors/fintech")}>Image by liuzishan</div> on Freepik */}
        </div>
        <div className="mainText">
           <div className="mainTop">
              <h1>We are Expert in </h1>
              <h1><TypedComponent /></h1>
           </div>
           <p>We Nuture Financial Solutions</p>
           <Link to="ftArea" smooth={true} duration={1000}>
              <button className="mainButton">HIRE US</button>
           </Link>
        </div>
    </div>
    <div className="awardWin">
      <h2>Welcome to Bu!dly</h2>
      <div className="lower">
        <div className="lowerImg">
        </div>
        <div className="texts">
          <div className="up">
          <div className="one">
            {
              <HeroCard 
              img_src={Monitor} 
              text={"Web Design"}
              />
            }
          </div>
          <div className="two">
            {
              <HeroCard 
              img_src={Puzzle} 
              text={"Branding & Identity"}
              />
            }
          </div>
          </div>
          <div className="down">
          <div className="three">
            {
              <HeroCard 
              img_src={Art} 
              text={"Art Direction"}
              />
            }
          </div>
          <div className="four">
            {
              <HeroCard 
              img_src={Message} 
              text={"Copywriting"}
              />
            }
          </div>
          </div>
        </div>
      </div>
      <div className="heroNote">
        Icons by 
        <div className="txt" onClick={() => (win.location = "https://icons8.com")}>Icons8</div>
      </div>
    </div>
    </div>
  )
}

export default Hero


