// Utilities
import { getLocalStorage } from '../../utilities/index'

// Initial states
const defaultTime = { hours: 0, minutes: 0, seconds: 1 }
const defaultAlarmTone = getLocalStorage('alarmTone') || 'https://dl.dropboxusercontent.com/s/dzm8xlgmpirsq39/oversimplified-alarm-clock-113180.mp3?dl=0'

export { defaultTime, defaultAlarmTone }
