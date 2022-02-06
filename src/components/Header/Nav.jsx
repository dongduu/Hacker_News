import React, { useState } from "react";
import styled from "styled-components";
import "../../styles.css";

const NavBox = styled.div`
  position: relative;
  height: 40px;
  width: 375px;
  padding: 0 20px 0;
`;

const NavBtn = styled.a`
  display: inline-block;
  width: 83.75px;
  height: 40px;
  font-family: Roboto;
  font-size: 18px;
  line-height: 40px;
  text-align: center;
`;

export const Nav = () => {
  return (
    <NavBox>
      <NavBtn className="basic_nav" href="/Article">
        Article
      </NavBtn>
      <NavBtn className="basic_nav" href="/Show">
        Show
      </NavBtn>
      <NavBtn className="basic_nav" href="/Ask">
        Ask
      </NavBtn>
      <NavBtn className="basic_nav" href="/Jobs">
        Jobs
      </NavBtn>
    </NavBox>
  );
};
