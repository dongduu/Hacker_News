import React, { useState } from "react";
import styled from "styled-components";
import { BasicCard } from "../Card/BasicCard";
import { DetailCard } from "../Card/DetailCard";
import { View } from "../View";

export const ArticleList = ({ storyIds }) => {
  const [veiw, setView] = useState(true);

  return;
  <>
    {storyIds.slice(0, 10).map((id, index) => {
      <BasicCard />;
    })}
  </>;
};

// return storyIds.slice(0, 10).map((storyId) => (
//   <BasicCard />)
