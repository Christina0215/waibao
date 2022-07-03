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

            <Route path="/about" element={<About />} />
            <Route path="/about/booking" element={<Booking />} />
            <Route path="/newbook" element={<Newbook />} />
            <Route path="/admissionsystem" element={<Admissionsystem />} />
            <Route path="/abroadprogram" element={<Abroadprogram />} />
                        
            <Route path='/consult' element={<Navigate to='/consult/brandinfo' replace />} />
            <Route path='/consult/brandinfo' element={<Brandinfo />} />
            <Route path='/consult/science' element={<Abroadsci />} />
            <Route path='/consult/download' element={<Download />} />

            <Route path='/contact' element={<Navigate to='/contact/cooperatecontact' replace />} />
            <Route path='/contact/cooperatecontact' element={<Cooperatecontact />} />
            <Route path='/contact/recruitment' element={<Recruitment />} />
            
            <Route path='*' element={<h1>404</h1>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}