import React from "react";
import "./Footer.css";
import svg from "../../Assets/treehouse-typelockup.svg";

import { AiFillTwitterCircle } from "react-icons/ai";
import { RiFacebookCircleLine } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <section className="footerSection">
      <div className="footerContainer">
        <div className="footerLogo">
          <img src={svg} />
        </div>

        <div className="footerLinks flex">
          <p>©2023 Treehouse Island, Inc.</p>

          <ul className="footerList">
            <li className="footerListItems">
              <a href="#" className="footer-anchor">
                About
              </a>
            </li>
            <li className="footerListItems">
              <a href="#" className="footer-anchor">
                Careers
              </a>
            </li>
            <li className="footerListItems">
              <a href="#" className="footer-anchor">
                Blog
              </a>
            </li>
            <li className="footerListItems">
              <a href="#" className="footer-anchor">
                Affiliate Program
              </a>
            </li>
            <li className="footerListItems">
              <a href="#" className="footer-anchor">
                Terms
              </a>
            </li>
            <li className="footerListItems">
              <a href="#" className="footer-anchor">
                Privacy
              </a>
            </li>
            <li className="footerListItems">
              <a href="#" className="footer-anchor">
                Contact
              </a>
            </li>
          </ul>

          <div className="socials">
            <ul className="socialLists">
              <li className="socialListItems">
                <a href="#" className="social-anchor">
                  <AiFillTwitterCircle className="icon" />
                </a>
              </li>
              <li className="socialListItems">
                <a href="#" className="social-anchor">
                  <TiSocialYoutubeCircular className="icon" />
                </a>
              </li>
              <li className="socialListItems">
                <a href="#" className="social-anchor">
                  <RiFacebookCircleLine className="icon" />
                </a>
              </li>
              <li className="socialListItems">
                <a href="#" className="social-anchor">
                  <TiSocialLinkedinCircular className="icon" />
                </a>
              </li>
              <li className="socialListItems">
                <a href="#" className="social-anchor">
                  <AiOutlineInstagram className="icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="stripes"></div>
    </section>
  );
};

export default Footer;
