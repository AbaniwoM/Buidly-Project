import React from 'react';
import "./AboutCard.scss";

interface AboutCardProps {
    number: string;
    about: string;
}

const AboutCard = ({ number, about}: AboutCardProps) => {
  return (
    <div className="about-container">
       <div className="upper">
          <h1>{number}</h1>
       </div>
       <div className="bottom">
          <h3>{about}</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
       </div>  
    </div>
  )
}

export default AboutCard;