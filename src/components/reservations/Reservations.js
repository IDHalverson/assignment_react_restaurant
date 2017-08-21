import React from "react";
import "./Reservations.css";

const Reservations = props =>
  <div>
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" placeholder="Name" />
      <label htmlFor="party-size">Party Size</label>
      <input type="text" placeholder="Party Size" />
      <label htmlFor="date">Date of Reservation</label>
      <input type="date" placeholder="Date" />
      <label htmlFor="time">Time of Reservation</label>
      <input type="time" placeholder="Time" />
    </form>
  </div>;

export default Reservations;
