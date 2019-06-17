import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      {/* <span onClick={() => props.handleIncrement(props.id)}>
      </span> */}
      <span onClick={props.handleIncrement}>
      </span>

    </div>
  );
}



export default ImageCard;
