import React from "react";
import "./NftCard.css";

function NftCard(props) {
  return (
    <div className="card">
      <div className="image-container">
        <img src={props.url} alt="" />
      </div>
      <div className="metadata">
        <div className="title-number">
        <h4>{props.title}</h4>
        <h4>{props.number}</h4>
        </div>
        <div className="image-link">
          <a href={props.link} target="_blank" rel="noreferrer">
          <div className="link">See full image -></div>
            </a>         
        </div>
      </div>
    </div>

  );
}

export default NftCard;
