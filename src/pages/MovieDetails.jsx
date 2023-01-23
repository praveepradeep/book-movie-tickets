import React from "react";
import MovieHeader from "../components/MovieHeader";
import MovieSections from "../components/movieSections";

const MovieDetails = () => {
  return (
    <div className="movie-details-section">
      <MovieHeader />
      <MovieSections title="Cast" />
      <MovieSections title="Crew" />
    </div>
  );
};

export default MovieDetails;
