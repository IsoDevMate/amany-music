import React from 'react';


export const Nav = () => {
  return (
    <div className='flex justify-between p-4 '>
        <div className='text-red-600'>
            <h1>AMANY</h1>
        </div>
        <div className='flex gap-4 px-8'>
            <div>
                <a href="#Mood">Mood Boost</a>
            </div>
            <div>
                <a href="#Wellness">Wellness Access</a>
            </div>
                       
        </div>
    </div>
  )
}
