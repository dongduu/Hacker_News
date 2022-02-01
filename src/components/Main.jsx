// import React, { useState } from "react";
import TotalRanking from "./TotalRanking";
import HackerNews from "./HackerNews";

const mainStyle = {
  height: "708px",
  width: "375px"
};

const Main = () => {
  return (
    <div style={mainStyle}>
      <TotalRanking />
      <HackerNews />
    </div>
  );
};

export default Main;
