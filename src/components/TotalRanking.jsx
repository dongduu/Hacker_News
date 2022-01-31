// import React, { useState } from "react";
import Ranking from "./Ranking";
import styled from "styled-components";

const RankingBox = styled.div`
  height: 583px;
  width: 375px;
`;

const RankingTitle = styled.div`
  margin: 36px 20px 24px;
  font-size: 32px;
  line-height: 40px;
  font-family: Times New Roman;
`;

const RankingBackground = styled.div`
  width: 375px;
  height: 427px;
  background-color: #f2f3f7;
`;

const TotalRanking = () => {
  return (
    <RankingBox>
      <RankingTitle>Current Total Top 5</RankingTitle>
      <RankingBackground>
        <Ranking />
      </RankingBackground>
    </RankingBox>
  );
};

export default TotalRanking;
