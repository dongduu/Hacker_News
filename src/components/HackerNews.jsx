import styled from "styled-components";
import { View } from "../components/View";
import { BasicCard } from "../components/BasicCard";

const HackerNewsBox = styled.div`
  position: relative;
  width: 375px;
  padding-top: 8px;
`;

export const HackerNews = () => {
  return (
    <HackerNewsBox>
      <View />
      <BasicCard />
    </HackerNewsBox>
  );
};
