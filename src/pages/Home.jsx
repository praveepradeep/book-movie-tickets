import React from "react";
import MovieDrawer from "../components/movieDrawer";
import MovieSections from "../components/movieSections";

const Home = () => {
  return (
    <div className="">
      <MovieDrawer />
      <MovieSections title="Now Playing" bookButton={true} />
      <MovieSections title="The Most Popular Upcoming" bookButton={true} />
      <MovieSections title="Upcoming Movies" bookButton={true} />
    </div>
  );
};

export default Home;
