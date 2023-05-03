// Utilities
import { getLocalStorage } from '@/utilities/index'

// Mocks
import goals from '@/mocks/goals.json'

// Initial states
const defaultTime = JSON.parse(getLocalStorage('defaultTime')) || { hours: 0, minutes: 0, seconds: 1 }
const defaultTimerRingtone = getLocalStorage('alarmTone') || 'https://dl.dropboxusercontent.com/s/dzm8xlgmpirsq39/oversimplified-alarm-clock-113180.mp3?dl=0'
const defaultTimerVolume = getLocalStorage('timerVolume') || 0.2

const defaultGoals = JSON.parse(getLocalStorage('goals')) || goals

export { defaultTime, defaultTimerRingtone, defaultTimerVolume, defaultGoals }
