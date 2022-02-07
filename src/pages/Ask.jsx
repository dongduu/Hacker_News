import { Title } from "../components/Header/Title";
import { Nav } from "../components/Header/Nav";
import { View } from "../components/View";
import { AskList } from "../components/List/AskList";

export const Ask = () => {
  return (
    <div>
      <Title />
      <Nav />
      <View />
      <AskList />
    </div>
  );
};
