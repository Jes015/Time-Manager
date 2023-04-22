import { useEffect } from 'react'
import { staticShortcuts } from '@/consts'

export default function useStaticShortCuts (restartTimer, startStopTimer, start, getShortcutAction) {
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
