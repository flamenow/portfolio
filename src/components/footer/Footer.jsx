import React from "react";
import "./footer.css";
import { GrFacebookOption } from "react-icons/gr";
import { FiInstagram } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Flame NoW
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com">
          <GrFacebookOption />
        </a>
        <a href="https://instagram.com">
          <FiInstagram />
        </a>
        <a href="https://github.com">
          <BsGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>
          &copy; Done by Marcos Mujica(flamenow). All rights reserved. 2022
        </small>
      </div>
    </footer>
  );
};

export default Footer;
