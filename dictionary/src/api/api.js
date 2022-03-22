import axios from "axios";

const dictionaryAPI = axios.create({
  baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en/",
});

export const getWord = async (search) => {
  console.log("Get word", search);
  const { data } = await dictionaryAPI.get(`${search}`);
  return data;
};
