import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles.css";
import "swiper/scss/pagination";
import SwiperCore, { Pagination } from "swiper";
import { getData } from "../services/api";

const Top = styled.div`
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

const Article = styled.a`
  position: absolute;
  width: 160px;
  height: 96px;
  top: 104px;
  left: 20px;
  font-family: Roboto;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #767676;
`;

const Writer = styled.a`
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

const SwiperBox = styled(Swiper)``;

// SwiperCore.use([Pagination]);

export const Ranking = ({ id }) => {
  const [listId, setListId] = useState({});
  const [idUrl, setIdUrl] = useState("");

  useEffect(() => {
    getData(id).then((data) => data && setListId(data));
    setIdUrl(`https://hacker-news.firebaseio.com/v0/item/:{id}.json`);
  }, []);

  return (
    <SwiperBox
      slidesPerView={1}
      centeredSlides={true}
      pagination={{
        clickable: true
      }}
    >
      <SwiperSlide>
        <Top>
          <Rank>0</Rank>
          <Article href={idUrl}>{listId.title}</Article>
          <Writer href={idUrl}>{listId.by}</Writer>
        </Top>
      </SwiperSlide>
    </SwiperBox>
  );
};
