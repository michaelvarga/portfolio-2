import React from "react";
import "./index.scss";

const Experience = () => {
  return (
    <div className="fluid-container min-vh-100 experience p-5">
      <div className="row">
        <div className="col-md-4">
          <h3>Over the past six years,</h3>
          <p>
            I've build products for companies and governments around the US,
            ranging from reporting tools to complex features for enterprise apps
            with a focus on exceptional user experiences.
            <br/><br/>
            I got my bachelors degree in Statistics from the <span>University of Illinois at Urbana-Champaign</span> in 2017, and joined the <span>Cook County State's Attorney's Office</span> in Chicago as their first ever data analyst. Faced with overwhelming amounts of violence in the city of Chicago and calls for reform, I was brought in to find creative ways to leverage data and technology to drive prosecutorial change. I used Tableau, ArcGIS, R, and SAS to create reporting tools and social network maps of violent offenders, which were used to prosecute several high-priority offenders.
            <br/><br/>
            Then I worked as a Technology Consultant for <span>Accenture</span>, where I was a developer on a project with the Department of Defense. My team built an app that modernized the way the federal government issues security clearances to personnel across the entire federal government, eliminating bottlenecks in the existing process and enabling millions of employees and contractors to get their security clearance significantly quicker.
            <br/><br/>
            After discovering my passion for software development at Accenture, I left the company to join a full time, immersive web development bootcamp at Fullstack Academy with the intention of transitioning careers from consulting to software engineering.
          </p>
        </div>
        <div className="col-md-8"></div>
      </div>
    </div>
  );
};

export default Experience;
