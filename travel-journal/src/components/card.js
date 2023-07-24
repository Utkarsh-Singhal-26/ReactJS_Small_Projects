import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imageUrl} className="image" />
      <div className="details">
        <span className="location"><span><i class="fa-solid fa-location-dot"></i></span> &nbsp; {props.location}</span>
        <a href={props.googleMapsUrl} className="maps">View on Google Maps</a>
        <h1 className="title">{props.title}</h1>
        <p className="date">{props.startDate} - {props.endDate}</p>
        <p className="text">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
