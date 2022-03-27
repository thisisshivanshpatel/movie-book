import React, { useState } from "react";
import "./App.css";
import { searchMovieWithTitle } from "./Axios/api";
import MovieCard from "./components/MovieCard";
import searchIcon from "./search.svg";

//const API_URL = "http://www.omdbapi.com?apikey=dc20621f";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");

  const searchMovies = async (title) => {
    const response = await searchMovieWithTitle(title);
    const data = response.data.results;
    setMovies(data);
  };

  // useEffect(() => {
  //   searchMovies(searchText);
  // }, [searchText]);
  return (
    <div className="app">
      <h1>Movie Book</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={searchText}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              searchMovies(searchText);
            }
          }}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => {
            searchMovies(searchText);
          }}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, ind) => (
            <MovieCard movie1={movie} key={ind} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
