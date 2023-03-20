// React
import { useEffect, useRef, useState } from 'react'

// Utilities
import { setLocalStorage } from '../utilities'

export default function useTimer (defaultTime, defaultAlarmTone) {
  if (!defaultTime || !defaultAlarmTone) throw new Error('You must provide valid values for defualtTime and defaultAlarmTone')

  const [time, setTime] = useState(defaultTime)
  const [progressNumber, setProgressNumber] = useState(0)
  const [start, setStart] = useState(false)
  const lastInterval = useRef(null)
  const totalTime = useRef(defaultTime)
  const alarmTone = useRef(new Audio(defaultAlarmTone))
  alarmTone.current.volume = 0.2

  // Decrease time
  const handleTime = () => {
    lastInterval.current = setTimeout(() => {
      if (time.seconds > 0) {
        setTime({ ...time, seconds: time.seconds - 1 })
      } else if (time.minutes > 0) {
        setTime({ ...time, seconds: 59, minutes: time.minutes - 1 })
      } else if (time.hours > 0) {
        setTime({ seconds: 59, minutes: 59, hours: time.hours - 1 })
      } else {
        setStart(false)
        alarmTone.current.play()
      }
    }, 1000)
  }

  // Calculates the progress time to render the value in a progress bar component
  const calcProgressTime = () => {
    const totalTimeInSeconds = totalTime.current.hours * 3600 + totalTime.current.minutes * 60 + totalTime.current.seconds
    const currentTimeInSeconds = time.hours * 3600 + time.minutes * 60 + time.seconds
    const currentProgressInPercentage = ((totalTimeInSeconds - currentTimeInSeconds) / totalTimeInSeconds) * 100
    return currentProgressInPercentage
  }

  useEffect(() => {
    if (!start) { return }
    handleTime()
    setProgressNumber(calcProgressTime())
    return () => { clearTimeout(lastInterval.current) }
  }, [start, time])

  // Set default time to restart
  const setTotalTime = (initialTime) => {
    totalTime.current = initialTime
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
    setProgressNumber(0)
    alarmTone.current.currentTime = 0
  }

  // Set alarm tone
  const setAlarmTone = (url) => {
    return new Promise((resolve, reject) => {
      // verify file format
      fetch(url, { headers: { Accept: 'audio/mpeg, audio/wav' } })
        .then(() => {
          alarmTone.current.src = url
          setLocalStorage('alarmTone', url)
          resolve('Sound set')
        })
        .catch(() => {
          const error = new Error('Url does not provide mp3 file')
          reject(error)
        })
    })
  }

  return { time, start, startStopTimer, restartTimer, progressNumber, setTotalTime, setAlarmTone }
}
