// import React, { useState } from "react";
import TotalRanking from "./TotalRanking";
import HackerNews from "./HackerNews";
import Stories from "./stories/stories";

const mainStyle = {
  height: "708px",
  width: "375px"
};

const HomeMain = () => {
  return (
    <div style={mainStyle}>
      {/* <Stories /> */}
      <TotalRanking />
      <HackerNews />
    </div>
  );
};

export default HomeMain;
