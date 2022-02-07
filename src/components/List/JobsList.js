import React, { useState } from "react";
import styled from "styled-components";
import { BasicCard } from "../Card/BasicCard";
import { DetailCard } from "../Card/DetailCard";

export const JobList = () => {
  const [veiw, setView] = useState(true);

  return (
    <>
      {veiw ? (
        <BasicCard props="getJobStories" />
      ) : (
        <DetailCard props="getJobStories" />
      )}
    </>
  );
};
