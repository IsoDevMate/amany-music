import React from 'react';
import IMG1 from "../assets/music_bitmoji.png";

export const Mood = () => {
  const CLIENT_ID = "3186fea7250343ccb3e3862db742cd89";
  const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;
  const REDIRECT_URI = "http://localhost:3000/";
  const AUTH_ENDPOINT = "https://account.spotify.com/authorize";
  const RESPONSE_TYPE = "code";

  return (
    <div className='grid grid-cols-2' id='Mood'>
      <div className='bg-red-600 p-4 '>
        <div>
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
          Log into Spotify
        </a>
        </div>
        <div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, commodi veniam! Dolorum pariatur quis libero recusandae dolore officiis, minus atque esse reiciendis repudiandae vel sint. Repudiandae doloremque non eius quaerat?</p>

        </div>
      </div>

      <div className=''>
        <img src={IMG1} alt="" className='w-full h-full object-cover' />
      </div>
    </div>
  );
};
