import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fcst0s4",
        "template_zmpeni4",
        form.current,
        "vCL9LvbCLALmESCTl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <a href="mailto:contato@gomujica.online" target="_blank">
            {" "}
            <article className="contact__option">
              <AiOutlineMail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>marcosmujica3@gmail.com</h5>
            </article>
          </a>{" "}
          <a href="https://m.me/marcos.mujicamachado" target="_blank">
            <article className="contact__option">
              <RiMessengerLine className="contact__option-icon" />
              <h4>Messenger</h4>
              <h5>Marcos Mujica</h5>
            </article>
          </a>{" "}
          <a
            href="https://api.whatsapp.com/send?phone=5553999888658"
            target="_blank"
          >
            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon" />
              <h4>WhatsApp</h4>
              <h5>+55 53 9 9988-8658</h5>
            </article>{" "}
          </a>
        </div>
        {/* END OF CONTACTS OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
