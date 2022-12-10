import React from "react";

const About = () => {
  return (
    <div className="fluid-container vh-100 d-flex position-relative">
      <div>
        <h2 className="text-primary">About Me</h2>
        <h3>I'm a <strong>Full Stack Developer</strong> based in Chicago</h3>
        <p>
          Hello! My name is Mike and I enjoy building things for the web. My interest in programming started back in 2009 when I learned to hack my favorite computer game, Microsoft Flight Simulator, and fly customized airplanes.
        </p>
        <p>
          Fast-forward to today, and I've had the privilege of developing software at <a href="https://www.accenture.com/" target="_blank" rel="noreferrer">a huge consulting firm</a> that has had a massive impact on a federal client. I recently left that firm to join a <a href="https://www.fullstackacademy.com/" target="_blank" rel="noreferrer">web development bootcamp</a> to learn a new tech stack and change industries.
        </p>
        <p>Here are a few technologies I've been working with recently:</p>
        <div>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>React Native</li>
            <li>Node.js</li>
            <li>Tensorflow.js</li>
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
