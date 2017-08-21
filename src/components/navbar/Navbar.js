import React from "react";
import "./Navbar.css";

const Navbar = props => {
  return (
    <nav className="main-nav">
    	<h4 className="res-name">{props.restaurantName}</h4>
      <ul>
        {props.navItems.map(item => <li key={item}>{item}</li>)}
      </ul>
    </nav>
  );
};

export default Navbar;
