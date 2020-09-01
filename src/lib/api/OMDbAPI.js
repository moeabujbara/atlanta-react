import axios from "axios";

export const gettheNameoftheMovieApi = (query) => {
  return axios.get(" http://www.omdbapi.com/?i=tt3896198&apikey=f31abaef", {
    params: { s: query },
  });
};
