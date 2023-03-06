import React from 'react';
import "./SpecialCard.scss";

interface SpecialCardProps {
    spe_img: string;
    spe_text: string;
}

const SpecialCard = ({ spe_img, spe_text }: SpecialCardProps) => {
  return (
    <div className="spe-container">
       <div className="spe-top">
          <div>
            <img 
              className="spe-top-img"
              src= {spe_img} 
              alt= {spe_text + "img"}
            />
          </div>
          <div className="spe-texts">{spe_text}</div>
       </div>
       <div className="spe-btm">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
        <h3>Learn More</h3>
       </div>
    </div>
  )
}

export default SpecialCard;