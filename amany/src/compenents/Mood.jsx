import React, { useState, useEffect } from 'react';
import IMG1 from "../assets/harp_bitmoji.png";
import Dropdown from './Dropdown';
import Listbox from './Listbox';
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
const [genres, setGenres] = useState({selectedGenre: '', listOfGenresFromAPI: []});
const [playlist, setPlaylist] = useState({selectedPlaylist: '', listOfPlaylistFromAPI: []});
const [tracks, setTracks] = useState({selectedTrack: '', listOfTracksFromAPI: []});
const [trackDetail, setTrackDetail] = useState(null);


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
      setGenres({
        selectedGenre: genres.selectedGenre,
        listOfGenresFromAPI: genreResponse.data.categories.items
      });
    });
  });
    
}, [genres.selectedGenre, CLIENT_ID, SECRET_KEY]);

 const genreChanged = val => {
    setGenres({
      selectedGenre: val, 
      listOfGenresFromAPI: genres.listOfGenresFromAPI
    });

    axios(`https://api.spotify.com/v1/browse/categories/${val}/playlists?limit=10`, {
      method: 'GET',
      headers: { 'Authorization' : 'Bearer ' + token}
    })
    .then(playlistResponse => {
      setPlaylist({
        selectedPlaylist: playlist.selectedPlaylist,
        listOfPlaylistFromAPI: playlistResponse.data.playlists.items
      })
    });

    console.log(val);
  }

  const playlistChanged = val => {
    console.log(val);
    setPlaylist({
      selectedPlaylist: val,
      listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI
    });
  }

  const buttonClicked = e => {
    e.preventDefault();

    axios(`https://api.spotify.com/v1/playlists/${playlist.selectedPlaylist}/tracks?limit=10`, {
      method: 'GET',
      headers: {
        'Authorization' : 'Bearer ' + token
      }
    })
    .then(tracksResponse => {
      setTracks({
        selectedTrack: tracks.selectedTrack,
        listOfTracksFromAPI: tracksResponse.data.items
      })
    });
  }

  const listboxClicked = val => {

    const currentTracks = [...tracks.listOfTracksFromAPI];

    const trackInfo = currentTracks.filter(t => t.track.id === val);

    setTrackDetail(trackInfo[0].track);



  }

  return (
    <div className='grid grid-cols-2' id='Mood'>
      <div className='bg-red-600 h-full'>
        <div>
        <form action="" onSubmit={buttonClicked}>
        <Dropdown options={genres.listOfGenresFromAPI} selectedValue={genres.selectedGenre} changed={genreChanged}/>
        <Dropdown options={playlist.listOfPlaylistFromAPI} selectedValue={playlist.selectedPlaylist} changed={playlistChanged}/>

        <button type="submit">Get music</button>
        <div className="row">
            <Listbox items={tracks.listOfTracksFromAPI} clicked={listboxClicked} />
            {trackDetail && <Detail {...trackDetail} /> }
          </div>
        </form>
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <img src={IMG1} alt="" className='h-3/4 object-cover' />
      </div>
    </div>
  );
};
