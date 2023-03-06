import React from 'react';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GrTwitter } from "react-icons/gr";
import "./TeamCard.scss";

interface TestCardProps {
    img: string;
    name: string;
    job: string;
}

const TeamCard = ({ img, name, job}: TestCardProps) => {
  const win: Window = window;
  return (
    <div className="box-container">
       <div className="tmImg">
           <img src={img} alt={"img"} />
        </div>
       <div className="introd">
            <div className="nam">{name}</div>
            <div className="jb">{job}</div>
       </div>
       <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident 
        voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.
        </p>
        <div className="tmIcons">
            <li onClick={() => (win.location = "")}><AiFillGithub /></li>
            <li onClick={() => (win.location = "")}><AiFillLinkedin /></li>
            <li onClick={() => (win.location = "")}><GrTwitter /></li>
       </div>
    </div>
  )
}

export default TeamCard;