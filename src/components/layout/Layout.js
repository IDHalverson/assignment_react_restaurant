import React from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";

const Layout = props => {
  const { restaurantName, headerPicture, navItems } = props.props;
  console.log(props.props);
  console.log(navItems);
  return (
    <div>
      <Header restaurantName={restaurantName} headerPicture={headerPicture} />
      <Navbar navItems={navItems} />
    </div>
  );
};

export default Layout;
