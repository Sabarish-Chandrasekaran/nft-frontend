import React from "react";
import { AiFillFolderAdd, AiFillAccountBook } from "react-icons/ai";
import { BsFillWalletFill, BsFillCollectionPlayFill } from "react-icons/bs";

export default function Features() {
  return (
    <div className="features" id="features">
      <div className="container">
        <div className="content">
          <div className="image">
            <BsFillWalletFill color="blue" />
          </div>
          <h2 className="title">Set Up Your Wallet</h2>
          <p className="description">
            Buy, sell, and grow your crypto with CoinFlip, the platform
            dedicated to every trader at every level.
          </p>
        </div>
        <div className="content">
          <div className="image">
            <BsFillCollectionPlayFill color="pink" />
          </div>
          <h2 className="title">Create Your Collection</h2>
          <p className="description">
            Buy, sell, and grow your crypto with CoinFlip, the platform
            dedicated to every trader at every level.
          </p>
        </div>
        <div className="content">
          <div className="image">
            <AiFillFolderAdd color="orange" />
          </div>
          <h2 className="title">Add Your NFTs</h2>
          <p className="description">
            Buy, sell, and grow your crypto with CoinFlip, the platform
            dedicated to every trader at every level.
          </p>
        </div>
        <div className="content">
          <div className="image">
            <AiFillAccountBook color="green" />
          </div>
          <h2 className="title">List Them For Sale</h2>
          <p className="description">
            Buy, sell, and grow your crypto with CoinFlip, the platform
            dedicated to every trader at every level.
          </p>
        </div>
        <div className="ellipse-container">
          <div className="ellipse pink"></div>
          <div className="ellipse voilet"></div>
        </div>
      </div>
    </div>
  );
}
