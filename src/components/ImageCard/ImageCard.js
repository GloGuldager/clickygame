import React from "react";
import "./style.css";


const ImageCard = props => (
  <div className="card">
    <div className="img-container">
      <img className="img-thumbnail img-responsive" alt={props.name} src={props.image} onClick={() => props.clickImage(props.id)}/>
    </div>
  </div>
);



export default ImageCard;
