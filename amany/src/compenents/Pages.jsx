import React from 'react'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import { Mood } from './Mood'
import { Wellness } from './Wellness'
import { Home } from './Home'
import { Nav } from './Nav'


export const Pages = () => {
  return (
    <BrowserRouter>
        <Nav/>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='MoodBoost' element={<Mood/>}/>
            <Route path='WellnessAccess' element={<Wellness/>}/>
        </Routes>
    </BrowserRouter>
  )
}
