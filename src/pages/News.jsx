import styled from "styled-components";
import { View } from "../components/View";

const Box = styled.div`
  border: 1px solid black;
  width: 375px;
  height: 800px;
`;

const NewsBox = styled.div`
  height: 217px;
  border: 1px solid red;
  border-radius: 0px 0px 24px 24px;
`;

const NewsTime = styled.div`
  margin: 24px 0 4px 20px;
  font-family: Roboto;
  font-size: 12px;
  line-height: 16px;
  color: rgba(255, 102, 0, 0.5);
`;

const NewsTitle = styled.div`
  margin-left: 20px;
  color: #111;
  width: 335px;
  font-family: Roboto;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
`;

const NewsInfo = styled.div`
  border: 1px solid red;
  /* border-bottom: 1px solid #F0F0F6; */
  width: 335px;
  height: 16px;
  margin: 16px 0 40px 20px;
  padding-bottom: 16px;
`;

const CommentBox = styled.div`
  margin-top: 8px;
  border: 1px solid green;
  border-radius: 24px 24px 0px 0px;
  height: 541px;
`;

const Comment = styled.div`
  border: 1px solid green;
  height: 49px;
`;

export const News = () => {
  return (
    <Box>
      <NewsBox>
        <NewsTime>5 hours ago</NewsTime>
        <NewsTitle>
          Royal Society cautions against censorship of scientific misinformation
          online
        </NewsTitle>
        <NewsInfo />
      </NewsBox>
      <CommentBox>
        <View />
        <Comment />
      </CommentBox>
    </Box>
  );
};
