import React from "react";
import "./Footer.css";

const Footer = props =>
  <footer class="panel" id="Footer">
    <h6>
      {props.contactInfo.name}
    </h6>
    <h6>
      {props.contactInfo.phone}
    </h6>
    <h6>
      {props.contactInfo.email}
    </h6>
    <h6>
      {props.contactInfo.address}
    </h6>
  </footer>;

export default Footer;
