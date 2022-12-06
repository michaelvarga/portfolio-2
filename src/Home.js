import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="fluid-container vh-100 App-header d-flex position-relative">
      <div className="circle"/>
      <div className="container">
          <h6>HELLO, I'M</h6>
          <h1 className="text-primary">Mike</h1>
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
