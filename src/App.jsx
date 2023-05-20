import React from 'react'

import App_helper from './App_helper'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Certificates from './components/certificates/Certificates'

const App = () => {
  return (
    <>
    <Router basename={process.env.khemrajshrestha.com.np}>
      <Routes>
      <Route path='/' element={<App_helper />} />
      <Route path='/certificates' element={<Certificates />} />
      </Routes>
    </Router>
    </>

  )
}

export default App