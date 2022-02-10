import { Title } from "../components/Header/Title";
import { Nav } from "../components/Header/Nav";
import React, { useState, useEffect } from "react";
import BasicCard from "../components/Card/BasicCard";
import DetailCard from "../components/Card/DetailCard";
import { getShowIds } from "../services/api";
import { View } from "../components/View";

export const Show = () => {
  const [showIds, setShowIds] = useState([]);
  useEffect(() => {
    getShowIds().then((data) => setShowIds(data));
  }, []);

  return (
    <>
      <Title />
      <Nav />
      <View />
      {showIds.slice(0, 10).map((id, index) => (
        <DetailCard id={id} key={id} index={index} />
      ))}
    </>
  );
};
