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
  const [articleStyle, setArticleStyle] = useState("basic_nav");
  const [showStyle, setShowStyle] = useState("basic_nav");
  const [askStyle, setAskStyle] = useState("basic_nav");
  const [jobStyle, setJobStyle] = useState("basic_nav");

  const clicked = () => {
    if (articleStyle === "basic_nav" || "unclicked_nav") {
      setArticleStyle("clicked_nav");
    } else if (articleStyle === "cliked_nav") {
      setArticleStyle("unclicked_nav");
    }
  };

  return (
    <NavBox>
      <NavBtn className={articleStyle} onClick={clicked} href="/Article">
        Article
      </NavBtn>
      <NavBtn className={showStyle} href="/Show">
        Show
      </NavBtn>
      <NavBtn className={askStyle} href="/Ask">
        Ask
      </NavBtn>
      <NavBtn className={jobStyle} href="/Jobs">
        Jobs
      </NavBtn>
    </NavBox>
  );
};
