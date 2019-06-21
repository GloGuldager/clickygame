import React from "react";
import "./style.css";

// function ImageCard(props) {
//   return (
//     <div className="card">
//       <div className="img-container">
//         <img alt={props.name} src={props.image} />
//       </div>
//       {/* <span onClick={() => props.handleIncrement(props.id)}>
//       </span> */}
//       <span onClick={props.handleIncrement}>
//       </span>

//     </div>
//   );
// }

const ImageCard = props => (
  <div className="card">
    <div className="img-container">
      <img className="img-thumbnail img-responsive" alt={props.name} src={props.image} onClick={() => props.clickImage(props.id)}/>
    </div>
  </div>
);



export default ImageCard;
