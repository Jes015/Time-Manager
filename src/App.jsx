// MUI
import { CssVarsProvider } from '@mui/joy/styles'
import CssBaselinse from '@mui/joy/CssBaseline'

// React
import React from 'react'

// Routes
import Router from './Router'

export default function App () {
  return (
    <CssVarsProvider defaultMode='dark' modeStorageKey='mode-toggle-demo'>
      <CssBaselinse />
      <Router />
    </CssVarsProvider>
  )
}
