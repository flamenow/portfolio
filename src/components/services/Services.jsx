import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div
        className="container services__container"
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        data-aos-mirror="false"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>HTML, CSS and JavaScript;</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>GIT and Github;</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Browser Devtools;</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>MVC;</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>API and Authentication &</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Page design and user webflow.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEV */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Prototyping, wireframing and user flow;</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Figma experienced;</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User research and usability testing;</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Accessibility;</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User empathy;</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Product design;</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Nielsen's Usability Heuristics &</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Colors, typography and icons.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Landing Pages;</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Flyers, ebooks and Infographics;</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mobile Apps;</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Social Midia posts and ADs;</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Branding, logo and more;</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
