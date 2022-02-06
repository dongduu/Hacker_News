import React, { useEffect, useState } from "react";
import { NewsTitle } from "./Card/Story";
import { getStories } from "../services/api";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Top = styled(Swiper)`
  position: relative;
  display: inline-block;
  margin: 54px 0px 73px 88px;
  width: 200px;
  height: 300px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: linear-gradient(158.71deg, #e8ebf2 2.84%, #f2f3f7 97.53%);
  border-radius: 24px;
  box-shadow: 10px 10px 30px rgba(15, 41, 107, 0.12);
`;

const Rank = styled.strong`
  position: absolute;
  top: 64px;
  left: 20px;
  font-family: Roboto;
  font-style: italic;
  font-size: 28px;
  line-height: 28px;
  color: #ff6600;
`;

// const SlideBox = styled(SwiperSlide)`
//   position: absolute;
//   top: 104px;
//   left: 20px;
//   width: 160px;
//   height: 96px;
// `;

const Article = styled.h2`
  position: absolute;
  width: 160px;
  height: 96px;
  top: 104px;
  left: 20px;
  font-family: Roboto;
  font-size: 18px;
  line-height: 24px;
  color: #767676;
`;

const Writer = styled.p`
  position: absolute;
  width: 160px;
  height: 16px;
  top: 268px;
  left: 20px;
  font-family: Roboto;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #999;
`;

const SlideBox = styled(Swiper)`
  display: block;
  border: black 1px solid;
`;
const Slider = styled(SwiperSlide)`
  display: inline-block;
`;

export const Ranking = () => {
  return (
    <SlideBox slidesPerView={1} pagination={{ clickable: true }}>
      <SwiperSlide>
        <Top>
          <Rank>01</Rank>
          <Article>Hi</Article>
          <Writer>bryanrasmussen</Writer>
        </Top>
      </SwiperSlide>
      <SwiperSlide>
        <Top>
          <Rank>02</Rank>
          <Article>Hi</Article>
          <Writer>bryanrasmussen</Writer>
        </Top>
      </SwiperSlide>
      <SwiperSlide>
        <Top>
          <Rank>03</Rank>
          <Article>Hi</Article>
          <Writer>bryanrasmussen</Writer>
        </Top>
      </SwiperSlide>
    </SlideBox>
  );
};

// export const Ranking = () => {
//   const [storyIds, setStoryIds] = useState([]);

//   useEffect(() => {
//     getStories().then((ids) => setStoryIds(ids));
//   }, []);

//   return storyIds.slice(0, 5).map((storyId, i) => (
//     <Top>
//       <Rank>01</Rank>
//       <Article>
//         <NewsTitle key={i} storyId={storyId} />
//       </Article>
//       <Writer>bryanrasmussen</Writer>
//     </Top>
//   ));
// };
