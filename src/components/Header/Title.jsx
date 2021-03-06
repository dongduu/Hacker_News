import styled from "styled-components";

const TitleDiv = styled.div`
  height: 60px;
  width: 375px;
  position: relative;
`;

const Logo = styled.a`
  display: block;
  position: absolute;
  top: 17px;
  left: 21px;
`;

const MainTitle = styled.a`
  position: absolute;
  width: 20px;
  top: 16px;
  left: 60px;
  font-size: 14px;
  font-family: Roboto;
  font-weight: 500;
  font-style: italic;
  line-height: 16px;
  letter-spacing: 0.025em;
  color: #505050;
`;

const DarkMode = styled.div`
  position: absolute;
  top: 19px;
  right: 65px;
`;

const Help = styled.div`
  position: absolute;
  top: 20px;
  right: 26px;
`;

export const Title = () => {
  return (
    <TitleDiv>
      <Logo href="/">
        <img src={require("../images/logo.png")} alt="logo" />
      </Logo>
      <MainTitle href="">ReHecker News</MainTitle>

      <DarkMode>
        <img src={require("../images/darkmode.png")} alt="darkmode" />
      </DarkMode>
      <Help>
        <img src={require("../images/help.png")} alt="help" />
      </Help>
    </TitleDiv>
  );
};
