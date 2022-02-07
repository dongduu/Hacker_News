import styled from "styled-components";
import { View } from "../components/View";
import { ArticleList } from "../components/List/ArticleList";

const HackerNewsBox = styled.div`
  position: relative;
  width: 375px;
  padding-top: 8px;
`;

export const HackerNews = () => {
  return (
    <HackerNewsBox>
      <View />
      <ArticleList />
    </HackerNewsBox>
  );
};
