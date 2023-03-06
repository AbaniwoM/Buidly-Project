import React from 'react';
import "./HeroCard.scss";

interface HeroCardProps {
    img_src: string;
    text: string;
}

const HeroCard = ({ img_src, text }: HeroCardProps) => {
  return (
    <div className="container">
       <div className="top">
          <div>
            <img 
              src= {img_src} 
              alt= {text + "img"}
            />
          </div>
          <div className="texts">{text}</div>
       </div>
       <div className="btm">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
        <h3>Read More</h3>
       </div>
    </div>
  )
}

export default HeroCard;