// Utilities
import { getLocalStorage } from '@/utilities/index'

// Initial states
const defaultTime = JSON.parse(getLocalStorage('defaultTime')) || { hours: 0, minutes: 0, seconds: 1 }
const defaultTimerRingtone = getLocalStorage('alarmTone') || 'https://dl.dropboxusercontent.com/s/dzm8xlgmpirsq39/oversimplified-alarm-clock-113180.mp3?dl=0'
const defaultTimerVolume = getLocalStorage('timerVolume') || 0.2
export { defaultTime, defaultTimerRingtone, defaultTimerVolume }
