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
            <a href="#services">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>2+ Years Studing</small>
              </article>
            </a>
            <article className="about__card" id="about__card--clients">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>5+ Satisfied</small>
            </article>

            <a href="#portfolio">
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>6+ Completed</small>
              </article>
            </a>
          </div>
          <p>Hello everybody! Pleased to meet you 🙂</p>
          <p>
            I am Marcos Mujica, 24 years old. I was born in Montevideo, Uruguay,
            naturalized brazilian when I was a child, living now in Pelotas, Rio
            Grande do Sul. I graduated in International Relations in early 2020
            at the Federal University of Pelotas (UFPel).
          </p>{" "}
          <p>
            {" "}
            Since before the pandemic, I was already studying C, Ladder,
            Assembly and Delphi at my Electronic Vocational Training at IFSul,
            which I finished in 2018.
          </p>
          <p>
            In 2020, I joined Alura and studied WebDesign, User Experience, CSS,
            HTML, JavaScript, JAVA, PHP, RUBY and more. After I got to know a
            little bit more about the two sides of web development, I fell in
            love with UX and decided to focus on it and on front-end
            development.
          </p>
          <p>
            It was around that time that I did the UX Unicorn course, offered by
            the well-known UX designer Leandro Rezende. This was when I firmed a
            true passion for the field, formed a team and participated in a
            really cool UX project which I will never forget.
          </p>
          <p>
            Speaking a bit about the path that made me who I am: I lived a good
            portion of my life in Uruguay as well as in Gran Canária-Spain for a
            whole year. Also, inspired by the amazing culinary of my homeland
            (of which my father never lets me forget), I even opened my own
            uruguayan pizzaria, running the business and being a pizza maker!{" "}
          </p>
          <p>
            Nowadays, while I work as a Freelancer Web/Graphic Designer to a few
            companies and make some voice-overs in Spanish, I am looking for a
            full time job to work as a Front-End Developer or UX Designer.
          </p>
          <div className="about__button">
            <a href="#contact" className="btn">
              Send me a message!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
