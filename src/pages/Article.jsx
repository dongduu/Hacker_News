import { Title } from "../components/Header/Title";
import { Nav } from "../components/Header/Nav";
import { ArticleList } from "../components/List/ArticleList";
import { News } from "./News";

export const Article = () => {
  return (
    <div>
      <Title />
      <Nav />
      <ArticleList />
      {/* <News /> */}
    </div>
  );
};
