import { Title } from "../components/Header/Title";
import { Nav } from "../components/Header/Nav";
import React, { useState, useEffect } from "react";
import BasicCard from "../components/Card/BasicCard";
import DetailCard from "../components/Card/DetailCard";
import { getJobsIds } from "../services/api";
import { View } from "../components/View";

export const Jobs = () => {
  const [jobsIds, setJobsIds] = useState([]);
  useEffect(() => {
    getJobsIds().then((data) => setJobsIds(data));
  }, []);

  return (
    <>
      <Title />
      <Nav />
      <View />
      {jobsIds.slice(0, 10).map((id, index) => (
        <DetailCard id={id} key={id} index={index} />
      ))}
    </>
  );
};
