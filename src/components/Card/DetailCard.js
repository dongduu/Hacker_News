import React, { useEffect, useState } from "react";
import { NewsTitle } from "./Story";
import {
  getTopStories,
  getNewStories,
  getShowStories,
  getAskStories,
  getJobStories
} from "../../services/api";
import styled from "styled-components";
import { UserInfo } from "../UserInfo";

const DetailCardBox = styled.div`
  position: relative;
  width: 335px;
  height: 135px;
  margin-bottom: 12px;
  margin-left: 20px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
`;

const NewsHeader = styled.div`
  position: relative;
  width: 335px;
  height: 46px;
`;

const NewsNumber = styled.p`
  position: absolute;
  top: 16px;
  left: 16px;
  font-family: Roboto;
  font-size: 20px;
  line-height: 22px;
  color: #ff6600;
`;

const NewsTime = styled.p`
  position: absolute;
  top: 22px;
  left: 54px;
  font-family: Roboto;
  font-size: 12px;
  line-height: 16px;
  color: rgba(255, 102, 0, 0.5);
`;
const Title = styled.strong`
  display: inline-block;
  width: 303px;
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin-left: 16px;
  color: #111;
`;

export const DetailCard = props => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getTopStories().then((ids) => setStoryIds(ids));
  }, []);

  useEffect(() => {
    getNewStories().then((ids) => setStoryIds(ids));
  }, []);

  useEffect(() => {
    getShowStories().then((ids) => setStoryIds(ids));
  }, []);

  useEffect(() => {
    getAskStories().then((ids) => setStoryIds(ids));
  }, []);

  useEffect(() => {
    getJobStories().then((ids) => setStoryIds(ids));
  }, []);

  return storyIds.slice(0, 10).map((storyId, i) => (
    <DetailCardBox>
      <NewsHeader>
        <NewsNumber>00{`${i + 1}`}</NewsNumber>
        <NewsTime>2 hours ago</NewsTime>
      </NewsHeader>
      <Title>
        <NewsTitle key={i} storyId={storyId} />
      </Title>
      <UserInfo />
    </DetailCardBox>
  ));
};
