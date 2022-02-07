import React, { useState } from "react";
import styled from "styled-components";
import { BasicCard } from "../Card/BasicCard";
import { DetailCard } from "../Card/DetailCard";

export const AskList = () => {
  const [veiw, setView] = useState(true);

  return (
    <>
      {veiw ? (
        <BasicCard props="getAskStories" />
      ) : (
        <DetailCard props="getAskStories" />
      )}
    </>
  );
};
