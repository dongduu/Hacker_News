// import React, { useState } from "react";
import Ranking from "./Ranking";

const rankingBoxStyle = {
  height: "583px",
  width: "375px",
  border: "1px green solid"
};
const titleStyle = {
  marginTop: "32px",
  marginLeft: "20px",
  fontSize: "18px"
};

const TotalRanking = () => {
  return (
    <div style={rankingBoxStyle}>
      <div style={titleStyle}>Current Total Top 5</div>
      <Ranking />
    </div>
  );
};

export default TotalRanking;
