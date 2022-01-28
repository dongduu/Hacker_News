import React, { useState } from "react";

const navBoxStyle = {
  position: "relative",
  height: "40px",
  width: "375px",
  fontSize: "18px"
};
const initialStyle = {
  display: "block",
  width: "84px",
  margin: "0 auto",
  position: "absolute",
  color: "#999",
  padding: "auto",
  top: "0",
  bottom: "0",
  borderBottom: "2px solid #F0F0F6"
};
const newsiInitialStyle = {
  ...initialStyle,
  left: "20px"
};
const showiInitialStyle = {
  ...initialStyle,
  left: "104px"
};
const askiInitialStyle = {
  ...initialStyle,
  right: "104px"
};
const jobsiInitialStyle = {
  ...initialStyle,
  right: "20px"
};

const Nav = () => {
  const [newsStyle, setNewsStyle] = useState(newsiInitialStyle);
  const [showStyle, setShowStyle] = useState(showiInitialStyle);
  const [askStyle, setAskStyle] = useState(askiInitialStyle);
  const [jobsStyle, setJobsStyle] = useState(jobsiInitialStyle);

  const onClickNews = (e) => {
    setNewsStyle({
      ...newsStyle,
      color: "#FF6600",
      borderBottom: "2px solid #FF6600"
    });
  };
  const onClickShow = (e) => {
    setShowStyle({
      ...showStyle,
      color: "#FF6600",
      borderBottom: "2px solid #FF6600"
    });
  };
  const onClickAsk = (e) => {
    setAskStyle({
      ...askStyle,
      color: "#FF6600",
      borderBottom: "2px solid #FF6600"
    });
  };
  const onClickJobs = (e) => {
    setJobsStyle({
      ...jobsStyle,
      color: "#FF6600",
      borderBottom: "2px solid #FF6600"
    });
  };

  return (
    <nav style={navBoxStyle}>
      <a href="javascript:void(0)" style={newsStyle} onClick={onClickNews}>
        News
      </a>
      <a href="javascript:void(0)" style={showStyle} onClick={onClickShow}>
        Show
      </a>
      <a href="javascript:void(0)" style={askStyle} onClick={onClickAsk}>
        Ask
      </a>
      <a href="javascript:void(0)" style={jobsStyle} onClick={onClickJobs}>
        Jobs
      </a>
    </nav>
  );
};

export default Nav;
