import React from "react";
import { Link } from "react-router-dom";
import MovieCards from "./MovieCards";

const MovieList = ({ filmprop }) => {
  return (
    <div>
      {filmprop.map((movie) => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          <MovieCards movieprop={movie} />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;