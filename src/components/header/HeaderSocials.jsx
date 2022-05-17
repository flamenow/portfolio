import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/marcos-mujica-m/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/flamenow" target="_blank">
        <AiFillGithub />
      </a>
      <a href="https://instagram.com/m_mujica_m" target="_blank">
        <FaInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
