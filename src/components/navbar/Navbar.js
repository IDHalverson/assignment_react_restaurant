import React from "react";
import "./Navbar.css";

const Navbar = props => {
  return (
  	<nav className="navbar navbar-default navbar-fixed-top">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>                        
		      </button>
		      <a className="navbar-brand" href="#myPage">{props.restaurantName}</a>
		    </div>
		    <div className="collapse navbar-collapse" id="myNavbar">
		      <ul className="nav navbar-nav navbar-right">
		        {props.navItems.map(item =>
		          <li key={item}>
		            <a id={item} href={`#${item}`}>
		              {item}
		            </a>
		          </li>
	        	)}
		      </ul>
		    </div>
		  </div>
		</nav>
    
  );
};

export default Navbar;



