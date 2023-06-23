import React from 'react';

export const Home = () => {
  return (
    <div className='bg-primary text-white'>

      <div className=' px-8'>
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

      <div className='flex flex-col justify-center items-center pt-8'>
        <h2>CHV Registration Form</h2>
        <form className="flex flex-col p-8 w-full md:w-96 text-black">
            
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
              className="p-2 rounded-md mb-4"
            />
            <input
              type="text"
              name="gender"
              placeholder="Your gender"
              required
              className="p-2 rounded-md mb-4"
            />
            <input
              type="text"
              name="county"
              placeholder="Your county"
              required
              className="p-2 rounded-md mb-4"
            />
            <input
              type="text"
              name="ward"
              placeholder="Your ward"
              required
              className="p-2 rounded-md mb-4"
            />

            <label htmlFor="availability" className='text-white'>Are you available for consultations?</label>
            <div className='flex flex-row gap-4'>
            <input
              type="radio"
              name="availability"
              value="yes"
              required
              className="p-2 rounded-md text-white"
            />
            <label for="availability" className='text-white'>Yes</label>
            <input
              type="radio"
              name="availability"
              value="no"
              required
              className="rounded-md"
            />
            <label for="availability" className='text-white'>No</label>
            </div>
            

            <input
              type="number"
              name="phoneNumber"
              placeholder="Your phone number"
              required
              className="p-2 rounded-md mb-4"
            />
            {/* Button to submit the form */}
            <button
              type="submit"
              className="py-2 px-4 bg-secondary text-white w-max rounded-md"
            >
              Register
            </button>
          </form>
      </div>

    </div>    
  );
};
