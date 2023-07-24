import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="header">
      <div className="header--left">
        <h5 className="header--left--h5">
          <span className="header--left--icon">
          <FontAwesomeIcon icon={ faLocationCrosshairs } />
          </span>
          <span className="header--left--light">LOREM</span>
          IPSUM
        </h5>
        <div className="header--left--text">
          <p>CONSECTETUR / ADIPISICING</p>
          <p>LOREM IPSUM / DOLOR SIT</p>
        </div>
      </div>
      <div className="header--right">
        <h1 className="header--right--design">DESIGN</h1>
        <h1 className="header--right--headline">Headline</h1>
        <h3 className="header--right--place">& PLACE IT HERE</h3>
        <p className="header--right--text">
          Sed do eiusmod tempor incididunt ut labore et dolore magn aliquout
          eninel
        </p>
      </div>
    </div>
  );
}
