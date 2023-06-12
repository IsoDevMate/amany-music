import React, { useState } from 'react'
import IMG2 from '../../assets/bible_bitmoji.png'

export const Search = () => {
  const [topic, setTopic] = useState('');
  const [result, setResult] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const url = `https://uncovered-treasure-v1.p.rapidapi.com/topic/${topic}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fabf11f3b9msh8ea1472204f68dbp10ba2ajsn24f0f9e437a7',
            'X-RapidAPI-Host': 'uncovered-treasure-v1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        const results = data.results.map(item => ({
          scriptures: item.scriptures,
          text: item.text,
        })).slice(0, 3); // limit to first 3 items
        setResult(results);
      } catch (error) {
        console.error(error);
      }
      
  };

  return (
    <div className='grid grid-cols-2'>

      <div className='flex justify-center items-center'>
        <img src={IMG2} alt="" className='h-3/4 object-cover' />
      </div>

      <div className='flex justify-center items-center flex-col'>
        <form onSubmit={handleSubmit} className='flex justify-center items-center'>
            <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} className='block appearance-none w-full bg-white border text-black border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'/>
            <input type="submit" value="Search"  className='mx-2 px-2 py-1 bg-slate-100 text-black rounded'/>
        </form>

        <div>
        <ul>
        {result.map((item, index) => (
        <li key={index} className='bg-red-600 text-white rounded m-4 p-2'>
      <p>Scriptures: {item.scriptures.join(', ')}</p>
      <p>Devotion: {item.text}</p>
        </li>
        ))}
        </ul>
        </div>
    </div>

    </div>
      )
}
