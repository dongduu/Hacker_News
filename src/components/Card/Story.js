import React, { useEffect, useState } from "react";
import { getStory } from "../../services/api";
import styled from "styled-components";

const Link = styled.a`
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

  const { title, id, url, by } = story;

  return story && url ? (
    // <div data-id={id}>
    <Link href={url}>{title}</Link>
  ) : // </div>
  null;
};
