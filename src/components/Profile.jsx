import React, { useState } from "react";
import styled from "styled-components";

const ProfileBox = styled.div`
  width: 375px;
  height: 600px;
  box-shadow: 0px -4px 16px rgba(0, 0, 0, 0.2);
  border-radius: 20px 20px 0px 0px;
`;

const UserInfo = styled.div`
  width: 335px;
  height: 139px;
  border-radius: 20px 20px 0px 0px;
  border-bottom: 1px solid #f0f0f6;
  margin: 60px 20px 0;
`;

const UserName = styled.div`
  width: 335px;
  height: 28px;
  font-family: Roboto;
  font-weight: 500;
  font-size: 28px;
  line-height: 28px;
  text-align: center;
  color: #111;
`;

const ContentsBox = styled.div`
  width: 335px;
  font-family: Roboto;
  font-size: 14px;
  line-height: 20px;
  color: #767676;
  margin-left: 20px;
`;

const LinkBtn = styled.div`
  height: 48px;
  width: 335px;
  border-radius: 8px;
  background: #f9fafb;
  margin: 12px 20px 0;
`;

export const Profile = () => {
  return (
    <ProfileBox>
      <UserInfo>
        <UserName>zdw</UserName>
        <p>profile with Hacker News</p>
      </UserInfo>
      <ContentsBox>
        <LinkBtn></LinkBtn>
        <LinkBtn></LinkBtn>
        <LinkBtn></LinkBtn>
      </ContentsBox>
    </ProfileBox>
  );
};
