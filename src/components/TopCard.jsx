import styled from "styled-components";

const TopCardBox = styled.div`
  position: relative;
  width: 335px;
  height: 113px;
  margin-bottom: 12px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
`;

const NewsTitle = styled.strong`
  position: absolute;
  top: 16px;
  left: 16px;
  font-family: Roboto;
  font-size: 18px;
  line-height: 24px;
  color: #111;
`;

const NewsInfoBox = styled.div`
  position: absolute;
  top: 76px;
  left: 16px;
  width: 303px;
  height: 25px;
  border-top: #f0f0f6 solid 1px;
`;

const TopCard = () => {
  return (
    <TopCardBox>
      <NewsTitle>
        AdaCore and Ferrous Systems Joining Forces to Support Rust
      </NewsTitle>
      <NewsInfoBox></NewsInfoBox>
    </TopCardBox>
  );
};

export default TopCard;
