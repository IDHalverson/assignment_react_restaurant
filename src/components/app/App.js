import React, { Component } from "react";
import logo from "../../logo.svg";
import "./App.css";
import Layout from "../layout/Layout";

const props = {
  restaurantName: "Bob's Burgers and Shrimp",
  navItems: ["About", "Reservations", "Menu", "Reviews", "Photos", "Contact"],
  aboutText:
    "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.",
  menuItems: [
    {
      name: "Shrimp",
      description: "Bob's classic shrimpy goodness.",
      price: 35
    },
    {
      name: "Vegitarian Shrimp",
      description: "Bob's personal favorite...",
      price: 55
    },
    {
      name: "Jumbo Shrimpy Goodness",
      description: "Your favorite shrimp... JUMBO SIZE",
      price: 11
    },
    {
      name: "Bob's secret shrimp",
      description: "Bob's 32,000-year old family secret...",
      price: 110
    },
    {
      name: "Burger-shaped shrimp",
      description: "Pretty self-explanatory tbh",
      price: 300
    }
  ],
  photos: [
    "http://www.tellusaboutus.com/comments/images/BK-WebComment/BB_WHOPPER-v1.png",
    "http://images.iop.org/objects/phw/news/16/6/5/shrimp.jpg",
    "http://static4.businessinsider.com/image/59400ee84cb1e4543755dc60-1190-625/heres-the-secret-to-making-juicy-grilled-shrimp-that-tastes-delicious-every-time.jpg"
  ],
  reviews: [
    {
      author: "Bob's biggest fan",
      text: "Bob's burgers are the best. I've had every one on the menu!"
    },
    {
      author: "Bob's girlfriend",
      text: "These burgers are DELISH!!!"
    },
    {
      author: "Bob's wife",
      text:
        "My husbands burgers are rootin' tootin' best doggang burgers around!"
    }
  ],
  contactInfo: {
    name: "Bob's Burgers and Shrimp",
    phone: "1-800-BURGERS-ONLY",
    email: "burger-central@burgers.gov",
    address: "312 Burger Lane, Burger MA 44311"
  }
};

class App extends Component {
  render() {
    return <Layout {...props} />;
  }
}

export default App;
