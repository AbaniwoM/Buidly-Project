import React from 'react';
// import TextSlider from "../../component/TextSlider/TextSlider";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Testimonials.scss";
import TestCard from './TestCard';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
const Boy = require("../../component/Images/man-smile.jpg");
const Lady = require("../../component/Images/woman-happy.jpg");
const Man = require("../../component/Images/african-man.jpg");


const PreviousBtn = (props:any) => {
    console.log(props);
    const { className, onClick } = props;
    return (
        <div className={className}
         onClick={onClick} 
        >
          <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
        </div>
    );
};

const NextBtn = (props:any) => {
    console.log(props);
    const { className, onClick } = props;
    return (
        <div className={className}
         onClick={onClick} 
        >
          <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
        </div>
    );
};

const Testimonials = () => {
  return (
    <div className="testCont">
        <h1>Testimonials</h1>
        <div className="testLine"></div>
        <div className="slid">
        <Slider
           prevArrow={<PreviousBtn  />}
           nextArrow={<NextBtn />}
           dots
        >
            <TestCard img={Boy} name="MARK JOE" job="Data Analyst"/>
            <TestCard img={Lady} name="PAULA WILSON" job="UI/UX Developer"/>
            <TestCard img={Man} name="PETER THOMPSON" job="Software Engineer"/>
        </Slider>
        </div>
    </div>
  )
}

export default Testimonials