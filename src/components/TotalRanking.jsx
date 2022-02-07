// import React, { useState } from "react";
import { Ranking } from "./Ranking";
import styled from "styled-components";
import "swiper/swiper.scss";

const RankingBox = styled.div`
  width: 375px;
`;

const SlideBox = styled.div`
  width: 1500px;
  height: 500px;
`;

const RankingTitle = styled.div`
  width: 150px;
  margin: 36px 20px 24px;
  font-size: 32px;
  line-height: 40px;
  font-family: Times New Roman;
`;

const RankingBackground = styled.div`
  position: relative;
  width: 375px;
  height: 427px;
  background-color: #f2f3f7;
`;

export const TotalRanking = () => {
  return (
    <RankingBox>
      <RankingTitle>Current Total Top 5</RankingTitle>
      <RankingBackground>
        <SlideBox>
          <Ranking />
        </SlideBox>
      </RankingBackground>
    </RankingBox>
  );
};
