import React, { useState, useEffect } from "react";
import { BasicCard } from "../Card/BasicCard";
// import { DetailCard } from "../Card/DetailCard";
import { getNewIds } from "../../services/api";
import { View } from "../View";

export const ArticleList = () => {
  const [newIds, setNewIds] = useState([]);
  useEffect(() => {
    getNewIds().then((data) => setNewIds(data));
  }, []);

  return (
    <>
      <View />
      {newIds.slice(0, 10).map((id, index) => (
        <BasicCard />
      ))}
    </>
  );
};

// return storyIds.slice(0, 10).map((storyId) => (
//   <BasicCard />)
