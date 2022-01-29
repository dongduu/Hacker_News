import styled from "styled-components";
// import React, { useState } from "react";

styled.div`
  height: 60px;
  width: 375px;
  border: solid red 1px;
  position: relative;
`;

// const titleBoxStyle = {
//   height: "60px",
//   width: "375px",
//   border: "solid red 1px",
//   position: "relative"
// };
// const logoStyle = {
//   position: "absolute",
//   top: "16px",
//   left: "20px"
// };
// const pStyle = {
//   position: "absolute",
//   top: "14px",
//   left: "56px",
//   fontSize: "10px",
//   color: "#111"
// };
// const titleStyle = {
//   position: "absolute",
//   top: "24px",
//   left: "56px",
//   fontSize: "18px",
//   color: "#111"
// };
// const darkModeStyle = {
//   position: "absolute",
//   top: "23px",
//   right: "46px"
// };
// const qeustionStyle = {
//   position: "absolute",
//   top: "23px",
//   right: "22px"
// };

const Title = () => {
  return (
    <div>
      <img src="./images/logo.png" alt="logo" />
      <p>React</p>
      <div>Hecker News</div>
      <img src="./images/darkmode.png" alt="darkmode" />
      <img src="./images/question.png" alt="question" />
    </div>
  );
};

export default Title;
