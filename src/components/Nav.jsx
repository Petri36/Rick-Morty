import React from "react";
import SearchBar from "./SearchBar/SearchBar.jsx";
//import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
