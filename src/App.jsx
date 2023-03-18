// MUI
import { CssVarsProvider } from '@mui/joy/styles'
import CssBaselinse from '@mui/joy/CssBaseline'

// Routing
import Routing from './Routing'

export default function App () {
  return (
    <CssVarsProvider defaultMode='dark' modeStorageKey='mode-toggle-demo'>
      <CssBaselinse />
      <Routing />
    </CssVarsProvider>
  )
}
