import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Studing</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>5+ Satisfied</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>6+ Completed</small>
            </article>
          </div>
          <p>
            My name is Marcos Mujica, 24, born in Montevideo - Uruguay, living
            in Pelotas-RS, south of Brazil. I graduated in International Affairs
            in 2019 at the Federal University of Pelotas - UFPel.
          </p>
          <p>
            Since before the pandemic, I was already studying C, ladder,
            assembly and delphi at my electronic vocational training at IFSul,
            finished in 2018. In 2020 I joined Alura and started studiyng
            WebDesign, User Experience, CSS, HTML, JavaScript, JAVA, PHP, RUBY
            and more. After getting to know a little about both sides of web
            development, I fell in love with UX and decided to focus in
            front-end and UX.
          </p>{" "}
          <p>
            {" "}
            It was then that I did the UX Unicorn course, offered by the known
            Leandro Rezende, where I formed a team and made a UX project.
          </p>
          <p>
            I also lived 1 year in Gran Canária-Spain (2010), oppened my own
            pizzaria (2021) and met amazing people in the process! Nowadays, I'm
            searching for a full time job working as front-end dev or ux
            designer. Meanwhile, I'm working as a freelancer web/graphic
            designer to a few companies.
          </p>
          <div className="about__button">
            <a href="#contact" className="btn btn-large">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
