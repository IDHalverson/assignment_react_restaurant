import React, { Component } from "react";
import logo from "../../logo.svg";
import "./App.css";
import Layout from "../layout/Layout";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurantName: "Bob's Burgers and Shrimp",
      navItems: ["About", "Reservations", "Menu", "Reviews", "Photos"]
    };
  }

  render() {
    return (
      <Layout 
        restaurantName={this.state.restaurantName}
        navItems={this.state.navItems}
      />
    );
  }
}

export default App;

