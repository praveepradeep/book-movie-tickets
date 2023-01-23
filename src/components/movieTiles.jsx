import React from "react";
import { Link } from "react-router-dom";

const MovieTiles = ({ bookButton }) => {
  console.log(bookButton)
  let classNameOnCondtion = bookButton === true ? "blur-image" : "";
  console.log(classNameOnCondtion)
  return (
    <div className="movie-tiles">
      <div className="image-container relative">
        <img
          className={classNameOnCondtion}
          src="https://image.tmdb.org/t/p/original/6XM6VvqKueRI9kITnxe0CU1jGkH.jpg"
          alt=""
        />
        {bookButton ? (
          <div className="hover-content">
            <div className="rating-section">
              <span>8.7/10</span>
            </div>
            <span>3h 5min</span>
            <button className="txt-bg-color">Book Now</button>
          </div>
        ) : (
          ""
        )}
      </div>
      <Link to="/movies/1">
        <div className="movie-details flex flex-col mt-2">
          <span className="movie-category uppercase text-sm my-2 txt-color">
            Action/sci-fi
          </span>
          <span className="movie-title capitalize text-xl">
            avatar the way of water
          </span>
        </div>
      </Link>
    </div>
  );
};

export default MovieTiles;
