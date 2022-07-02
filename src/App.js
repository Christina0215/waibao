import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Newbook from './components/Newbook'

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/newbook" element={<Newbook />}/>
          <Route path="/" element={<Home />}/>
        </Routes>
      </div>
    </Router>
  )
}