import React from "react";
import { Link } from "react-router-dom";
import DateSelector from "./DateSelector";

const TheatureList = () => {
  return (
    <>
      <DateSelector />

      <div className="theature-list-container">
        {[...Array(10)].map((x, i) => (
         
            <div className="theatuer-list flex mt-3 items-center" key={i}>
              <div className="w-2/6">
                <i className="fa fa-heart"></i>
                <span className="theature-name">PVR Kochi</span>
              </div>
              <div className="time-slot-wrapper flex flex-wrap">
                <div className="time-slots">
                  <span className="time">
                    <Link to={"seatlayout"}> 6.30 PM</Link>
                  </span>
                </div>
                <div className="time-slots">
                  <span className="time">9.30 PM</span>
                </div>
                <div className="time-slots">
                  <span className="time">11.30 PM</span>
                </div>
              </div>
            </div>
          
        ))}
      </div>
    </>
  );
};

export default TheatureList;
