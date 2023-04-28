import { staticShortcuts } from '@/consts'

export const getShortcutAction = (key) => {
  // Prevent key not found
  const actionFound = staticShortcuts?.[key]

  return actionFound
}
