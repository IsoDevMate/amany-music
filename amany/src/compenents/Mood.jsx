import React, { useState, useEffect } from 'react';
import IMG1 from "../assets/harp_bitmoji.png";
import Dropdown from './Dropdown';
import axios from 'axios';

export const Mood = () => {
  const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
  const SECRET_KEY = import.meta.env.VITE_CLIENT_SECRET;

  const data =[
    {value:1, name:'A'},
    {value:2, name:'B'},
    {value:3, name:'C'},
]

const [token, setToken] = useState('');
const [genres, setGenres] = useState([]);

useEffect(()=>{
  axios('https://accounts.spotify.com/api/token', {
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization' : 'Basic ' + btoa(CLIENT_ID + ':' + SECRET_KEY)      
    },
    data: 'grant_type=client_credentials',
    method: 'POST'
  })
  .then(tokenResponse => {      
    console.log(tokenResponse.data.access_token)
    setToken(tokenResponse.data.access_token);

    axios('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
      method: 'GET',
      headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
    })
    .then(genreResponse => {
      setGenres(genreResponse.data.categories.items);
    });
  });



    
}, []);

  return (
    <div className='grid grid-cols-2' id='Mood'>
      <div className='bg-red-600 h-full'>
        <div>
        <form action="" onSubmit={()=>{}}>
        <Dropdown options={genres}/>
        <button type="submit">Get music</button>
        </form>
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <img src={IMG1} alt="" className='h-3/4 object-cover' />
      </div>
    </div>
  );
};
