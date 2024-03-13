import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";


const Testimonial = () => {
  return (
    <div className ="work-section-wraper">
        <div className ="work-section-top">
            <p className ="primary-subheading">Testimonial</p>
            <h1 className ="primary-heading">What They Are Saying</h1>
            <p className ="primary-text">
                Incredible toasted ravioli, perfectly poured martini, tenderloin oscar, dinner salad with a delicious house dressing, baked potato, loaded. Oh and what a great wait staff!
            </p>
        </div>
        <div className ="testimonial-section-bottom">
            <img src={ ProfilePic } alt="" />
            <p>
                Incredible toasted ravioli, perfectly poured martini, tenderloin oscar, dinner salad with a delicious house dressing, baked potato, loaded. Oh and what a great wait staff!
            </p>
            <div className ="testimonials-stars-container">
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <h2>Jhon Doe</h2>
        </div>
    </div>
  );
};

export default Testimonial;
