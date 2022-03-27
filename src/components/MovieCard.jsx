import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";

const MovieCard = ({ movie1 }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie1.release_date}</p>
      </div>

      <div>
        <img
          src={
            movie1.poster_path !== ""
              ? `https://image.tmdb.org/t/p/w500${movie1.poster_path}`
              : `https://image.tmdb.org/t/p/w500${movie1.backdrop_path}`
          }
          alt={movie1.title}
        />
      </div>

      <div>
        <span style={{ color: "yellow" }}>
          {movie1.vote_average}
          <FaStarHalfAlt />
        </span>
        <h3>{movie1.title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
