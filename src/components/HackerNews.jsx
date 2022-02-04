import styled from "styled-components";
import { View } from "../components/View";
import { Stories } from "./stories/stories";

const HackerNewsBox = styled.div`
  position: relative;
  width: 375px;
  padding-top: 8px;
`;

export const HackerNews = () => {
  return (
    <HackerNewsBox>
      <View />
      <Stories />
    </HackerNewsBox>
  );
};
