import React from 'react';
import "./Projects.scss";

const Projects = () => {
  return (
    <div id="projs">
    <div className="projCont">
        <h1>Featured Projects</h1>
        <div className="line"></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, itaque neque, delectus odio iure explicabo.</p>
        <div className="boxes">
           <div className="box-one">
           <div className="hide">Project 1: WEB APPLICATION</div>
           </div>
           <div className="box-two">
           <div className="hide">Project 2: BRANDING</div>
           </div>
           <div className="box-three">
           <div className="hide">Project 3: WEBSITE</div>
           </div>   
        </div>
        <button className="projButton">SHOW ALL WORKS</button>
    </div>
    </div>
  );
}

export default Projects