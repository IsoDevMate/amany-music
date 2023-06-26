import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import IMG3 from '../../assets/hand_bitmoji.png';

export const Wellness = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    if (selectedValue === 'Addiction') {
      navigate('/WellnessAccess/addiction');
    } else if (selectedValue === 'Depression') {
      navigate('/WellnessAccess/depression');
    } else if (selectedValue === 'PTSD') {
      navigate('/WellnessAccess/ptsd');
    }
  };

  return (
    <div>
        <div className='grid grid-cols-2 bg-primary text-white' id='Wellness'>
        <div className='flex flex-col justify-center items-center'>
          <div>
            <h1>What's your battle?</h1>
          </div>
          <div>
            <select
              className="block appearance-none w-full bg-white text-black border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 mb-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <option value="">Select an option:</option>
              <option value="Addiction">Addiction</option>
              <option value="Depression">Depression</option>
              <option value="PTSD">Post Traumatic Stress Disorder(PTSD)</option>
            </select>
            {selectedOption && <p>Kindly scroll down to get help and information on {selectedOption} </p>}
          </div>
        </div>
        
        <div>
          <img src={IMG3} alt="" className='h-3/4 object-cover'/>
        </div>

      </div>

      <div>
      <Outlet/>
      </div>
    </div>
  );
};
