import React from "react";
import ArtistCard from "./ArtistCard";
import av1 from "../assets/av1.png";
import av2 from "../assets/av2.png";
import av3 from "../assets/av3.png";
import av4 from "../assets/av4.png";
import av5 from "../assets/av5.png";
import bg1 from "../assets/bg1.png";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg3.png";
import bg4 from "../assets/bg4.png";

export function Artist() {
  const data = [
    {
      image1: bg1,
      image2: av1,
      name: "Tiana Workman",
      hash: "@tianawoman",
    },
    {
      image1: bg2,
      image2: av2,
      name: "Ryan Carder",
      hash: "@ryancarder",
    },
    {
      image1: bg3,
      image2: av3,
      name: "Rebecca Luna",
      hash: "@rebecca",
    },
    {
      image1: bg4,
      image2: av4,
      name: "Johanson Wills",
      hash: "@mrwill",
    },
    {
      image1: bg1,
      image2: av5,
      name: "Elon Musk",
      hash: "@elonfake",
    },
  ];
  return (
    <div className="market" id="artist">
      <div className="title-container">
        <h2 className="title">Popular Artist</h2>
      </div>
      <div className="cards">
        {data.map(({ image1, image2, name, hash }, index) => (
          <ArtistCard
            image1={image1}
            image2={image2}
            name={name}
            hash={hash}
            key={index}
          />
        ))}
      </div>
      <div className="ellipse-container">
        <div className="ellipse pink"></div>
        <div className="ellipse voilet"></div>
      </div>
      <div className="bg-title2">artist</div>
    </div>
  );
}
