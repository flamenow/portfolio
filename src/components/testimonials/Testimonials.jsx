import React from "react";
import "./testimonials.css";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR1} alt="Avatar One" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            eum, nam porro ratione eligendi sunt, saepe placeat ipsa tempore
            doloribus quo beatae similique nihil aperiam commodi labore
            molestias voluptate! Aliquam!
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR4} alt="Avatar One" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            eum, nam porro ratione eligendi sunt, saepe placeat ipsa tempore
            doloribus quo beatae similique nihil aperiam commodi labore
            molestias voluptate! Aliquam!
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR2} alt="Avatar One" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            eum, nam porro ratione eligendi sunt, saepe placeat ipsa tempore
            doloribus quo beatae similique nihil aperiam commodi labore
            molestias voluptate! Aliquam!
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR3} alt="Avatar One" />
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              eum, nam porro ratione eligendi sunt, saepe placeat ipsa tempore
              doloribus quo beatae similique nihil aperiam commodi labore
              molestias voluptate! Aliquam!
            </small>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
