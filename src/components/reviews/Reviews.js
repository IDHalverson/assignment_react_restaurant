import React from "react";
import "./Reviews.css";

const Reviews = props =>
  <div>
    {props.reviews.map(r =>
      <div key={r.text}>
        <h4>
          {r.text}
        </h4>
        <h6>
          Posted by: {r.author}
        </h6>
      </div>
    )}
  </div>;

export default Reviews;
