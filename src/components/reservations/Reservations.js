import React from "react";
import "./Reservations.css";

const Reservations = props =>
  <div className=" reservations-div row">
    <h3>Reservations</h3>
    <form className="form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input className="form-control" type="text" placeholder="Name" />
      </div>
      <div className="form-group">
        <label htmlFor="party-size">Party Size</label>
        <input className="form-control" type="text" placeholder="Party Size" />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date of Reservation</label>
        <input className="form-control" type="date" placeholder="Date" />
      </div>
      <div className="form-group">
        <label htmlFor="time">Time of Reservation</label>
        <input className="form-control" type="time" placeholder="Time" />
      </div>
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  </div>;

export default Reservations;
