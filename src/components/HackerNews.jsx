import styled from "styled-components";
import View from "../components/View";

const HackerNewsBox = styled.div`
  height: 418px;
  width: 375px;
  border: 1px solid green;
`;

const HackerNews = () => {
  return (
    <HackerNewsBox>
      <View />
    </HackerNewsBox>
  );
};

export default HackerNews;
