import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <div className='flex justify-between p-4 '>
      <div className='text-secondary font-bold text-xl'>
        <NavLink to='/'>
          <h1>Amany</h1>
        </NavLink>
      </div>
      <nav className='flex gap-4 px-8'>
        <div className='hover'>
          <NavLink to='/'>Home</NavLink>
        </div>
        <div className='hover'>
          <NavLink to='WellnessAccess'>Wellness Access</NavLink>
        </div>
        <div className='hover'>
          <NavLink to='MoodBoost'>Mood Booster</NavLink>
        </div>
      </nav>
    </div>
  )
}
