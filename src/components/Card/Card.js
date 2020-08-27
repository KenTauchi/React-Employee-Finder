import React from "react";
import "./Card.style.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <img
        alt="employee"
        src={`https://robohash.org/${props.employee.id}?set=set1&size=180x180`}
      />
      <h1>{props.employee.name}</h1>
      <p>{props.employee.email}</p>
    </div>
  );
};

export default Card;
