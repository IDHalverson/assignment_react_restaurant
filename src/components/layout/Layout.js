import React from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import "./Layout.css";


const Layout = props => {
  return (
    <div>
    	<Navbar navItems={props.navItems} restaurantName={props.restaurantName} />
    	<Header />
    </div>
  );
};

export default Layout;
