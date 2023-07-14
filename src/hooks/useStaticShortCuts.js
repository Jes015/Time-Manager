import { staticShortcuts } from '@/consts'
import { useEffect } from 'react'

const getShortcutAction = (key) => {
  // Prevent key not found
  const actionFound = staticShortcuts?.[key]

  return actionFound
}

export default function useStaticShortCuts (restartTimer, startStopTimer, start) {
  // For static shortcuts
  useEffect(() => {
    const adapter = (event) => {
      // Prevent symbols or numbers
      if (!event.key.match(/[a-zA-Z]/)) return

      const action = getShortcutAction(event.key)
      if (action == null) return

      if (action === staticShortcuts.k) startStopTimer()
      else if (action === staticShortcuts.r && !start) restartTimer()
    }
    document.addEventListener('keyup', adapter)
    return () => {
      document.removeEventListener('keyup', adapter)
    }
  }, [start])
}
