import React from "react";
import "./testimonials.css";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonialsData = [
  {
    avatar: AVATAR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste perferendis debitis voluptatem rem cupiditate, repellendus eius facilis provident aspernatur eaque odit quis, neque quisquam nisi excepturi delectus quo molestias fugiat.",
  },
  {
    avatar: AVATAR2,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste perferendis debitis voluptatem rem cupiditate, repellendus eius facilis provident aspernatur eaque odit quis, neque quisquam nisi excepturi delectus quo molestias fugiat.",
  },
  {
    avatar: AVATAR3,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste perferendis debitis voluptatem rem cupiditate, repellendus eius facilis provident aspernatur eaque odit quis, neque quisquam nisi excepturi delectus quo molestias fugiat.",
  },
  {
    avatar: AVATAR4,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste perferendis debitis voluptatem rem cupiditate, repellendus eius facilis provident aspernatur eaque odit quis, neque quisquam nisi excepturi delectus quo molestias fugiat.",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonialsData.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
