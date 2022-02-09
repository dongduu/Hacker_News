import React, { useEffect, useState } from "react";
import { getTopStories } from "../services/api";
import { Title } from "../components/Header/Title";
import { Nav } from "../components/Header/Nav";
import { ArticleList } from "../components/List/ArticleList";
import { News } from "./News";

export const Article = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getTopStories().then((ids) => setStoryIds(ids));
  }, []);
  return (
    <div>
      <Title />
      <Nav />
      <ArticleList storyIds={storyIds} />
      {/* <News /> */}
    </div>
  );
};
