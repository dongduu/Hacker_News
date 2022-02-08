import { Title } from "../components/Header/Title";
import { Nav } from "../components/Header/Nav";
import { ArticleList } from "../components/List/ArticleList";

export const Article = () => {
  return (
    <div>
      <Title />
      <Nav />
      <ArticleList />
    </div>
  );
};
