import React from 'react';
import IMG1 from "../assets/harp_bitmoji.png";

export const Mood = () => {
  const CLIENT_ID = "3186fea7250343ccb3e3862db742cd89";
  const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;
  const REDIRECT_URI = "http://localhost:3000/";
  const AUTH_ENDPOINT = "https://account.spotify.com/authorize";
  const RESPONSE_TYPE = "code";

  return (
    <div className='grid grid-cols-2' id='Mood'>
      <div className='bg-red-600 h-full'>
        <div>
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
          Log into Spotify
        </a>
        </div>
        <div>

        </div>
      </div>

      <div className='flex justify-center items-center'>
        <img src={IMG1} alt="" className='h-3/4 object-cover' />
      </div>
    </div>
  );
};
