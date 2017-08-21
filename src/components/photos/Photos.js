import React from "react";
import "./Photos.css";

const Photos = props =>
  <div className="row photos">
    {props.photos.map(p =>
      <div key={p} className="col-xs-4">
      	<div className="row">
      		<img src={p} className="center-block" />
      	</div>
      </div>
    )}
  </div>

export default Photos;

