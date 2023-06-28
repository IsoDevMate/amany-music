import React, { useState } from 'react';
import axios from 'axios';

function SearchForm() {
  const [county, setCounty] = useState('');
  const [ward, setWard] = useState('');
  const [gender, setGender] = useState('');
  const [results, setResults] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/search`, {
        params: {
          county: county,
          ward: ward,
          gender: gender
        }
      });
      setResults(response.data);
      setIsSearched(true);
    } catch(err) {
      console.error(err);
    }
  };

  const handleSendSMS = async () => {
    try {
      await axios.post('http://localhost:8000/send-sms');
      alert('Message sent successfully');
    } catch(err) {
      console.error(err);
      alert('Failed to send message');
    }
  };

  return (
    <div className='flex flex-col w-max text-black'>
      <input placeholder="County" value={county} onChange={e => setCounty(e.target.value)} className='input-box'/>
      <input placeholder="Ward" value={ward} onChange={e => setWard(e.target.value)} className='input-box'/>
      <input placeholder="Gender" value={gender} onChange={e => setGender(e.target.value)} className='input-box'/>
      <button onClick={handleSearch} className='py-2 px-4 bg-secondary text-white w-max rounded-md'>Search</button>

        {results.length > 0 ? (
        results.map((result, i) => (
          <div key={i} className='bg-secondary text-white rounded-md m-8 px-6 py-2'>
            <p>Name: {result.name}</p>
            <p>Phone Number: {result.phoneNumber}</p>
            <button onClick={handleSendSMS}>Send SMS</button>
          </div>
        ))
        ):  //else, gives a message that there has been no result
        (
            isSearched && <p className='bg-secondary text-white rounded-md m-8 px-6 py-2'>No results found.</p>
        )
    }
    </div>
  );
}

export default SearchForm;
