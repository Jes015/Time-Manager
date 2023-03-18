// Utilities
import { getLocalStorage } from '../../utilities/index'

// Initial states
const defaultTime = { hours: 0, minutes: 0, seconds: 1 }
const defaultAlarmTone = getLocalStorage('alarmTone') || 'https://soundbible.com/mp3/Tick%20Tock-SoundBible.com-1165545065.mp3'

export { defaultTime, defaultAlarmTone }
