import React, { Component } from "react";
import logo from "../../logo.svg";
import "./App.css";
import Layout from "../layout/Layout";

const props = {
  restaurantName: "Bob's Burgers and Shrimp",
  navItems: ["About", "Reservations", "Menu", "Reviews", "Photos"],
  aboutText: "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.",
  menuItems: [
    {
      name: 
      description:
      price:
    },
    {
      name:
      description:
      price:
    },
    {
      name:
      description:
      price:
    },
    {
      name:
      description:
      price:
    },
    {
      name:
      description:
      price:
    }
  ]
}

class App extends Component {
  render() {
    return (
      <Layout {...props} />
    );
  }
}

export default App;

