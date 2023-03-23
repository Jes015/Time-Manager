// React router
import { BrowserRouter as DefaultRouter, Route, Routes } from 'react-router-dom'

// Custom components
import { Timer, Credits } from './pages'

export default function Routing () {
  return (
    <DefaultRouter>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/timer' element={<Timer />} />
        <Route path='/credits' element={<Credits />} />
        <Route path='*' element={<h1>404 Not found</h1>} />
      </Routes>
    </DefaultRouter>
  )
}
