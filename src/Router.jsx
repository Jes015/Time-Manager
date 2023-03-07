// React
import React from 'react'
import { BrowserRouter as DefaultRouter, Route, Routes } from 'react-router-dom'

// Custom components
import Timer from './pages/Timer'

export default function Router () {
  return (
    <DefaultRouter>
      <Routes>
        <Route path='/' element={<Timer />} />
        <Route path='*' element={<h1>404 Not found</h1>} />
      </Routes>
    </DefaultRouter>
  )
}
