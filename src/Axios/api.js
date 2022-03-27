import axios from "./axios";

export function searchMovieWithTitle(title) {
  return axios.get(
    `/search/movie?api_key=${process.env.REACT_APP_MOVIEDB_APIKEY}&query=${title}`
  );
}
