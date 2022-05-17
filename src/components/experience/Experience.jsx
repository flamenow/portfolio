import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="experiences ">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div
          className="experience__frontend"
          data-aos="slide-right"
          data-aos-offset="0"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />

              <div>
                <h4>HTML</h4>
                <small className="text-light">8.5/10</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">8.5/10</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">8/10</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">2.5/10</small>
              </div>
            </article>
            <article
              className="experience__details"
              id="experience__details-last-child"
            >
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>WordPress</h4>
                <small className="text-light">8/10</small>
              </div>
            </article>
          </div>
        </div>
        {/*END OF FRONTEND*/}

        <div
          className="experience__backend "
          data-aos="slide-left"
          data-aos-offset="0"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          <h3>Web Design</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                {" "}
                <h4>Figma</h4>
                <small className="text-light">10/10</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                {" "}
                <h4>Social Media</h4>
                <small className="text-light">7/10</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                {" "}
                <h4>Branding</h4>
                <small className="text-light">7/10</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                {" "}
                <h4>UX/UI</h4>
                <small className="text-light">8/10</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
