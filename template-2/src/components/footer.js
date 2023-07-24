import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faBullseye,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer--details">
        <div className="footer--icon">
          <FontAwesomeIcon icon={faLightbulb} />
        </div>
        <p className="footer--text">olor sit omet consectetu do eiusm</p>
      </div>
      <div className="footer--details">
        <div className="footer--icon">
          <FontAwesomeIcon icon={faBullseye} />
        </div>
        <p className="footer--text">olor sit omet consectetu do eiusm</p>
      </div>
      <div className="footer--details">
        <div className="footer--icon">
          <FontAwesomeIcon icon={faLocationDot} />
        </div>
        <p className="footer--text">olor sit omet consectetu do eiusm</p>
      </div>
    </div>
  );
}
