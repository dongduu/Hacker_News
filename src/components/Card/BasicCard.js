import React, { useEffect, useState } from "react";
import { getData } from "../../services/api";
import styled from "styled-components";

const BasicCardBox = styled.div`
  position: relative;
  width: 335px;
  margin-bottom: 12px;
  margin-left: 20px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
`;

const Title = styled.a`
  display: block;
  width: 303px;
  margin: 16px;
  padding-top: 16px;
  font-family: Roboto;
  font-size: 18px;
  line-height: 24px;
  color: #111;
`;

const UserInfoBox = styled.div`
  position: relative;
  margin-top: 12px;
  margin-left: 16px;
  padding: 8px 0 12px;
  width: 303px;
  height: 25px;
  border-top: #f0f0f6 solid 1px;
`;

const UserName = styled.a`
  display: inline;
  font-family: Roboto;
  font-size: 12px;
  line-height: 16px;
  color: #767676;
`;

const UserPlus = styled.img`
  margin-left: 6px;
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
  line-height: 20px;
  color: #505050;
`;

const CommentInfo = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  font-family: Roboto;
  font-size: 12px;
  line-height: 20px;
  color: #ff6600;
`;

function BasicCard({ id }) {
  const [listId, setListId] = useState({});
  const [idUrl, setIdUrl] = useState("");

  useEffect(() => {
    getData(id).then((data) => data && setListId(data));
    setIdUrl(`https://hacker-news.firebaseio.com/v0/item/:{id}.json`);
  }, []);

  return (
    <BasicCardBox>
      <Title href={idUrl}>{listId.title}</Title>
      <UserInfoBox>
        <UserName href="https://hacker-news.firebaseio.com/v0/user/:{id}.json">
          {listId.by}
          <UserPlus src={require("../images/arrow.png")} alt="user" />
        </UserName>
        <DetailInfoBox>
          <DetailBox>
            <DetailImg src={require("../images/point.png")} alt="user" />
            <PointInfo>1000</PointInfo>
          </DetailBox>
          <DetailBox>
            <DetailImg src={require("../images/comment.png")} alt="user" />
            <CommentInfo>1000</CommentInfo>
          </DetailBox>
        </DetailInfoBox>
      </UserInfoBox>
    </BasicCardBox>
  );
}

export default BasicCard;
