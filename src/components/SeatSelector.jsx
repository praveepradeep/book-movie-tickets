import React from "react";

const SeatSelector = () => {
  return (
    <div className="seat-selector-container my-20">
      <div className="flex flex-col justify-center items-center">
        {[...Array(10)].map((x, i) => (
          <div className="flex items-center h-20"  key={i}>
            <span className="uppercase mr-5 alphabet">{(i + 10).toString(36)}</span>
            <div className="flex seat-icon">
              {[...Array(10)].map((x, j) => (
                <div className="seat-vertical flex flex-col items-center relative"  key={j}>
                  <i className="fa-solid fa-couch"></i>
                  <span>{j + 1}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeatSelector;
