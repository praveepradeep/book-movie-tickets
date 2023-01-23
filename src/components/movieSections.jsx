import React from "react";
import MovieTiles from "./movieTiles";

const MovieSections = ({ title, bookButton }) => {
  return (
    <div className="movie-section">
      <div className="title flex items-center">
        <span className="flex-1 text-lg">{title}</span>
        <span className="title-line"></span>
      </div>
      <div className="flex flex-wrap">
        <MovieTiles bookButton={bookButton} />
        <MovieTiles bookButton={bookButton} />
        <MovieTiles bookButton={bookButton} />
        <MovieTiles bookButton={bookButton} />
      </div>
    </div>
  );
};

export default MovieSections;
