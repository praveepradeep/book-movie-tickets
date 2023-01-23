import React from "react";

const MovieDrawer = () => {
  return (
    <div className="h-full pb-5 flex">
      <div className="w-2/5 mt-20">
        <div className="movie-category py-3">
          <span className="uppercase txt-color">action/sci-fi</span>
        </div>
        <div className="movie-title py-3">
          <span className="text-5xl capitalize">Avatar the way of water</span>
        </div>
        <div className="movie-description py-3">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>
        </div>
        <div className="more-section py-3">
          <button className="txt-bg-color px-4 py-2 font-semibold text-sm  rounded-full shadow-sm">
            Book Now
          </button>
          <button className="rounded-none">See deatils</button>
        </div>
      </div>
      <div className="ml-3 h-75">
        <img
          className="h-full"
          alt=""
          src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/11/avatar-the-way-of-water-poster.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
        />
      </div>
    </div>
  );
};

export default MovieDrawer;
