import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import {FaFacebook} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
        <div className="footer-secton-one">
            <div className="footer-logo-container">
                <img src={Logo} alt="" />
            </div>
            <div className="footer-icons">
                <BsTwitter/>
                <SiLinkedin/>
                <BsYoutube/>
                <FaFacebook/>
            </div>
        </div>
        <div className="footer-section-two">
            <div className="footer-section-columns">
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Quality</span>
                <span>Carrers</span>
                <span>Testimonials</span>
                <span>Work</span>
            </div>
            <div className="footer-section-columns">
                <span>255-4551-7523</span>
                <span>hello@food.com</span>
                <span>press@food.com</span>
                <span>contact@food.com</span>
            </div>
            <div className="footer-section-columns">
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
            </div>
        </div>
    </div>
  )
}

export default Footer
