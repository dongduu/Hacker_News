import React, { useEffect, useState } from "react";
import { getStory } from "../../services/api";
import styled from "styled-components";

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

export const NewsTitle = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => {
      if (data && data.url) {
        setStory(data);
      }
    });
  }, []);

  const { title, id, url } = story;

  return story && url ? (
    // <div data-id={id}>
    <Title>{title}</Title>
  ) : // </div>
  null;
};
