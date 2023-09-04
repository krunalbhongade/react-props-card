import React from "react";

function Card(props) {
  console.log(props);
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.src} alt={props.alt} height="100" width="100" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default Card;
