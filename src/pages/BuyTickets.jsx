import React from "react"; 
import { Outlet } from "react-router-dom";
import MovieHeader from "../components/MovieHeader"; 

const BuyTickets = () => {
  return (
    <div className="buy-tickets-section">
      <MovieHeader />
      <Outlet />      
    </div>
  );
};

export default BuyTickets;
