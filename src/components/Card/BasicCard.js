import React, { useEffect, useState } from "react";
import { getData } from "../../services/api";
import styled from "styled-components";
import { UserInfo } from "../UserInfo";

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
  width: 303px;
  padding-top: 16px;
  margin: 0 16px 0;
  font-family: Roboto;
  font-size: 18px;
  line-height: 24px;
  color: #111;
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
      <UserInfo />
    </BasicCardBox>
  );
}

export default BasicCard;
