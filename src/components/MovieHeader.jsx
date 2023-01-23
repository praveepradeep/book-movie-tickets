import React from "react";
import { Link } from "react-router-dom";

const MovieHeader = () => {
  return (
    <div className="movie-book-section">
      <div className="movie-header-section flex relative">
        <img
          src="https://image.tmdb.org/t/p/original/6XM6VvqKueRI9kITnxe0CU1jGkH.jpg"
          alt=""
        />
        <div className="movie-details flex flex-col ml-12">
          <span className="movie-name capitalize text-4xl">
            Avatar the way of water
          </span>
          <span className="movie-rating capitalize text-3xl">9.6/10</span>
          <span className="movie-rating capitalize text-xl">3D English</span>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            facilis in enim corporis perspiciatis recusandae laborum ipsam quod,
            nihil cupiditate, incidunt voluptatibus doloribus porro minus est
            sit deleniti! Maiores, vero? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Corrupti facilis in enim corporis perspiciatis
            recusandae laborum ipsam quod, nihil cupiditate, incidunt
            voluptatibus doloribus porro minus est sit deleniti! Maiores, vero?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            facilis in enim corporis perspiciatis recusandae laborum ipsam quod,
            nihil cupiditate, incidunt voluptatibus doloribus porro minus est
            sit deleniti! Maiores, vero? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Corrupti facilis in enim corporis perspiciatis
            recusandae laborum ipsam quod, nihil cupiditate, incidunt
            voluptatibus doloribus porro minus est sit deleniti! Maiores, vero?
          </p>
          <button className="txt-bg-color absolute">
            <Link to="/buy-tickets/1"> Book Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieHeader;
