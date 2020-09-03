import axios from "axios";

export const gettheNameoftheMovieApi = (query) => {
  return axios.get(" https://www.omdbapi.com/?i=tt3896198&apikey=f31abaef", {
    params: { s: query },
  });
};
