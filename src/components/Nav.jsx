import React, { useState } from "react";
import styled from "styled-components";

const NavBox = styled.div`
  position: relative;
  height: 40px;
  width: 375px;
  padding: 0 20px 0;
`;

const NavBtn = styled.a`
  font-family: Roboto;
  display: inline-block;
  width: 83.75px;
  height: 40px;
  color: #767676;
  line-height: 40px;
  text-align: center;
  border-bottom: 1px solid #ff6600;
  font-size: 18px;
`;

const Nav = () => {
  // const [newsStyle, setNewsStyle] = useState(newsiInitialStyle);
  // const [newsClick, setNewsClick] = useState("default");
  // const [showStyle, setShowStyle] = useState(showiInitialStyle);
  // const [askStyle, setAskStyle] = useState(askiInitialStyle);
  // const [jobsStyle, setJobsStyle] = useState(jobsiInitialStyle);

  // const onClickNews = (e) => {
  //   if (e.target.props === undefined) {
  //     console.log(e.target.props);
  //     setNewsStyle({
  //       ...newsStyle,
  //       color: "#FF6600",
  //       borderBottom: "2px solid #FF6600"
  //     });
  //     setNewsClick("clicked");
  //   } else {
  //     console.log(e.target.props);
  //     setNewsStyle({
  //       ...newsiInitialStyle
  //     });
  //     setNewsClick("default");
  //   }
  // };
  // const onClickShow = (e) => {
  //   setShowStyle({
  //     ...showStyle,
  //     color: "#FF6600",
  //     borderBottom: "2px solid #FF6600"
  //   });
  // };
  // const onClickAsk = (e) => {
  //   setAskStyle({
  //     ...askStyle,
  //     color: "#FF6600",
  //     borderBottom: "2px solid #FF6600"
  //   });
  // };
  // const onClickJobs = (e) => {
  //   setJobsStyle({
  //     ...jobsStyle,
  //     color: "#FF6600",
  //     borderBottom: "2px solid #FF6600"
  //   });
  // };

  return (
    <NavBox>
      <NavBtn href="">Article</NavBtn>
      <NavBtn href="/Show">Show</NavBtn>
      <NavBtn href="/Ask">Ask</NavBtn>
      <NavBtn href="/Jobs">Jobs</NavBtn>
    </NavBox>
  );
};

export default Nav;
