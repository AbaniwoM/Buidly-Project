import React from 'react';
import AboutCard from "./AboutCard";
import "./About.scss";

const About = () => {
  return (
    <div className="aboutContainer">
        <div className="values">
          {
            <AboutCard number={"01"} about={"Our Values"}/>
          }
        </div>
        <div className="mission">
          {
            <AboutCard number={"02"} about={"Our Mission"}/>
          }
        </div>
        <div className="phil">
          {
            <AboutCard number={"03"} about={"Our Philosophy"}/>
          }
        </div>
    </div>
  )
}

export default About;