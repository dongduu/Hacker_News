import { useState } from "react";
import styled from "styled-components";

const Veiwbox = styled.div`
  position: relative;
  width: 375px;
  height: 52px;
`;

const NewBox = styled.div`
  position: absolute;
  width: 51px;
  height: 20px;
  top: 20px;
  left: 20px;
`;

const TopBox = styled.div`
  position: absolute;
  width: 51px;
  height: 20px;
  top: 20px;
  left: 75px;
  margin-left: 4px;
`;

const IconImg = styled.img`
  position: absolute;
  top: 7px;
  left: 6px;
`;

const NewMode = styled.div`
  position: absolute;
  left: 20px;
  font-family: Roboto;
  font-size: 14px;
  line-height: 20px;
  color: #999;
`;

const TopMode = styled.div`
  position: absolute;
  left: 20px;
  font-family: Roboto;
  font-size: 14px;
  line-height: 20px;
  color: #ff6600;
`;

const ReadingIcon = styled.img`
  position: absolute;
  top: 21px;
  right: 21px;
`;

export const View = () => {
  const [view, setView] = useState("zoomMode");

  const changeReadingMode = (e) => {
    setView(false);
  };

  return (
    <Veiwbox>
      <NewBox>
        <IconImg src={require("./images/check.png")} alt="check" />
        <NewMode>NEW</NewMode>
      </NewBox>
      <TopBox>
        <IconImg src={require("./images/checked.png")} alt="checked" />
        <TopMode>TOP</TopMode>
      </TopBox>
      <ReadingIcon
        onClick={changeReadingMode}
        src={require("./images/reading.png")}
        alt="reading"
      />
    </Veiwbox>
  );
};
