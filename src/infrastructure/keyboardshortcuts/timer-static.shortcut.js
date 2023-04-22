import { staticShortcuts } from '@/consts'

export const getShortcutAction = (key) => {
  // Prevent key not found
  const keyFound = Object.keys(staticShortcuts).some(actualKey => actualKey === key)
  if (!keyFound) return null
  const action = staticShortcuts[key]
  return action
}
