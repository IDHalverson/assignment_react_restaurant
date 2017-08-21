import React from "react";
import "./Menu.css";

const Menu = props =>
  <div>
    {props.menuItems.map(i =>
      <div key={i.name}>
        <h4>
          {i.name}
        </h4>
        <h6>
          {i.description}
        </h6>
        <h6>
          ${i.price}
        </h6>
      </div>
    )}
  </div>;

export default Menu;
