import React, { useEffect, useState } from "react";
import { getStory } from "../../services/api";
import styled from "styled-components";

const Title = styled.strong`
  position: absolute;
  top: 16px;
  left: 16px;
  width: 300px;
  font-family: Roboto;
  font-size: 18px;
  line-height: 24px;
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
