import React from 'react'
import ReactDOM from 'react-dom/client'
import { Nav } from './compenents/Nav.jsx'
import { Mood } from './compenents/Mood.jsx'
import { Wellness } from './compenents/Wellness.jsx'
import { Search } from './compenents/Search.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav/>
    <Mood/>
    <Wellness/>
    <Search/>
  </React.StrictMode>,
)
