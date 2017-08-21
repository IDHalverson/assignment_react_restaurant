import React, { Component } from "react";
import logo from "../../logo.svg";
import "./App.css";
import Header from '../header/Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurantName: "Bob\'s Burgers and Shrimp",
      headerPicture: "http://farm4.staticflickr.com/3020/2544649829_122226ec5e_z.jpg"
    }
  }
  render() {
    const { restaurantName, headerPicture } = this.state;

    return (
      <Header 
        restaurantName={restaurantName}
        headerPicture={headerPicture}
       />
    );
  }
}

export default App;

