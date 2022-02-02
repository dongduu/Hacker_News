import styled from "styled-components";

const Veiwbox = styled.div`
  position: relative;
  width: 375px;
  height: 52px;
  border: 1px black solid;
`;

const IconBox = styled.div`
  position: absolute;
  width: 51px;
  height: 20px;
  top: 20px;
  left: 20px;
`;

const IconImg = styled.img`
  position: absolute;
  top: 7px;
  left: 6px;
`;

const VeiwMode = styled.div`
  position: absolute;
  left: 20px;
  font-family: Roboto;
  font-size: 14px;
  line-height: 20px;
  color: #999;
`;

const VeiwNew = () => {
  return (
    <Veiwbox>
      <IconBox>
        <IconImg src={require("./images/check.png")} alt="" />
        <VeiwMode>NEW</VeiwMode>
      </IconBox>
    </Veiwbox>
  );
};

export default VeiwNew;
