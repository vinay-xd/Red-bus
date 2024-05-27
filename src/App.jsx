import React from 'react'
import './App.css'
import BusesList from './Component/Booking/BusesList'
import BusCard from './Component/Booking/BusCard'
import { MyContext, buses } from './Component/Data/Context'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <MyContext.Provider value={{ buses }}>
        <Router>
          <Routes>
            <Route path='/' element={<BusesList />} />
          </Routes>
        </Router>
      </MyContext.Provider>

    </>
  )
}

export default App
