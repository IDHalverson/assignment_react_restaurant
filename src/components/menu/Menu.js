import React from "react";
import "./Menu.css";

const Menu = props =>
  <div className="row">
    <h3 className="menu-div col-xs-8 col-xs-offset-2">MENU</h3>
    {props.menuItems.map(i =>
      <div className="col-xs-4 items" key={i.name}>
        <h4>
          {i.name}
        </h4>
        <img src={i.img} /> 
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
