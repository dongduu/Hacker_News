import styled from "styled-components";

const UserInfoBox = styled.div`
  position: absolute;
  top: 76px;
  left: 16px;
  width: 303px;
  height: 25px;
  border-top: #f0f0f6 solid 1px;
`;

const UserNameBox = styled.div`
  position: relative;
  width: 105px;
  height: 16px;
  margin-top: 8px;
`;
const UserName = styled.p`
  font-family: Roboto;
  font-size: 12px;
  line-height: 16px;
  color: #767676;
`;
const UserPlus = styled.img`
  position: absolute;
  top: 5px;
  right: 5px;
`;

const DetailInfoBox = styled.div`
  position: absolute;
  width: 106px;
  height: 16px;
  top: 8px;
  left: 205px;
`;

const DetailBox = styled.div`
  position: relative;
  display: inline-block;
  width: 45px;
  height: 16px;
  margin-right: 8px;
`;

const DetailImg = styled.img`
  margin: 1px;
`;

const PointInfo = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  font-family: Roboto;
  font-size: 12px;
  line-height: 16px;
  color: #505050;
`;

const CommentInfo = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  font-family: Roboto;
  font-size: 12px;
  line-height: 16px;
  color: #ff6600;
`;

const UserInfo = () => {
  return (
    <UserInfoBox>
      <UserNameBox>
        <UserName>bryanrasmussen</UserName>
        <UserPlus src={require("./images/arrow.png")} alt="user" />
      </UserNameBox>
      <DetailInfoBox>
        <DetailBox>
          <DetailImg src={require("./images/point.png")} alt="user" />
          <PointInfo>1000</PointInfo>
        </DetailBox>
        <DetailBox>
          <DetailImg src={require("./images/comment.png")} alt="user" />
          <CommentInfo>1000</CommentInfo>
        </DetailBox>
      </DetailInfoBox>
    </UserInfoBox>
  );
};

export default UserInfo;
