import axios from "axios";

export const BASE_URL = `https://hacker-news.firebaseio.com/v0/`;
export const TOPSTORIES_URL = `${BASE_URL}topstories.json`;
export const NEWSTORIES_URL = `${BASE_URL}newstories.json`;
export const ASKSTORIES_URL = `${BASE_URL}askstories.json`;
export const SHOWSTORIES_URL = `${BASE_URL}showstories.json`;
export const JOBSTORIES_URL = `${BASE_URL}jobstories.json`;
export const ITEM_URL = `${BASE_URL}item/`;

// ------------ 공통으로 data 가져오는 함수 ---------- //
export const getData = async (dataId) => {
  const result = await axios
    .get(`${ITEM_URL + dataId}.json`)
    .then(({ data }) => data);
  return result;
};
//--------------- top data--------------- //
export const getTopStoryIds = async () => {
  const result = await axios.get(TOPSTORIES_URL).then(({ data }) => data);
  return result;
};

//--------------- new data--------------- //
export const getNewIds = async () => {
  const result = await axios.get(NEWSTORIES_URL).then(({ data }) => data);
  return result;
};

//--------------- Ask data--------------- //
export const getAskIds = async () => {
  const result = await axios.get(ASKSTORIES_URL).then(({ data }) => data);
  return result;
};

//--------------- show data--------------- //
export const getShowIds = async () => {
  const result = await axios.get(SHOWSTORIES_URL).then(({ data }) => data);
  return result;
};
//--------------- jobs data--------------- //
export const getJobsIds = async () => {
  const result = await axios.get(JOBSTORIES_URL).then(({ data }) => data);
  return result;
};

// export const getComment = async (commentId) => {
//   try {
//     const res = await axios
//       .get(`${ITEM_URL + commentId}.json`)
//       .then(({ data }) => data);
//     return res;
//   } catch (err) {
//     console.error(err);
//   }
// };
