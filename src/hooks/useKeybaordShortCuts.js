// React
import { useEffect } from 'react'

export default function useKeybord (time, start, setTotalTime, isKeyboardEnable, shortCuts) {
  useEffect(() => {
    // Prevent adding event when time is rendering app
    if (isKeyboardEnable.current) return

    const adapter = (event) => {
      shortCuts(event, time, setTotalTime)
    }
    document.addEventListener('keyup', adapter)
    return () => {
      document.removeEventListener('keyup', adapter)
    }
  }, [time, start])
}
