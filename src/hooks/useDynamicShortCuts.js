// React
import { useEffect } from 'react'

export default function useDynamicShortCuts (time, start, setTotalTime, addShortcut, getShortcut) {
  useEffect(() => {
    // Prevent adding event when time is rendering app
    if (start) return

    const adapter = (event) => {
      // Prevent key control || Prevent non-numeric characters
      if (event.keyCode === 17 || isNaN(event.key)) return

      if (event.ctrlKey) {
        // Adding shortcuts in the localStorage
        addShortcut(event.key, time)
      } else {
        // Getting and setting shortcuts from the localStorage
        const newTime = getShortcut(event.key)
        if (newTime) setTotalTime(newTime)
      }
    }
    document.addEventListener('keyup', adapter)
    return () => {
      document.removeEventListener('keyup', adapter)
    }
  }, [time, start])
}
