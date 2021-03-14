import React from "react";
import "./styles.css";

const SideBar = (props) => {
  return <div className="sidebar card">{props.children}</div>;
};

export default SideBar;
