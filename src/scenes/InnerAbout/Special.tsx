import React from 'react';
import "./Special.scss";
import SpecialCard from './SpecialCard';
const Monitor = require("../../component/Images/monitor-filled.png");
const Puzzle = require("../../component/Images/puzzle-filled.png");

const Special = () => {
  return (
    <div className="specialCont">
        <div className="specialties">
            <h2>Our Specialties</h2>
            <div className="lineSpec"></div>
            <div className="we-do">
            <div className="fst">
            {
              <SpecialCard 
              spe_img={Monitor} 
              spe_text={"Web Design"}
              />
            }
          </div>
          <div className="scd">
            {
              <SpecialCard 
              spe_img={Puzzle} 
              spe_text={"Intuitive Thinkers"}
              />
            }
          </div>
          </div>  
        </div>
        <div className="special-img">
          </div>
    </div>
  )
}

export default Special;