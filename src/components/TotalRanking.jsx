// import React, { useState } from "react";

const rankingBoxStyle = {
  height: "250px",
  width: "375px",
  border: "solid green 1px"
};
const titleStyle = {
  marginTop: "32px",
  marginLeft: "20px",
  fontSize: "18px"
};

const TotalRanking = () => {
  return (
    <div style={rankingBoxStyle}>
      <div style={titleStyle}>Total Ranking 5 Now</div>
      {/* <Ranking /> */}
    </div>
  );
};

export default TotalRanking;
