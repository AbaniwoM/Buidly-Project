import React from 'react';
import "./InnerHero.scss";

interface InnerHeroProps {
    aboutIn: string;
}

const InnerHero = ({aboutIn}: InnerHeroProps) => {
  return (
    <div className="innerBg">
        <h1>{aboutIn}</h1>
        <p>We Nuture Financial Solutions</p>
    </div>
  )
}

export default InnerHero;