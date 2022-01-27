// import React, { useState } from "react";

const navStyle = {
  position: "relative",
  height: "40px",
  width: "375px",
  border: "solid green 1px"
};
const newsStyle = {
  position: "absolute",
  color: "#999",
  top: "12px",
  left: "39px"
};
const showStyle = {
  position: "absolute",
  color: "#999",
  top: "12px",
  left: "124px"
};
const askStyle = {
  position: "absolute",
  color: "#999",
  top: "12px",
  right: "129px"
};
const jobsStyle = {
  position: "absolute",
  color: "#999",
  top: "12px",
  right: "42px"
};

const Nav = () => {
  return (
    <nav style={navStyle}>
      <a href="javascript:void(0)" style={newsStyle}>
        News
      </a>
      <a href="javascript:void(0)" style={showStyle}>
        Show
      </a>
      <a href="javascript:void(0)" style={askStyle}>
        Ask
      </a>
      <a href="javascript:void(0)" style={jobsStyle}>
        Jobs
      </a>
    </nav>
  );
};

export default Nav;
