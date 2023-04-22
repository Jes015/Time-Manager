// Utilities
import { getLocalStorage, setLocalStorage } from '@/utilities'

const addShortcut = (key, time) => {
  const jsonShortcuts = getLocalStorage('keybordTimer')

  const shortcuts = (jsonShortcuts) ? JSON.parse(jsonShortcuts) : {}
  setLocalStorage('keybordTimer', JSON.stringify({ ...shortcuts, [key]: time }))
}

const getShortcut = (key) => {
  const jsonShortcuts = getLocalStorage('keybordTimer')

  // Prevent parse error
  if (!jsonShortcuts) return
  // Parse Shortcuts
  const shortcuts = JSON.parse(jsonShortcuts)
  // Prevent key not found
  const keyFound = Object.keys(shortcuts).some(actualKey => actualKey === key)
  if (!keyFound) return null
  const newTime = shortcuts[key]
  return newTime
}

export { addShortcut, getShortcut }
