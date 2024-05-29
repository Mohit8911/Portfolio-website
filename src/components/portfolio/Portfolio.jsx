import React from 'react';
import IMG1 from '../../assets/4ward.png';
import IMG2 from '../../assets/todo.png';
import IMG3 from '../../assets/google.png';
import IMG4 from '../../assets/bikebuddy.png';
import IMG5 from '../../assets/news.png';
import IMG6 from '../../assets/math.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "4Ward- Social Mobile App",
      img: IMG1,
      description:
        "Created a social networking Hybrid app with 18 screens, ensuring responsiveness. Implemented intuitive tap gestures for effortless navigation in the reels section, enhancing user engagement. ",
      technologies: "React Native | Redux",
      link: "https://github.com/Mohit8911/4Ward_ReactNativeApp",
      github: "https://github.com/Mohit8911/4Ward_ReactNativeApp",
    },
    {
      id: 2,
      title: "BikeBuddy- Bike Rental Web Application",
      img: IMG4,
      description:
        "This app is based on Reactjs with the integration in firebase in the backend. Provides real-time updates on bike availability, ensuring users have the latest information on which bikes are currently ready for rental.",
      technologies: "Reactjs | Google Auth",
      link: "https://bikebuddy-001.web.app/",
      github: "https://github.com/Mohit8911/BikeBuddy",
    },
    {
      id: 3,
      title: "To-Do App",
      img: IMG2,
      description: "User friendly app to plan your day and manage tasks",
      technologies: "JavaScript | LocalStorage",
      link: "https://github.com/Mohit8911/Todo_List_React/",
      github: "https://github.com/Mohit8911/Todo_List_React",
    },
    {
      id: 4,
      title: "Google Clone",
      img: IMG3,
      description:
        "Similar to the Google search engine, this web application enables users to do online information searches. It uses the Google Custom Search API as its engine, enabling it to provide results that are 100% identical to those offered by Google.",
      technologies: "JavaScript | CSS",
      link: "https://loquacious-naiad-763b4b.netlify.app/",
      github: "https://github.com/Mohit8911/googleClone",
    },
    {
      id: 5,
      title: "World News",
      img: IMG5,
      description:
        "Fully responsive interactive website built based on Adobe XD design",
      technologies: "JavaScript | CSS",
      link: "https://github.com/Mohit8911",
      github: "https://github.com/Mohit8911",
    },
    {
      id: 6,
      title: "Math Resource",
      img: IMG6,
      description:
        "Real-world group project which is still in progress and will provide educational platform for future young developers",
      technologies: "JavaScript | Scss | Python",
      link: "https://github.com/Mohit8911",
      github: "https://github.com/Mohit8911",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
