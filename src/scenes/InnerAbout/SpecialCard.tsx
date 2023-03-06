import React from 'react';
import "./SpecialCard.scss";

interface SpecialCardProps {
    img_src: string;
    text: string;
}

const SpecialCard = ({ img_src, text }: SpecialCardProps) => {
  return (
    <div className="container">
       <div className="top">
          <div>
            <img 
              className="top-img"
              src= {img_src} 
              alt= {text + "img"}
            />
          </div>
          <div className="texts">{text}</div>
       </div>
       <div className="btm">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
        <h3>Learn More</h3>
       </div>
    </div>
  )
}

export default SpecialCard;