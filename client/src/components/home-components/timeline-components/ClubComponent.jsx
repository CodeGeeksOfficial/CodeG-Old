import React from "react";
import "./ClubComponent.css";

export default function clubComponent({ club_name, description, image }) {
  return (
    <div className="club-card-container">
      <div className="club-card-info">
        <h1>{club_name}</h1>
        <div className="club-card-desc">{description}</div>
        <div className="explore-club-btn">Explore the {club_name} club &gt;</div>
      </div>
      <div className="club-card-img">
        <img src={image} alt="{club_name}" />
      </div>
    </div>
  );
}
