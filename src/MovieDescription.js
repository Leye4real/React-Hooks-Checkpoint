import React from "react";
import { useParams, Link } from "react-router-dom"

const MovieDescription = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === Number(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const { title, description, trailerLink } = movie;

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <iframe width="560" height="315" src={trailerLink} title={title} frameborder="0" allowfullscreen></iframe>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default MovieDescription;