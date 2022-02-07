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
  const [navStyle, setNavStyle] = useState("basic_nav");

  const clicked = () => {
    if (navStyle === "basic_nav" || "unclicked_nav") {
      setNavStyle("clicked_nav");
    } else if (navStyle === "cliked_nav") {
      setNavStyle("unclicked_nav");
    }
  };

  return (
    <NavBox>
      <NavBtn className={navStyle} href="/Article">
        Article
      </NavBtn>
      <NavBtn className={navStyle} href="/Show">
        Show
      </NavBtn>
      <NavBtn className={navStyle} href="/Ask">
        Ask
      </NavBtn>
      <NavBtn className={navStyle} href="/Jobs">
        Jobs
      </NavBtn>
    </NavBox>
  );
};
