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
    <div className="container">
      <Navbar navItems={props.navItems} restaurantName={props.restaurantName} />

      <section className="header">
        <Header restaurantName={props.restaurantName} />
      </section>

      <About aboutText={props.aboutText} />
      <Menu menuItems={props.menuItems} />
      <Reservations />
      <Reviews reviews={props.reviews} />
      <Photos photos={props.photos} />
      <Footer contactInfo={props.contactInfo} />
    </div>
  );
};

export default Layout;
