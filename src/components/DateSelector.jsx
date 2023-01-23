import React from "react";

const DateSelector = () => {
  return (
    <div className="date-container flex items-center  justify-center my-20">
      <button>
        <i className="fa fa-chevron-left"></i>
      </button>
      {[...Array(10)].map((x, i) => (
        <div className="date-wrapper flex flex-col h-24 w-20 items-center justify-center relative" key={i}>
          <span className="date">{i}</span>
          <span className="day">Mon</span>
          <span className="top-hole hole absolute"></span>
          <span className="right-hole hole absolute"></span>
          <span className="left-hole hole absolute"></span>
        </div>
      ))}

      <button>
        <i className="fa fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default DateSelector;
