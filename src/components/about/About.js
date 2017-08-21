import React from "react";
import "./About.css";

const About = props =>
  <div className="well">
    <p>
      {props.aboutText}
    </p>
  </div>;

export default About;
