import React from 'react'

import App_helper from './App_helper'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Certificates from './components/certificates/Certificates'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<App_helper />} />
      <Route path='www.khemrajshrestha.com.np/certificates' element={<Certificates />} />
      </Routes>
    </Router>
    </>

  )
}

export default App