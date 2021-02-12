import axios from "axios";
const KEY = "AIzaSyALnRJqmIOn5O3vYRQMMeyNYryM23dvoM0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { part: "snippet", maxResults: 5, key: KEY, type: "video" },
});
