import React, { useEffect, useState } from "react";
import { NewsTitle } from "./Story";
import { getStory } from "../../services/api";
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

const Title = styled.div`
  width: 303px;
  padding-top: 16px;
  margin: 0 16px 0;
  font-family: Roboto;
  font-size: 18px;
  line-height: 24px;
  color: #111;
`;

export const BasicCard = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => {
      if (data && data.url) {
        setStory(data);
      }
    });
  }, []);

  return story.slice(0, 10).map((storyId, i) => (
    <BasicCardBox>
      <Title>
        <NewsTitle key={i} storyId={storyId} />
      </Title>
      <UserInfo />
    </BasicCardBox>
  ));
};
