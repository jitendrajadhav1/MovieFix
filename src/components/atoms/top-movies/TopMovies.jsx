import React from "react";
import "./style.css";

const TopMovies = () => {
  return (
    <div className="tm-main">
      <h2
        className="mv-list mT-0 mB-0"
        style={{ display: "flex", alignItems: "center" }}
      >
        <span>Top Picks</span>
        <ion-icon name="chevron-forward"></ion-icon>
      </h2>
    </div>
  );
};

export default TopMovies;
