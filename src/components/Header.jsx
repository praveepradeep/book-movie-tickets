import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-section flex h-28 mt-5 px-20">
      <div className="logo-container w-64">
        <h3 className="text-3xl"><Link to={'/'}>BookMyMovie</Link></h3>
      </div>
      <div className="nav-items flex-1 w-64 ml-20">
        <ul className="flex">
          <li><Link to={'/movies'}>Movies</Link></li>
          <li><Link to={'/upcoming'}>Upcoming</Link></li>
          <li><Link to={'/theaters'}>Theaters</Link></li>
        
        </ul>
      </div>
      <div className="search-section ">
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <i className="fa fa-search"></i>
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 text-black focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search movies..."
            type="text"
            name="search"
          />
        </label>
      </div>
      <div className="cart-items"></div>
      <div className="profile-section ml-3">
        <div className="shrink-0">
          <img
            className="h-12 w-12 object-cover rounded-full"  
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
            alt="Current profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
