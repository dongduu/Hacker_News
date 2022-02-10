import { Title } from "../components/Header/Title";
import { Nav } from "../components/Header/Nav";
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
      <Title />
      <Nav />
      <View />
      {newIds.slice(0, 10).map((id, index) => (
        <BasicCard id={id} key={id} index={id} />
      ))}
    </>
  );
};
