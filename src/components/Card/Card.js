import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.CardContainer}>
      <img
        alt="employee"
        src={`https://robohash.org/${props.employee.id}?set=set1&size=180x180`}
      />
      <h2>{props.employee.name}</h2>
      <p>{props.employee.email}</p>
    </div>
  );
};

export default Card;
