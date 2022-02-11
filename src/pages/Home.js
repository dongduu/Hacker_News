// import { HomeMain } from "../components/HomeMain";

// export const Home = () => {
//   const [newIds, setNewIds] = useState([]);
//   useEffect(() => {
//     getNewIds().then((data) => setNewIds(data));
//   }, []);
//   return (
//     <div>
//       <Title />
//       <Nav />
//       <HomeMain>
//         <View />
//         {newIds.slice(0, 10).map((id, index) => (
//           <BasicCard id={id} key={id} index={index} />
//         ))}
//       </HomeMain>
//     </div>
//   );
// };

import { Title } from "../components/Header/Title";
import { Nav } from "../components/Header/Nav";
import { HomeMain } from "../components/HomeMain";
import React, { useState, useEffect } from "react";
import BasicCard from "../components/Card/BasicCard";
import DetailCard from "../components/Card/DetailCard";
import { getNewIds } from "../services/api";
import { View } from "../components/View";

export const Home = () => {
  const [newIds, setNewIds] = useState([]);
  useEffect(() => {
    getNewIds().then((data) => setNewIds(data));
  }, []);

  return (
    <>
      <Title />
      <Nav />
      <HomeMain />
      <View />
      {newIds.slice(0, 10).map((id, index) => (
        <BasicCard id={id} key={id} index={index} />
      ))}
    </>
  );
};
