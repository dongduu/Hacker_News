import axios from "axios";

export const BASE_URL = "https://hacker-news.firebaseio.com/v0";
export const NEWSTORIES_URL = `${BASE_URL}/newstories.json`;
export const TOPSTORIES_URL = `${BASE_URL}/topstories.json`;
export const ITEM_URL = `${BASE_URL}/item/`;

export const getStories = async () => {
  try {
    const res = await axios.get(NEWSTORIES_URL).then(({ data }) => data);
    return res;
  } catch (err) {
    console.error(err);
  }
};

export const getStory = async (storyId) => {
  try {
    const res = await axios
      .get(`${ITEM_URL + storyId}.json`)
      .then(({ data }) => data);
    return res;
  } catch (err) {
    console.error(err);
  }
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
