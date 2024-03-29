import React from "react";
import { useInView } from "react-intersection-observer";
import "./index.scss";
import programming from '../../assets/programming.svg';

const Experience = () => {
  const { ref, inView } = useInView();

  return (
    <div className="fluid-container min-vh-100 experience p-5">
      <div className="row">
        <div className={`col-md-6 p-5 ${inView && "slide-in"}`} ref={ref}>
          <h3 className="mb-5"><span>Over the past six years</span>,</h3>
          <p>
            I've built products for companies and governments around the US,
            ranging from reporting tools to complex features for enterprise apps,
            focusing on exceptional user experiences.
            <br/><br/>
            I got my bachelor's degree in Statistics from the <span>University of Illinois at Urbana-Champaign</span> in 2017. I joined the <span>Cook County State's Attorney's Office</span> in Chicago as their first ever data analyst. Faced with overwhelming amounts of violence in Chicago and calls for reform, they brought me in to find creative ways to leverage data and technology to drive prosecutorial change. I used Tableau, ArcGIS, R, and SAS to create reporting tools and social network maps of violent offenders, which were used to prosecute several high-priority offenders.
            <br/><br/>
            Then I worked as a Technology Consultant for <span>Accenture</span>, where I was a developer on a project with the Department of Defense. My team built an app that modernized how the federal government issues security clearances to personnel across the entire federal government, eliminating bottlenecks in the existing process and enabling millions of employees and contractors to get their security clearance significantly quicker.
            <br/><br/>
            After discovering my passion for software development at Accenture, I left the company to join a full-time, immersive web development bootcamp at Fullstack Academy with the intention of transitioning careers from consulting to software engineering.
          </p>
        </div>
        <div className="col-md-6 p-5 d-flex justify-content-center align-items-center">
          <img src={programming} alt="programmer"/>
        </div>
        <div className="col-md-8"></div>
      </div>
    </div>
  );
};

export default Experience;
