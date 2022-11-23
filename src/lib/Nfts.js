export const fetchNfts = () => {
  // fetchAllPages(apiurl);

  return fetch(
    "https://api.nftport.xyz/v0/solana/accounts/558acsgeuPDFQwdCTM8LWjgyiiZCPyoS9iXts1KAWRCW?include=metadata",
    {
      headers: {
        Authorization: process.env.REACT_APP_AUTH_CODE,
      },
    }
  );
};

export const continuedFetchNfts = async () => {
  return fetch(
    "https://api.nftport.xyz/v0/solana/accounts/558acsgeuPDFQwdCTM8LWjgyiiZCPyoS9iXts1KAWRCW?include=metadata&continuation=Mg%3D%3D",
    {
      headers: {
        Authorization: process.env.REACT_APP_AUTH_CODE,
      },
    }
  );
};

// const addToken = (base, token) => {
//   const url = new URL(base);
//   const searchParams = new URLSearchParams(url.search);
//   searchParams.set("continuation", token);
//   url.search = searchParams;
//   console.log(url.toString());
//   return url.toString();
// };

// const fetchAllPages = (url) => {
//   fetch(url, {
//     headers: {
//       Authorization: process.env.REACT_APP_AUTH_CODE,
//     },
//   })
//     .then((res) => res.json())
//     .then(
//       ({ items, continuation: token }) => setTimeout(() => {

//           token
//             ? fetchAllPages(addToken(url, token)).then((newItems) => console.log(newItems))
//             : console.log("no token")
//       })
//       // token ? fetchAllPages(addToken(url, token))
//       // .then((newItems) => console.log(newItems)) : console.log("no data")
//     );

//   // token ? fetchAllPages(addToken(url, token)).then((newItems) => [
//   //     ...items,
//   //     ...newItems,
//   // ])
//   // : items
//   // );
// };

