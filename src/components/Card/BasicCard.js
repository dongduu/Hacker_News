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

const BasicCardBox = styled.div`
  position: relative;
  width: 335px;
  margin-bottom: 12px;
  margin-left: 20px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
`;

const Title = styled.strong`
  /* position: absolute;
  top: 16px;
  left: 16px; */
  margin-left: 16px;
  width: 303px;
  font-family: Roboto;
  font-size: 18px;
  line-height: 24px;
  color: #111;
`;

export const BasicCard = (props) => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect((props) => {
    getTopStories().then((ids) => setStoryIds(ids));
  }, []);

  useEffect((props) => {
    getNewStories().then((ids) => setStoryIds(ids));
  }, []);

  useEffect((props) => {
    getShowStories().then((ids) => setStoryIds(ids));
  }, []);

  useEffect((props) => {
    getAskStories().then((ids) => setStoryIds(ids));
  }, []);

  useEffect((props) => {
    getJobStories().then((ids) => setStoryIds(ids));
  }, []);

  return storyIds.slice(0, 10).map((storyId, i) => (
    <BasicCardBox>
      <Title>
        <NewsTitle key={i} storyId={storyId} />
      </Title>
      <UserInfo />
    </BasicCardBox>
  ));
};
