import styled from "styled-components";
import View from "../components/View";
import TopCard from "../components/TopCard";

const HackerNewsBox = styled.div`
  height: 410px;
  width: 335px;
  padding: 8px 20px 0;
  border: 1px solid green;
`;

const HackerNews = () => {
  return (
    <HackerNewsBox>
      <View />
      <TopCard />
    </HackerNewsBox>
  );
};

export default HackerNews;
