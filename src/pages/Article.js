// import React, { useEffect, useState } from "react";
// import { getTopStories } from "../services/api";
// import { Title } from "../components/Header/Title";
// import { Nav } from "../components/Header/Nav";
// import { ArticleList } from "../components/List/ArticleList";
// import { News } from "./News";

// export const Article = () => {
//   const [storyIds, setStoryIds] = useState([]);

//   // useEffect(() => {
//   //   getTopStories().then((ids) => setStoryIds(ids));
//   // }, []);
//   return (
//     <div>
//       <Title />
//       <Nav />
//       <ArticleList />
//       {/* <News /> */}
//     </div>
//   );
// };
import React, { useState, useEffect } from "react";
import BasicCard from "../components/Card/BasicCard";
import { getNewIds } from "../services/api";
import { View } from "../components/View";

export const Article = () => {
  const [newIds, setNewIds] = useState([]);
  useEffect(() => {
    getNewIds().then((data) => setNewIds(data));
  }, []);

  return (
    <>
      <View />
      {newIds.slice(0, 10).map((id, index) => (
        <BasicCard id={id} key={id} index={id} />
      ))}
    </>
  );
};
