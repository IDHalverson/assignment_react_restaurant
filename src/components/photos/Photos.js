import React from "react";
import "./Photos.css";

const Photos = props =>
  <div>
    {props.photos.map(p =>
      <div key={p}>
        <img src={p} />
      </div>
    )}
  </div>;

export default Photos;
