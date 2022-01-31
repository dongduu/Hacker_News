// import React, { useState } from "react";

const hackerNewsStyle = {
  height: "418px",
  width: "375px"
};
const titleStyle = {
  marginTop: "32px",
  marginLeft: "20px",
  fontSize: "18px"
};

const HackerNews = () => {
  return (
    <div style={hackerNewsStyle}>
      <div style={titleStyle}>Enjoy Hacker News!</div>
      {/* <News /> */}
    </div>
  );
};

export default HackerNews;
