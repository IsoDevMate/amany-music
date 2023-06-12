import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <div className='flex justify-between p-4 '>
        <div className='text-red-600'>
            <NavLink to='/'><h1>Amany</h1></NavLink>
        </div>
        <nav className='flex gap-4 px-8'>
            <div>
                <NavLink to='/'>Home</NavLink>
            </div>
            <div>
                <NavLink to='MoodBoost'>Mood Booster</NavLink>
            </div>
            <div>
                <NavLink to='WellnessAccess'>Wellness Access</NavLink>
            </div>
                       
        </nav>
    </div>
  )
}
