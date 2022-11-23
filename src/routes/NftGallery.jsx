import React from "react";
import { BallTriangle } from "react-loader-spinner";
import { continuedFetchNfts, fetchNfts, fetchAllPages } from "../lib/Nfts";
import { useEffect, useState } from "react";
import "./NftGallery.css";
import NftCard from "../components/NftCard";


function NftGallery() {
  const [firstFecth, setFirstFetch] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [cont, setCont] = useState(false);
  const [secondFetch, setSecondFetch] = useState(null);

  
  useEffect(() => {
    fetchNfts("https://api.nftport.xyz/v0/solana/accounts/558acsgeuPDFQwdCTM8LWjgyiiZCPyoS9iXts1KAWRCW?include=metadata")
    .then(console.log("hej"))
    .catch(console.warn)

 
  })
   // continuedFetchNfts()
    // .then((res) => res.json())

    // .then((data) => {
    //   console.log(data)
    // })
  

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
            <p>Fetching NFTs for you..</p>
          </div>
        </div>
      </>
    );
  if (!firstFecth) return <p>No data available</p>;
  const nfts = firstFecth.nfts;
  const sortedNfts = nfts.filter((nft) => nft.metadata);

  // console.log(sortedNfts)

  return (
    <>
      {/* <div className="container">
        <h1>NFT Gallery</h1>
        <div className="nft-container">
          {sortedNfts.map((nft) => {
            let str = nft.metadata.name;
            let title = str.slice(0, -5);

            let num = str.substring(str.length - 5);

            return (
              <NftCard
                key={nft.mint_address}
                url={nft.cached_file_url}
                title={title}
                desc={nft.metadata.description}
                number={num}
                link={nft.cached_file_url}
              />
              // <div key={nft.metadata_url} >
              //     <img src={nft.cached_file_url} alt={nft.collection_id} />
              // </div>
            );
          })}
        </div>
      </div> */}
    </>
  );
}

export default NftGallery;
