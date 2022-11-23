import React from "react";
import "./ArtistCard.css";

function ArtistCard(props) {
return(
    <div className="artist-card">
        <div className="image-container">
            <img src={props.url} alt={props.name} />
        </div>
        <div className="metadata">
            <div className="band-name">
                <h4>{props.name}</h4>
            </div>
            <div className="band-link">
                <a href={props.link} target="_blank" rel="noreferrer">
                    <div className="link">Go to band page -></div>
                </a>
            </div>
        </div>
    </div>
)


}

export default ArtistCard;