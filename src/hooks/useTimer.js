// React
import { useEffect, useRef, useState } from 'react'

// Utilities
import { setLocalStorage } from '@/utilities'

export default function useTimer (defaultTime, defaultTimerRingtone, defaultTimerVolume) {
  if (!defaultTime || !defaultTimerRingtone || !defaultTimerVolume) throw new Error('You must provide valid values to useTimer')

  const [time, setTime] = useState(defaultTime)
  const [start, setStart] = useState(false)
  const totalTime = useRef(defaultTime)
  const alarmTone = useRef(new Audio(defaultTimerRingtone))

  const decreaseTime = () => {
    setTime(prevTime => {
      let operation = {}
      if (prevTime.seconds > 0) {
        operation = { ...prevTime, seconds: prevTime.seconds - 1 }
      } else if (prevTime.minutes > 0) {
        operation = { ...prevTime, seconds: 59, minutes: prevTime.minutes - 1 }
      } else if (prevTime.hours > 0) {
        operation = { seconds: 59, minutes: 59, hours: prevTime.hours - 1 }
      } else {
        operation = prevTime
        setStart(false)
        alarmTone.current.play()
      }
      return operation
    })
  }

  useEffect(() => {
    alarmTone.current.volume = defaultTimerVolume
  }, [])

  useEffect(() => {
    if (!start) return
    const interval = setInterval(decreaseTime, 1000)
    return () => { clearInterval(interval) }
  }, [start])

  // Set default time to restart
  const setTotalTime = (initialTime) => {
    // Prevent unnecessary renderings
    if (JSON.stringify(initialTime) === JSON.stringify(time)) return
    totalTime.current = initialTime
    setLocalStorage('defaultTime', JSON.stringify(initialTime))
    restartTimer()
  }

  // Start or Stop timer
  const startStopTimer = () => {
    setStart(!start)
  }

  // Restart timer
  const restartTimer = () => {
    if (!alarmTone.current.paused) alarmTone.current.pause()
    setStart(false)
    setTime(totalTime.current)
    alarmTone.current.currentTime = 0
  }

  // Set alarm tone
  const setAlarmTone = (url) => {
    return new Promise((resolve, reject) => {
      // verify file format
      fetch(url, { headers: { Accept: 'audio/mpeg' } })
        .then((res) => {
          if (!res.ok) { reject(new Error('Url not found')); return }
          if (res.headers.get('Content-Type') !== 'audio/mpeg') { reject(new Error('Url does not provide mp3 file')); return }
          alarmTone.current.src = url
          setLocalStorage('alarmTone', url)
          resolve('Sound set')
        })
        .catch(() => {
          reject(new Error('Error'))
        })
    })
  }

  // Set volume
  const setAlarmVolume = (volume) => {
    if (volume > 1 || volume < 0) return
    alarmTone.current.volume = volume
    localStorage.setItem('timerVolume', volume)
  }

  return { time, start, startStopTimer, restartTimer, totalTime, setTotalTime, setAlarmTone, setAlarmVolume, alarmVolume: alarmTone.current.volume }
}
