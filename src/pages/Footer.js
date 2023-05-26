import React from "react";
import Logo from "../images/LogoWhite.png";
import { Twitter } from "grommet-icons";
import { Linkedin } from "grommet-icons";
import { Youtube } from "grommet-icons";
import { Facebook } from "grommet-icons";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <Twitter />
          <Linkedin />
          <Youtube />
          <Facebook />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>About</span>
          <span>Help</span>
          <span>Share</span>
          <span>Feedback</span>
          <span>Copyright</span>
        </div>
        <div className="footer-section-columns">
          <span>+65 9016 7362</span>
          <span>support@connect.com</span>
          <span>feedback@connect.com</span>
          <span>contact@connect.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
