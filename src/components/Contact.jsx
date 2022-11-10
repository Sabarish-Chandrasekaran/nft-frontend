import React from "react";
import nft6 from "../assets/nft6.png";
export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="content">
          <h1 className="title">Never Miss A Drop</h1>
          <p className="description">
            Access spacialty curated insight weekly around the world of NFTs to
            keep Youselfup to date with little effort.
          </p>
          <div className="combo">
            <input type="email" placeholder="EMAIL..." />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={nft6} alt="home image" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse voilet"></div>
          </div>
        </div>
      <div className="bg-title">contact</div>
      </div>
    </div>
  );
}
