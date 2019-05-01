import axios from 'axios';
const apiKey = "f9b60f510275402186ba159840981985";

export default axios.create({
    method: "get",
    baseURL: "https://newsapi.org/v2",
    params: {
      pageSize: 6
    },
    headers: {
      Authorization: apiKey
    }
  });