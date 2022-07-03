import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import About from './components/About'
import Brandinfo from './components/Brandinfo'
import Home from './components/Home'
import Newbook from './components/Newbook'
import Admissionsystem from './components/Admissionsystem/Admissionsystem'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import './App.scss'
import Booking from './components/booking'

export default function App() {
  return (
    <Router>
      <div className='app-main'>
        <Header />
        <div className='app-content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admissionsystem" element={<Admissionsystem />}/>
            <Route path="/about" element={<About />} />
            <Route path="/newbook" element={<Newbook />} />
            <Route path='/system' element={<div></div>} />
            <Route path='/program' element={<div></div>} />
<<<<<<< HEAD
            <Route path="/brandinfo" element={<Brandinfo />} />
            <Route path='/booking' element={<Booking />} />

            <Route path='/consult' element={<Navigate to='/consult/brand' replace />} />
            <Route path='/consult/brand' element={<div></div>} />
=======
            <Route path='/booking' element={<Booking />} />

            <Route path='/consult' element={<Navigate to='/consult/brand' replace />} />
            <Route path='/consult/brand' element={<Brandinfo />} />
>>>>>>> main
            <Route path='/consult/science' element={<div></div>} />
            <Route path='/consult/download' element={<div></div>} />

            <Route path='/contact' element={<Navigate to='/contact/coop' replace />} />
            <Route path='/contact/coop' element={<div></div>} />
            <Route path='/contact/recruit' element={<div></div>} />

            <Route path='*' element={<h1>404</h1>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}