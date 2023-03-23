import { useKeybord } from '../hooks/'

export default function KeyboardManager ({ children, time, setTotalTime, start, isKeyboardEnable, shortcuts }) {
  useKeybord(time, start, setTotalTime, isKeyboardEnable, shortcuts)

  return children
}
