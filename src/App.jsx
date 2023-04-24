// Routing
import Routing from './Routing'

// Analytics
import { Analytics } from '@vercel/analytics/react'

// Css
import 'normalize.css'
import './App.css'

export default function App () {
  return (
    <>
      <Routing />
      <Analytics />
    </>
  )
}
