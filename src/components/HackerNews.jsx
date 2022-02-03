import styled from "styled-components";
import View from "../components/View";
import BasicCard from "../components/BasicCard";
import DetailCard from "../components/DetailCard";

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
      <BasicCard />
      <DetailCard />
    </HackerNewsBox>
  );
};

export default HackerNews;
