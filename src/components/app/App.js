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
      img: "http://healthyrise.com/wp-content/uploads/2016/09/Shrimp-2.jpg",
      description: "Bob's classic shrimpy goodness.",
      price: 35
    },
    {
      name: "Vegetarian Shrimp",
      img: "http://vegetarian-plus.com/wp-content/uploads/2013/11/shrimp.jpg",
      description: "Bob's personal favorite...",
      price: 55
    },
    {
      name: "Jumbo Shrimpy Goodness",
      img: "http://farm4.staticflickr.com/3020/2544649829_122226ec5e_z.jpg",
      description: "Your favorite shrimp... JUMBO SIZE",
      price: 11
    },

    {
      name: "Bob's secret shrimp",
      img: "https://s-media-cache-ak0.pinimg.com/736x/8c/c9/63/8cc96362ca1fcf653b83b2d39f4c9f06--pie-crusts-fun-food.jpg",
      description: "Bob's 32,000-year old family secret...",
      price: 110
    },
    {
      name: "Burger-shaped shrimp",
      img: "https://cdn2.i-scmp.com/sites/default/files/styles/980x551/public/2013/07/31/turtle-burger-l.jpg",
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
