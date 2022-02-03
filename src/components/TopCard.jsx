import styled from "styled-components";
import UserInfo from "./UserInfo";

const TopCardBox = styled.div`
  position: relative;
  width: 335px;
  height: 113px;
  margin-bottom: 12px;
  margin-left: 20px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
`;

const NewsTitle = styled.strong`
  position: absolute;
  top: 16px;
  left: 16px;
  width: 300px;
  font-family: Roboto;
  font-size: 18px;
  line-height: 24px;
  color: #111;
`;

const TopCard = () => {
  return (
    <TopCardBox>
      <NewsTitle>
        AdaCore and Ferrous Systems Joining Forces to Support Rust
      </NewsTitle>
      <UserInfo />
    </TopCardBox>
  );
};

export default TopCard;
