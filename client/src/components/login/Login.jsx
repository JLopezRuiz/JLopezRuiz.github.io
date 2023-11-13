import React from 'react'

const base_url = 'https://accounts.spotify.com/authorize';
const client_id = 'b66c46d8fd9c4c33bf7c0793164dadaa';
const response_type = 'code';
const redirect_uri = 'http://localhost:5173/';
const scope = ['user-read-private', 'user-read-email', 'user-read-recently-played', 'user-top-read', 'user-follow-read', 'user-follow-modify', 'playlist-read-private', 'playlist-modify-public', 'playlist-read-collaborative'];
const AUTH_URL = `${base_url}?client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}&scope=${scope}`;

const Login = () => {
  console.log(AUTH_URL);
  return (
    <a href={AUTH_URL}>Login</a>
  )
}

export default Login