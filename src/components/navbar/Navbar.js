import React from "react";
import "./Navbar.css";

const Navbar = props => {
  return (
    <nav className="main-nav navbar">
      <h4 className="res-name">
        {props.restaurantName}
      </h4>
      <ul>
        {props.navItems.map(item =>
          <li key={item}>
            <a>
              {item}
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
