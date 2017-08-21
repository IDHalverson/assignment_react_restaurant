import React from "react";
import "./Header.css";

const Layout = props =>
  <header className="jumbotron center-block">
    <div className="image-div">
      <div>
        <img
          className="header-img"
          src="https://images7.alphacoders.com/396/thumb-1920-396582.jpg"
        />
        <h1>
          {props.restaurantName}
        </h1>
      </div>
    </div>
  </header>;

export default Layout;
