import React, { useState } from "react";

// const navBoxStyle = {
//   position: "relative",
//   height: "40px",
//   width: "375px",
//   fontSize: "18px"
// };
// const initialStyle = {
//   display: "inline-block",
//   width: "84px",
//   height: "40px",
//   position: "absolute",
//   color: "#999",
//   textAlign: "center",
//   alignItems: "center",
//   top: "0",
//   borderBottom: "2px solid #F0F0F6"
// };
// const newsiInitialStyle = {
//   ...initialStyle,
//   left: "20px"
// };
// const showiInitialStyle = {
//   ...initialStyle,
//   left: "104px"
// };
// const askiInitialStyle = {
//   ...initialStyle,
//   right: "104px"
// };
// const jobsiInitialStyle = {
//   ...initialStyle,
//   right: "20px"
// };

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
    <nav>
      <a href="javascript:void(0)">News</a>
      <a href="javascript:void(0)">Show</a>
      <a href="javascript:void(0)">Ask</a>
      <a href="javascript:void(0)">Jobs</a>
    </nav>
  );
};

export default Nav;
