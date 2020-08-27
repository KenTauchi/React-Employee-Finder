import React from "react";
import classes from "./CardList.module.css";
import Card from "../Card/Card";

const cardList = (props) => (
  <div className={classes.CardList}>
    {props.employees.map((emp) => {
      return <Card key={emp.id} employee={emp} />;
    })}
  </div>
);

export default cardList;
