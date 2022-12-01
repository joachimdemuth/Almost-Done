import React from "react";
import { BallTriangle } from "react-loader-spinner";
import { fetchTopArtist } from "../lib/SpotifyAPI";
import { useEffect, useState } from "react";
import "./Spotify.css";
import ArtistCard from "../components/ArtistCard";

function Spotify() {
  const [artists, setArtists] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchTopArtist()
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setArtists(data.items);
      });
    setLoading(false);
  }, []);

  if (isLoading)
    return (
      <>
        <div className="loading-container">
          <div className="loading-spinner-container">
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="blue"
              ariaLabel="ball-triangle-loading"
              wrapperClass={{}}
              wrapperStyle=""
              visible={true}
            />
          </div>
          <div className="loading-text-container">
            <p>Fetching artists..</p>
          </div>
        </div>
      </>
    );
  if (!artists) return <p>No data available</p>;

  return (
    <>
      <div className="container">
        <h1>Top artists</h1>
        <div className="artist-container">
          {artists.map((artist) => {
            return (
              <>
                <ArtistCard
                  key={artist.id}
                  url={artist.images[0].url}
                  name={artist.name}
                  link={artist.uri}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Spotify;
