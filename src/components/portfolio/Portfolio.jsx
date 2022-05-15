import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const itemsPortfolio = [
  {
    id: 1,
    image: IMG1,
    title: "Infográfico para Lincon Company.",
    data: " Maio, 2022",
    github: "https://www.behance.net/gallery/143760049/Infografico-CRM",
    demo: "",
  },
  {
    id: 2,
    image: IMG2,
    title: "Crypto Currency Dashboard & Financial Visualization",
    data: "Outubro, 2021",
    github: "https://github.com/flamenow",
    demo: "https://figma.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/flamenow",
    demo: "",
  },
  {
    id: 4,
    image: IMG4,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/flamenow",
    demo: "https://figma.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/flamenow",
    demo: "https://figma.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/flamenow",
    demo: "https://figma.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {itemsPortfolio.map(
          ({
            id,
            image,
            title,
            data = "Maio, 2022.",
            github,
            demo,
            hasDemo,
          }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="{title}" />
                  <h3>{title}</h3>
                  <h5 className="portfolio__item-data">{data}</h5>
                  <div className="portfolio__item-cta">
                    <a href={github} className="btn" target="_blank">
                      More details
                    </a>
                    {demo ? (
                      <a
                        href={demo}
                        className="btn btn-primary"
                        target="_blank"
                      >
                        Live Demo
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
