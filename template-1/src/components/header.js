import React from "react";
import Logo from "../logo192.png";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} className="header--logo" />
      <div className="header--details">
        <h3 className="header--annual">THE ANNUAL</h3>
        <hr className="header--hr" />
        <h1 className="header--title">WOODRUFF P.S.</h1>
        <hr className="header--hr" />
        <h3 className="header--science">SCIENCE FAIR</h3>
      </div>
    </div>
  );
};

export default Header;
