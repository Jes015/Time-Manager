import { useKeybord } from '@/hooks/'

export default function KeyboardManager ({ children, time, setTotalTime, start, shortcuts }) {
  useKeybord(time, start, setTotalTime, shortcuts)

  return children
}
