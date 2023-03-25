// Utilities
import { getLocalStorage, setLocalStorage } from '@/utilities'

export default function timerShortcuts (event, time, setTotalTime) {
  // Prevent key control
  if (event.keyCode === 17) return

  const jsonShortcuts = getLocalStorage('keybordTimer')

  if (event.ctrlKey) {
    const shortcuts = (jsonShortcuts) ? JSON.parse(jsonShortcuts) : {}
    setLocalStorage('keybordTimer', JSON.stringify({ ...shortcuts, [event.key]: time }))
  } else {
    // Prevent parse error
    if (!jsonShortcuts) return
    // Parse Shortcuts
    const shortcuts = JSON.parse(jsonShortcuts)
    // Prevent key not found
    const keyFound = Object.keys(shortcuts).some(key => key === event.key)
    if (keyFound) {
      const newTime = shortcuts[event.key]
      setTotalTime(newTime)
    }
  }
}
