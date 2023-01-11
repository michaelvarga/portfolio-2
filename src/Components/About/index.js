import React from "react";
import './index.scss'

const About = () => {
  return (
    <div className="fluid-container min-vh-100 d-flex row about p-5">
      <div className="col-md-6 d-flex flex-column justify-content-start about-bg-left p-5 my-5">
        <h2>About Me</h2>
        <h3>I'm a <strong>Full Stack Developer</strong> based in Chicago</h3>
        <p>
          Hello! My name is Mike and I enjoy building things for the web. My interest in programming started back in 2009 when I learned to hack my favorite computer game, Microsoft Flight Simulator, and fly customized airplanes.
        </p>
        <p>
          Fast-forward to today, and I've had the privilege of developing software at <a href="https://www.accenture.com/" target="_blank" rel="noreferrer">a large consulting firm</a> that has had a massive operational impact on a federal client. I recently left that firm to join a <a href="https://www.fullstackacademy.com/" target="_blank" rel="noreferrer">web development bootcamp</a> to learn a new tech stack and change industries.
        </p>
      </div>
      <div className="col-md-6 d-flex flex-column justify-content-lg-end about-bg-right p-5">
        <p>Here are a few technologies I've been working with recently:</p>
        <div>
          
          <ul className="list-inline">
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Python</li>
            <li>React Native</li>
            <li>Node.js</li>
            <li>TypeScript</li>
            <li>PostgreSQL</li>
            <li>Tailwind CSS</li>
            <li>Sass</li>
            <li>Bootstrap</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
