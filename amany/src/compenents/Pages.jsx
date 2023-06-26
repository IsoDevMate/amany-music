import React from 'react'
import {createBrowserRouter,BrowserRouter, Routes, Route, NavLink, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import { Mood } from '../compenents/Mood/Mood'
import { Wellness } from '../compenents/Wellness/Wellness'
import { Home } from './Home'
import { RootLayout } from './RootLayout'
import Addiction from './Wellness/Battles/Addiction'
import { Depression } from './Wellness/Battles/Depression'
import { Ptsd } from './Wellness/Battles/Ptsd'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='WellnessAccess' element={<Wellness/>}>
              <Route path='addiction' element={<Addiction/>}/>
              <Route path='depression' element={<Depression/>}/>
              <Route path='ptsd' element={<Ptsd/>}/>
            </Route> 
            <Route path='MoodBoost' element={<Mood/>}/>
    </Route>
  )
)

export const Pages = () => {
  return (
    <div>
      
      <RouterProvider router={router}/>
    </div>
        
    
  )
}
