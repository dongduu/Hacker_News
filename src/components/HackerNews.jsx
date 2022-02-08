import styled from "styled-components";
import { ArticleList } from "../components/List/ArticleList";

const HackerNewsBox = styled.div`
  position: relative;
  width: 375px;
  padding-top: 8px;
`;

export const HackerNews = () => {
  return (
    <HackerNewsBox>
      <ArticleList />
    </HackerNewsBox>
  );
};
