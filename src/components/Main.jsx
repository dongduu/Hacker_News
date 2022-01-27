// import React, { useState } from "react";
import Nav from "./Nav";
import TotalRanking from "./TotalRanking";
import HackerNews from "./HackerNews";

const mainStyle = {
  height: "708px",
  width: "375px",
  border: "solid red 2px"
};

const Main = () => {
  return (
    <div style={mainStyle}>
      <Nav />
      <TotalRanking />
      <HackerNews />
    </div>
  );
};

export default Main;
