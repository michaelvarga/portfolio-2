import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Typed from 'react-typed';

const Home = () => {
  return (
    <div className="fluid-container vh-100 App-header d-flex position-relative">
      <div className="circle"/>
      <div className="intro">
          <h6 className="display-6"><span role="img">{String.fromCodePoint(0x1f44b)}</span> Hi, my name is</h6>
          <h1 className="text-primary display-1">Mike Varga</h1>
          <div className="animated-typing display-6">
            <Typed
              strings = {["Full Stack Software Developer", "Mobile Developer", "Web Developer"]}
              typeSpeed={75}
              backSpeed={50}
              loop
            />
          </div>
          <p>
            <a className="btn btn-primary btn-lg" href="#" role="button">
              Learn more
            </a>
          </p>
        </div>
    </div>
  );
};

export default Home;
