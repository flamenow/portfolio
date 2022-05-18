import React from "react";
import "./testimonials.css";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonialsData = [
  {
    avatar: AVATAR1,
    name: "Marina Marchi",
    review:
      "Foi-me muito agradável o processo de construção do site, desde a troca de ideias até a paciência com a troca de informações e mudanças repentinas. Ademais, foram prestados os serviços de tradução e locução para os meus atendimentos. O site resultou funcional e de bom gosto e, por fim, o atendimento foi profissional, cordial e até mesmo divertido. Super recomendo seus serviços !",
  },
  {
    avatar: AVATAR2,
    name: "Matheus Nogueira",
    review:
      "Sempre que precisei de ajuda com materiais, páginas e problemas de UX, o Mujica estava lá para ajudar. Mesmo aquele trabalho com pouco tempo para entregar, nunca tivemos um trabalho que não fosse entregue e com qualidade aprovada. Super indico!",
  },
  {
    avatar: AVATAR3,
    name: "Guilherme Rodrigues",
    review:
      "Fui sócio do Marcos no projeto de sua pizzaria uruguaia. Juntamos nossos conhecimentos e formamos uma dupla eficiente na gestão do negócio. Da cozinha a gestão empresarial, Marcos demonstra competência e responsabilidade no que faz. Um super parceiro de trabalho. Recomendo!",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from co-workers</h5>
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
