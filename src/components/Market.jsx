import React from "react";
import Card from "./Card";
import nft1 from "../assets/nft1.png";
import nft2 from "../assets/nft2.png";
import nft3 from "../assets/nft3.png";
import nft5 from "../assets/nft5.png";

export default function Market() {

  const data = [
    {
      image: nft1,
      series: "APE Series",
      title: "Mordern Monkey",
      price: 1.99,
      tag: 129123,
      time: 1,
    },
    {
      image: nft2,
      series: "SKULL Series",
      title: "Tech Skull",
      price: 2.99,
      tag: 223833,
      time: 1.5,
    },
    {
      image: nft3,
      series: "ABSTRAACT Series",
      title: "Cement Face",
      price: 4.99,
      tag: 246783,
      time: 2,
    },
    {
      image: nft5,
      series: "DISTURB Series",
      title: "Amoeba Man",
      price: 2.99,
      tag: 653254,
      time: 1,
    },
    {
      image: nft5,
      series: "Gloop Series",
      title: "Green",
      price: 3.99,
      tag: 764556,
      time: 2,
    },
  ];
  return (
    <div className="market" id="market">
      <div className="title-container">
        <h2 className="title">Trending Artwork</h2>
      </div>
      <div className="cards">
        {data.map(({ image, series, title, price, tag, time }, index) => (
          <Card
            image={image}
            series={series}
            title={title}
            price={price}
            tag={tag}
            time={time}
            key={index}
          />
        ))}
      </div>
      <div className="ellipse-container">
        <div className="ellipse pink"></div>
        <div className="ellipse voilet"></div>
      </div>
      <div className="bg-title">artwork</div>
    </div>
  );
}
