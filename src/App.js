import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import About from './components/About'
import Brandinfo from './components/Brandinfo'
import Abroadsci from './components/Abroadsci'
import Home from './components/Home'
import Newbook from './components/Newbook/index'
import Admissionsystem from './components/Admissionsystem/Admissionsystem'
import Abroadprogram from './components/Abroadprogram/Abroadprogram'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import './App.scss'
import Booking from './components/Booking'
import Recruitment from './components/Recruitment'
import Download from './components/Download'
import Cooperatecontact from './components/Cooperatecontact'

export default function App() {
  return (
    <Router>
      <div className='app-main'>
        <Header />
        <div className='app-content'>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/admissionsystem" element={<Admissionsystem />} />
            <Route path="/abroadprogram" element={<Abroadprogram />} />
            <Route path="/about" element={<About />} />
            <Route path="/newbook" element={<Newbook />} />
            <Route path="/brandinfo" element={<Brandinfo />} />
            <Route path='/booking' element={<Booking />} />
            <Route path='/consult' element={<Navigate to='/consult/brand' replace />} />
            <Route path='/consult/brand' element={<Brandinfo />} />
            <Route path='/consult/science' element={<Abroadsci />} />
            <Route path='/consult/download' element={<Download />} />
            <Route path='/recruitment' element={<Recruitment />} />
            <Route path='/contact' element={<Navigate to='/contact/coop' replace />} />
            <Route path='/contact/coop' element={<div></div>} />
            <Route path='/contact/recruit' element={<div></div>} />
            <Route path='/cooperatecontact' element={<Cooperatecontact />} />
            <Route path='*' element={<h1>404</h1>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}