import React from "react";

const Footer = () => {
  return (
    <div className="footer-section h-60 px-20">
      <div className="flex justify-around mt-20">
        <h3 className="text-3xl">BookMyMovie</h3>
        <div className="company">
          <h4 className="text-xl mb-3">Company</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="find">
          <h4 className="text-xl mb-3">Find a Movie</h4>
          <ul>
            <li>In Theatures</li>
            <li>Upcoming</li> 
          </ul>
        </div>
        <div className="help">
          <h4 className="text-xl mb-3">Help</h4>
          <ul> 
            <li>Contact Us</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
