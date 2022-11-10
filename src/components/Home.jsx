import React from "react";
import Card from "./Card";

import nft1 from "../assets/nft1.png";
import nft2 from "../assets/nft2.png";
import nft3 from "../assets/nft3.png";
export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <h1 className="title">
            Discover, and Collect extraordinary <span>Monster</span> NFTs
          </h1>
          <p className="description">
            Buy, sell, and grow your crypto with CoinFlip, the platform
            dedicated to every trader at every level.
          </p>
          <div className="nav-link">
            <button>Explore Now</button>
            <div className="link">Create my NFTs -&gt;</div>
          </div>
          <div className="info-container">
            <div className="infos">
              <div className="info-count">153K+</div>
              <div className="info-name">Users</div>
            </div>
            <div className="infos">
              <div className="info-count">13K+</div>
              <div className="info-name">Artworks</div>
            </div>
            <div className="infos">
              <div className="info-count">23K+</div>
              <div className="info-name">Artists</div>
            </div>
          </div>
        </div>
        <div className="image-container">
          <div className="cards">
            <div className="card1">
              <Card
                image={nft1}
                series="APE Series"
                title="Mordern Monkey"
                price={1.99}
                tag="129123"
                time={1}
              />
            </div>
            <div className="card2">
              <Card
                image={nft2}
                series="SKULL Series"
                title="Tech Skull"
                price={2.99}
                tag="223833"
                time={1.5}
              />
            </div>
            <div className="card3">
              <Card
                image={nft3}
                series="ABSTRAACT Series"
                title="Amoeba Man"
                price={4.99}
                tag="246873"
                time={2}
              />
            </div>
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse voilet"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
