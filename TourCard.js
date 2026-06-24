import React from "react";
import "./TourCard.css";

const TourCard = ({ tour }) => {
  return (
    <div className="card">
      <img src={tour.image} alt={tour.title} />
      <h2>{tour.title}</h2>
      <p>{tour.description}</p>
      <span className="price">${tour.price}</span>
      <button className="btn">Book Now</button>
    </div>
  );
};

export default TourCard;
