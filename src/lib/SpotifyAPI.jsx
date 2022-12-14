import queryString from 'querystring'

const client_id = process.env.REACT_APP_CLIENT_ID;
const client_secret = process.env.REACT_APP_CLIENT_SECRET;
const refresh_token = process.env.REACT_APP_REFRESH_TOKEN;
var Buffer = require('buffer/').Buffer  // note: the trailing slash is important!
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`
const TOP_TRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=10'


const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: queryString.stringify({
            grant_type: 'refresh_token', refresh_token,
        }),
    })

    return response.json();
}


export const fetchTopArtist = async () => {

    const { access_token } = await getAccessToken()
    return fetch(TOP_TRACKS_ENDPOINT,
    {
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    })
}


