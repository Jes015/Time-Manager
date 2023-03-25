// React
import { useEffect } from 'react'

export default function useKeybord (time, start, setTotalTime, shortCuts) {
  useEffect(() => {
    // Prevent adding event when time is rendering app
    if (start) return

    const adapter = (event) => {
      // Prevent non-numeric characters
      if (isNaN(event.key)) return
      shortCuts(event, time, setTotalTime)
    }
    document.addEventListener('keyup', adapter)
    return () => {
      document.removeEventListener('keyup', adapter)
    }
  }, [time, start])
}
