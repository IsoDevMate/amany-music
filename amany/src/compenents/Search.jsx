import React, { useState } from 'react'

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
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} />
            <input type="submit" value="Search" />
        </form>

        <div className=''>
        <ul>
        {result.map((item, index) => (
        <li key={index} className='bg-red-600 text-white'>
      <p>Scriptures: {item.scriptures.join(', ')}</p>
      <p>Text: {item.text}</p>
        </li>
        ))}
        </ul>
        </div>
        

    </div>
  )
}
