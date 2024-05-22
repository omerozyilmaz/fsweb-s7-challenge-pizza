import React from "react";
import "../Layout.css";
import { useHistory } from "react-router-dom";

export default function MainPage() {
  let history = useHistory();
  function handleClick() {
    history.push("/OrderForm");
  }
  return (
    <div className="home-page">
      <div className="background-container">
        <div className="banner">
          <h3>fırsatı kaçırma</h3>
          <h1 className="barlow">
            <span>KOD ACIKTIRIR</span>
            <span> PİZZA DOYURUR</span>
          </h1>
          <div className="siparis-buton-div">
            <button
              className="aciktim-button"
              type="button"
              onClick={handleClick}
            >
              ACIKTIM
            </button>
          </div>
        </div>
      </div>
      <div>sa</div>
    </div>
  );
}
