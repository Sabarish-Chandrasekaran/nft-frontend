import React from 'react'

export default function ArtistCard({ image1, image2, name, hash }) {
  return (
    <div className="artist">
      <div className="artist-content">
        <img src={image1} alt="background" className="artist-wall" />
        <img src={image2} alt="profile" className="artist-profile" />
        <h1>{name}</h1>
        <p className="hash">{hash}</p>
        <button>Follow</button>
        <div className="artist-details">
          <div>
            <p>Followers</p>
            <h2>1.2M</h2>
          </div>
          <div>
            <p>Following</p>
            <h2>123</h2>
          </div>
          <div>
            <p>Artworks</p>
            <h2>32</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
