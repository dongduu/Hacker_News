import { Title } from "../components/Header/Title";
import { Nav } from "../components/Header/Nav";
import React, { useState, useEffect } from "react";
import BasicCard from "../components/Card/BasicCard";
import DetailCard from "../components/Card/DetailCard";
import { getAskIds } from "../services/api";
import { View } from "../components/View";

export const Ask = () => {
  const [askIds, setAskIds] = useState([]);
  useEffect(() => {
    getAskIds().then((data) => setAskIds(data));
  }, []);

  return (
    <>
      <Title />
      <Nav />
      <View />
      {askIds.slice(0, 10).map((id, index) => (
        <DetailCard id={id} key={id} index={index} />
      ))}
    </>
  );
};
