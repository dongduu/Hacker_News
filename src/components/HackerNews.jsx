import styled from "styled-components";
import View from "../components/View";
import TopCard from "../components/TopCard";

const HackerNewsBox = styled.div`
  position: relative;
  width: 375px;
  padding-top: 8px;
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
