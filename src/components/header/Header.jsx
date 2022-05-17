import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Marcos Mujica</h1>
        <h5 className="text-ligth">Front-End Developer</h5>
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
