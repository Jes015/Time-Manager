// React
import { useEffect, useRef, useState } from 'react'

// Utilities
import { setLocalStorage } from '@/utilities'

export default function useTimer (defaultTime, defaultTimerRingtone, defaultTimerVolume) {
  if (!defaultTime || !defaultTimerRingtone || !defaultTimerVolume) throw new Error('You must provide valid values to useTimer')

  const [time, setTime] = useState(defaultTime)
  // Ref for avoid renders when the user is in another tab
  const timeForNoRender = useRef(defaultTime)
  const [start, setStart] = useState(false)
  const totalTime = useRef(defaultTime)
  const alarmTone = useRef(new Audio(defaultTimerRingtone))

  useEffect(() => {
    alarmTone.current.volume = defaultTimerVolume
  }, [])

  useEffect(() => {
    if (!start) return
    const interval = setInterval(decreaseTime, 1000)
    return () => { clearInterval(interval) }
  }, [start])

  // Drecease time
  const decreaseTime = () => {
    setTime(prevTime => {
      if (timeForNoRender.current.seconds > 0) {
        timeForNoRender.current = { ...timeForNoRender.current, seconds: timeForNoRender.current.seconds - 1 }
      } else if (timeForNoRender.current.minutes > 0) {
        timeForNoRender.current = { ...timeForNoRender.current, seconds: 59, minutes: timeForNoRender.current.minutes - 1 }
      } else if (timeForNoRender.current.hours > 0) {
        timeForNoRender.current = { seconds: 59, minutes: 59, hours: timeForNoRender.current.hours - 1 }
      } else {
        setStart(false)
        alarmTone.current.play()

        return timeForNoRender.current
      }

      if (document.hidden) {
        console.log('avoiding renders')
        return prevTime
      } else {
        return timeForNoRender.current
      }
    })
  }

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
    timeForNoRender.current = totalTime.current
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

  return { time, start, startStopTimer, restartTimer, totalTime: totalTime.current, setTotalTime, setAlarmTone, setAlarmVolume, alarmVolume: alarmTone.current.volume }
}
