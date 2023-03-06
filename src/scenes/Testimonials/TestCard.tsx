import React from 'react';
import { Avatar } from '@material-ui/core';
import "./TestCard.scss"

interface TestCardProps {
    img: string;
    name: string;
    job: string;
}

const TestCard = ({img, name, job}: TestCardProps) => {
  return (
    <div className="crdCont">
        <Avatar src={img} alt="image"
          imgProps={{ style: { borderRadius: "50%" }}} 
          style={{
            width: 120,
            height: 120,
            border: "1px solid lightgray",
            padding: 7,
            marginBottom: 20
          }}
        />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, itaque neque, delectus odio iure explicabo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, itaque neque, delectus odio iure explicabo.</p>
        <p style={{fontStyle: "italic", marginTop: 25}}><span style={{ fontWeight: 500, color: "green"}}>{name}</span>, {job}</p>
    </div>
  )
}

export default TestCard