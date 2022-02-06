import { Title } from "../components/Header/Title";
import { Nav } from "../components/Header/Nav";
import { HomeMain } from "../components/HomeMain";

export const Home = () => {
  return (
    <div>
      <Title />
      <Nav />
      <HomeMain />
    </div>
  );
};
