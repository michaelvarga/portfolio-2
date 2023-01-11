import React from "react";
import "./index.scss";
import { GitHub, Launch, YouTube } from "@mui/icons-material";

const liStyle = "list-inline-item me-3";
const projectStyle = "col-md-8 p-5 mb-5 project-container";

const Projects = () => {
  return (
    <div className="fluid-container min-vh-100 p-5 projects">
      <div className="d-flex flex-column align-items-center">
        <h2 className="mb-5">Some Things I've Built</h2>
        <div className={projectStyle}>
          <h3>Happilist</h3>
          <p>
            A full-stack social media app that encourages you to be productive
            and democratize your todo lists amongst your friends. This mobile
            app has some similar features of traditional social media apps,
            including authentication, sending and approving friend requests,
            uploading stories, viewing and interacting with a user feed, and
            more. It uses a Tensorflow.js machine learning library for content moderation and Google Cloud for content and media storage.
          </p>
          <ul className="list-inline mt-2">
            <li className={liStyle}>React Native</li>
            <li className={liStyle}>Expo</li>
            <li className={liStyle}>React Hooks</li>
            <li className={liStyle}>NoSQL</li>
            <li className={liStyle}>Google Firebase</li>
            <li className={liStyle}>Tensorflow.js</li>
            <li className={liStyle}>Styled Components</li>
          </ul>

          <a
            href="https://github.com/2204-cookiemonsters-capstone/amazing-app"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GitHub />
          </a>
          <a
            href="https://www.youtube.com/watch?v=qvU4MeqDAZk&ab_channel=MikeVarga"
            target="_blank"
            rel="noreferrer"
          >
            <YouTube />
          </a>
        </div>
        <div className={projectStyle}>
          <h3>Grace's Greens</h3>
          <p>
            A full-stack e-commerce site for selling plants. Features account
            authentication and guest/user cart and checkout.
          </p>
          <ul className="list-inline mt-2">
            <li className={liStyle}>React</li>
            <li className={liStyle}>Node</li>
            <li className={liStyle}>Redux</li>
            <li className={liStyle}>Express</li>
            <li className={liStyle}>PostgreSQL</li>
            <li className={liStyle}>Sequelize</li>
            <li className={liStyle}>Bcrypt</li>
            <li className={liStyle}>JSON Web Tokens</li>
          </ul>
          <a
            href="https://github.com/FullStack-Sisko/GraceShopper"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GitHub />
          </a>
        </div>
        <div className={projectStyle}>
          <h3>National Background Investigation Services (NBIS)</h3>
          <p>
            An enterprise application that I helped develop while working at Accenture for the DoD that modernizes the way they
            issue over one million security clearances annually.
          </p>
          <ul className="list-inline mt-2">
            <li className={liStyle}>Pegasystems</li>
            <li className={liStyle}>Javascript</li>
            <li className={liStyle}>HTML</li>
            <li className={liStyle}>CSS</li>
          </ul>
          <a
            href="https://www.dcsa.mil/is/nbis/"
            target="_blank"
            rel="noreferrer"
            aria-label="NBIS"
          >
            <Launch />
          </a>
        </div>
        <div className={projectStyle}>
          <h3>Handpose</h3>
          <p>
            Uses a Tensorflow maching learning library to detect points on a
            users hand through their webcam, and detects hand gestures that
            correspond to popular emojis. This is being refactored to detect the
            American Sign Language alphabet to spell out words using just a
            user's webcam.
          </p>
          <ul className="list-inline mt-2">
            <li className={liStyle}>React</li>
            <li className={liStyle}>Node</li>
            <li className={liStyle}>React Hooks</li>
            <li className={liStyle}>Tensorflow.js</li>
          </ul>
          <a
            href="https://github.com/michaelvarga/Handpose"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GitHub />
          </a>
        </div>
        <div className={projectStyle}>
          <h3>Portfolio Site</h3>
          <div className="tools-used">
            <ul className="list-inline mt-2">
              <li className={liStyle}>React</li>
              <li className={liStyle}>Bootstrap</li>
              <li className={liStyle}>Sass</li>
              <li className={liStyle}>Material UI</li>
              <li className={liStyle}>Firebase</li>
            </ul>
            <a
              href="https://github.com/michaelvarga/portfolio-2"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GitHub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
