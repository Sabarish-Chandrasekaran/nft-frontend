import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
export default function Footer() {
  const links = [
    {
      title: "About Us",
      data: ["About", "Terms", "Legal"],
    },
    {
      title: "NFTs Posts",
      data: ["OpenSea", "Maker", "Learn"],
    },
    {
      title: "Contact Us",
      data: ["Press", "Support"],
    },
    {
      title: "Social Links",
      data: ["Twiiter", "Instagram", "Facebook"],
    },
  ];
  const socialLink = [
    <BsFacebook />,
    <BsTwitter />,
    <BsInstagram />,
  ];
  return (
    <footer>
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            <h2>INLIFE</h2>
          </div>
          <p>Exclusive NFT Collection</p>
          <ul>
            {socialLink.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="links">
          {links.map(({ title, data }, index) => {
            return (
              <div className="link" key={index}>
                <h4>{title}</h4>
                <ul>
                  {data.map((link, index2) => (
                    <li key={index2}>{link}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lower">
        <span>&copy; Copyright 2022 Sabarish C</span>
        <span>All rights Reserved</span>
      </div>
    </footer>
  );
}
