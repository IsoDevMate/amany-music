import React from 'react'
import {createBrowserRouter,BrowserRouter, Routes, Route, NavLink, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import { Mood } from '../compenents/Mood/Mood'
import { Wellness } from '../compenents/Wellness/Wellness'
import { Home } from './Home'
import { Nav } from './Nav'
import { RootLayout } from './RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='MoodBoost' element={<Mood/>}/>
            <Route path='WellnessAccess' element={<Wellness/>}/>
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
