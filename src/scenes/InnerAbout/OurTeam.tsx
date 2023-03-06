import React from 'react'
import TeamCard from '../../component/TeamCard/TeamCard';
import "./OurTeam.scss";
const Chap = require("../../component/Images/portrait-man.jpg");
const Clare = require("../../component/Images/business-woman.jpg");
const Dalton = require("../../component/Images/male-posing.jpg");

const OurTeam = () => {
  return (
    <div className="ourTeam">
       <h1>Our Team</h1>
       <div className="tmLine"></div>
       <div className="tmBoxes">
            <TeamCard img={Chap} name="Hosphie Chap" job="CO-FOUNDER, PRESIDENT" />
            <TeamCard img={Clare} name="Mary Clare" job="CO-FOUNDER, COO" />
            <TeamCard img={Dalton} name="Bob Dalton" job="MARKETING" />
       </div>
    </div>
  )
}

export default OurTeam