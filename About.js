import React from "react";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import AboutBackground from "../Assets/about-background.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className = "about-section-container">
        <div className ="about-background-image-container">
            <img src={AboutBackground} alt="" />
        </div>
        <div className ="about-section-image-container">
            <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className ="About-section-text-container">
            <p className ="primary-subheading">About</p>
            <h1 className ="primary-heading">
                Food Is An Important Part Of A Balanced Diet
            </h1>
            <p className ="primary-text">
                "A restaurant is a place where you go to celebrate a special occasion, or to create a new one." - Unknown
            </p>
            <p className ="primary-text">
                "There is no better feeling in the world than a warm pizza box on your lap." - Kevin James
            </p>
            <div className ="about-buttons-container">
                <button className ="secondary-button">Learn More</button>
                <button className ="watch-video-button"> <BsFillPlayCircleFill/>Watch Video</button>

            </div>

        </div>
        
    </div>
  )
}

export default About
