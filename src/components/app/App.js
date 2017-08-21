import React, { Component } from "react";
import logo from "../../logo.svg";
import "./App.css";
import Layout from "../layout/Layout";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurantName: "Bob's Burgers and Shrimp",
      headerPicture:
        "http://farm4.staticflickr.com/3020/2544649829_122226ec5e_z.jpg",
      navItems: ["About", "Reservations", "Menu", "Reviews", "Photos"]
    };
  }
  render() {
    return <Layout props={this.state} />;
  }
}

export default App;
