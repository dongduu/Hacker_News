import React, { useEffect, useState } from "react";
import { NewsTitle } from "./StoryType1";
import { getStories } from "../../services/api";
import styled from "styled-components";
import { UserInfo } from "../UserInfo";

const BasicCardBox = styled.div`
  position: relative;
  width: 335px;
  height: 113px;
  margin-bottom: 12px;
  margin-left: 20px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
`;

export const BasicCard = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStories().then((ids) => setStoryIds(ids));
  }, []);

  return storyIds.slice(0, 10).map((storyId, i) => (
    <BasicCardBox>
      <NewsTitle key={i} storyId={storyId} />
      <UserInfo />
    </BasicCardBox>
  ));
};
