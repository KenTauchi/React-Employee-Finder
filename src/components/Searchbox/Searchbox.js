import React from "react";
import "./Searchbox.style.css";

const SearchBox = (props) => (
  <input
    className="search"
    type="search"
    placeholder="search employees"
    onChange={props.search}
  />
);

export default SearchBox;
