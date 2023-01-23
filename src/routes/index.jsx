import React from "react";
import { Route, Routes } from "react-router-dom";
import SeatSelector from "../components/SeatSelector";
import TheatureList from "../components/TheatureList";
import BuyTickets from "../pages/BuyTickets";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import Movies from "../pages/Movies";
import NotFound from "../pages/NotFound";

const index = (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path=":id" element={<Movies />} />
    <Route path="/movies">
      <Route index element={<Movies />} />
      <Route path=":id" element={<MovieDetails />} />
    </Route>
    <Route path="/buy-tickets" element={<BuyTickets />}>
      <Route index path=":id" element={<TheatureList />} />
      <Route path=":id/seatlayout" element={<SeatSelector />} />
    </Route>
    <Route path="/checkout/:id" element={<Checkout />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default index;
