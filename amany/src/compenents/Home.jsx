import React from 'react';

export const Home = () => {
  return (
    <div className='bg-primary text-white px-8'>
      <h1 className='font-bold text-lg py-8'>Did You Know?</h1>
        <div className='grid grid-cols-3'>

          <div className='flex items-center justify-center bg-white text-black rounded-full w-80 h-80 '>
            <p className='p-10'>There are approximately <b>100 psychiatrists</b> for a population of <b>45 million in Kenya</b>. <br />Roughly translates to a ratio of 1 psychiatrist for every 450,000 people</p>
          </div>

          <div className='flex items-center justify-center bg-white text-black rounded-full w-80 h-80 '>
            <p className='p-12'>The WHO's 2017 report on the world mental health situation ranked Kenya <b>5th among African countries</b> with the highest number of depression cases.</p>
          </div>

          <div className='flex items-center justify-center bg-white text-black rounded-full w-80 h-80 '>
            <p className='p-11'>In Kenya, <b>1 in 4 people</b> seeking healthcare have a mental health condition, including high rates of depression and increasing substance/alcohol use disorders.</p>
          </div>

        </div>
    </div>
    
  );
};
