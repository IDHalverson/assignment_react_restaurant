import React from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import Menu from "../menu/Menu";
import Photos from "../photos/Photos";
import Reservations from "../reservations/Reservations";
import Reviews from "../reviews/Reviews";
import About from "../about/About";
import Footer from "../footer/Footer";
import "./Layout.css";


const Layout = props => {
  return (
    <div>
    	<Navbar navItems={props.navItems} restaurantName={props.restaurantName} />
    	<Header />
    	<About aboutText={props.aboutText} />
    	<Menu />
    	<Reservations />
    	<Reviews />
    	<Photos />
    	<Footer />
    </div>
  );
};

export default Layout;
