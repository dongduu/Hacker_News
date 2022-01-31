import styled from "styled-components";

const HackerNewsBox = styled.div`
  height: 418px;
  width: 375px;
  border: 1px solid green;
`;

const SelectStyle = styled.div`
  width: 375px;
  height: 52px;
  border: 1px solid green;
  margin-top: 16px;
`;

const HackerNews = () => {
  return (
    <HackerNewsBox>
      <SelectStyle></SelectStyle>
    </HackerNewsBox>
  );
};

export default HackerNews;
