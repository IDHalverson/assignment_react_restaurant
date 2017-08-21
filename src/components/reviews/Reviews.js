import React from "react";
import "./Reviews.css";

const Reviews = props =>
  <div className="reviews-div">
    <h3>Reviews</h3>
    {props.reviews.map(r =>
      <div className="well review" key={r.text}>
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
