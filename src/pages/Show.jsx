import { Title } from "../components/Header/Title";
import { Nav } from "../components/Header/Nav";
import { View } from "../components/View";
import { ShowList } from "../components/List/ShowList";

export const Show = () => {
  return (
    <div>
      <Title />
      <Nav />
      <View />
      <ShowList />
    </div>
  );
};
