import React, { useState, useEffect } from "react";
import { Ranking } from "./Ranking";
import styled from "styled-components";
import "swiper/swiper.scss";
import { getTopIds } from "../services/api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss/pagination";
import SwiperCore, { Pagination } from "swiper";

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

SwiperCore.use([Pagination]);

export const TotalRanking = () => {
  const [topIds, setTopIds] = useState([]);
  useEffect(() => {
    getTopIds().then((data) => setTopIds(data));
  }, []);
  return (
    <RankingBox>
      <RankingTitle>Current Total Top 5</RankingTitle>
      <RankingBackground>
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          pagination={{
            clickable: true
          }}
        >
          <SlideBox>
            {topIds.slice(0, 5).map((id, index) => (
              <SwiperSlide>
                <Ranking id={id} key={id} index={index} />
              </SwiperSlide>
            ))}
          </SlideBox>
        </Swiper>
      </RankingBackground>
    </RankingBox>
  );
};
