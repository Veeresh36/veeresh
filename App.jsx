import { useState } from 'react'
import AppRoutes from './routees/approutes'

import './style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
      <AppRoutes/>
    </Router>
    </>
  )
}

export default App
