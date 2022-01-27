// import React, { useState } from "react";

const titleBoxStyle = {
  height: "60px",
  width: "375px",
  border: "solid red 1px",
  position: "relative"
};
const logoStyle = {
  position: "absolute",
  top: "16px",
  left: "20px"
};
const pStyle = {
  position: "absolute",
  top: "14px",
  left: "56px",
  fontSize: "10px",
  color: "#111"
};
const titleStyle = {
  position: "absolute",
  top: "24px",
  left: "56px",
  fontSize: "18px",
  color: "#111"
};
const darkModeStyle = {
  position: "absolute",
  top: "23px",
  right: "46px"
};
const qeustionStyle = {
  position: "absolute",
  top: "23px",
  right: "22px"
};

const Title = () => {
  return (
    <div style={titleBoxStyle}>
      <img src="../image/logo" alt="" style={logoStyle} />
      <p style={pStyle}>React</p>
      <div style={titleStyle}>Hecker News</div>
      <img src="../image/darkmode" alt="" style={darkModeStyle} />
      <img src="../image/qeustion" alt="" style={qeustionStyle} />
    </div>
  );
};

export default Title;
