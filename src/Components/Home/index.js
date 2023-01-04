import React from "react";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Typed from "react-typed";

const Home = () => {
  return (
    <div className="fluid-container min-vh-100">
      <div className="row vh-100">
        <div className="col-md-8 d-flex bg-left align-items-center">
          <div className="offset-sm-1">
            <h6>
              <span role="img">{String.fromCodePoint(0x1f44b)}</span> Hi, my
              name is
            </h6>
            <h1><span>Mike Varga</span>.</h1>
            <div className="animated-typing">
              <Typed
                strings={[
                  "Full Stack Software Developer",
                  "Mobile Developer",
                  "Web Developer",
                ]}
                typeSpeed={75}
                backSpeed={50}
                loop
              />
            </div>
            <div>
              <p>
                I’m a software engineer specializing in building (and
                occasionally designing) exceptional digital experiences.
                Currently, I’m focused on learning and transitioning careers
                from tech consulting to software engineering.
              </p>
            </div>
            <p>
              <a className="btn btn-primary btn-lg" href="#" role="button">
                Check out my resume!
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-4 bg-right"></div>
      </div>
    </div>
  );
};

export default Home;
