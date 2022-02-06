import { Title } from "../components/Header/Title";
import { Nav } from "../components/Header/Nav";
import { View } from "../components/View";
import { BasicCard } from "../components/Card/BasicCard";

export const Show = () => {
  return (
    <div>
      <Title />
      <Nav />
      <View />
      <BasicCard />
    </div>
  );
};
