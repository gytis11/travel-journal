import React from "react";
import "../index.css";
import { MdLocationOn } from "react-icons/md";

export default function Location(props) {
  return (
    <div>
      <div className="location">
        <img src={props.travel.imageUrl} className="location--img"></img>
        <div className="location--text">
          <div className="location--firstl">
            <MdLocationOn className="location--logo" />
            <div className="location--country">{props.travel.location}</div>
            <a href={props.travel.googleMapsUrl} className="location--google"> View on Google Maps</a>
          </div>
          <h1 className="location--h1">{props.travel.title}</h1>
          <h5 className="location--h5">
            {props.travel.startDate} - {props.travel.endDate}
          </h5>
          <p className="location--p">{props.travel.description}</p>
        </div>
      </div>
      <hr className="hr" />
    </div>
  );
}
