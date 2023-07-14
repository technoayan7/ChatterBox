import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
      <footer className="footer">
        <ContentWrapper>
          <ul className="menuItems">
            <li className="menuItem">Terms Of Use</li>
            <li className="menuItem">Privacy-Policy</li>
            <li className="menuItem">About</li>
            <li className="menuItem">Blog</li>
            <li className="menuItem">FAQ</li>
          </ul>
          <div className="infoText">
            The website Moviz is a Thai movie streaming platform that offers free
            access to a wide range of content, including Thai and foreign movies
            and TV shows. It was created in 2022 by Thai developers with the
            goal of providing a free streaming service for Thai users. The
            website has gained popularity and currently boasts over 1 million
            users. It is ad-free and legal in Thailand, but users should be
            cautious about the legality of the content in their own countries.
            While it provides a convenient option for free streaming, it may not
            be available in all countries and might have lower content quality
            compared to other streaming services. Users should also be mindful
            of potential risks such as malware or viruses.
          </div>
          <div className="socialIcons">
            <span className="icon">
              <FaFacebookF />
            </span>
            <span className="icon">
              <FaInstagram />
            </span>
            <span className="icon">
              <FaTwitter />
            </span>
            <span className="icon">
              <FaLinkedin />
            </span>
          </div>
        </ContentWrapper>
      </footer>
    );
};

export default Footer;
