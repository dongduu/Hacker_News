import React, { useEffect, useState } from "react";
import { getStory } from "../../services/api";

export const Story = ({ storyId }) => {
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
    <div data-id={id}>
      <div>{title}</div>
    </div>
  ) : null;
};
