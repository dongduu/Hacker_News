import React, { useState } from "react";
import styled from "styled-components";
import { BasicCard } from "../Card/BasicCard";
import { DetailCard } from "../Card/DetailCard";

export const ArticleList = () => {
  const [veiw, setView] = useState(true);

  return (
    <>
      {veiw ? (
        <BasicCard props="getNewStories" />
      ) : (
        <DetailCard props="getNewStories" />
      )}
    </>
  );
};
