// React
import { useEffect, useRef, useState } from 'react'

// Utilities
import { setLocalStorage } from '../utilities'

export default function useTimer (defaultTime, defaultAlarmTone, defaultVolume) {
  if (!defaultTime || !defaultAlarmTone) throw new Error('You must provide valid values for defualtTime and defaultAlarmTone')

  const [time, setTime] = useState(defaultTime)
  const [progressNumber, setProgressNumber] = useState(0)
  const [start, setStart] = useState(false)
  const isKeyboardEnable = useRef(false)
  const lastInterval = useRef(null)
  const totalTime = useRef(defaultTime)
  const alarmTone = useRef(new Audio(defaultAlarmTone))
  
  // Decrease time
  const handleTime = () => {
    lastInterval.current = setTimeout(() => {
      let operation = {}
      if (time.seconds > 0) {
        operation = { ...time, seconds: time.seconds - 1 }
      } else if (time.minutes > 0) {
        operation = { ...time, seconds: 59, minutes: time.minutes - 1 }
      } else if (time.hours > 0) {
        operation = { seconds: 59, minutes: 59, hours: time.hours - 1 }
      } else {
        setStart(false)
        isKeyboardEnable.current = false
        alarmTone.current.play()
      }

      if (Object.values(time).every((item) => item === 0)) return

      // Improve render with batching
      setTime(operation)
      setProgressNumber(calcProgressTime(operation))
    }, 1000)
  }

  // Calculates the progress time to render the value in a progress bar component
  const calcProgressTime = ({ hours, minutes, seconds }) => {
    const totalTimeInSeconds = totalTime.current.hours * 3600 + totalTime.current.minutes * 60 + totalTime.current.seconds
    const currentTimeInSeconds = hours * 3600 + minutes * 60 + seconds
    const currentProgressInPercentage = ((totalTimeInSeconds - currentTimeInSeconds) / totalTimeInSeconds) * 100
    return currentProgressInPercentage
  }

  useEffect(() => {
    if (!start) { return }
    handleTime()
    return () => { clearTimeout(lastInterval.current) }
  }, [start, time])

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
    isKeyboardEnable.current = !isKeyboardEnable.current
  }

  // Restart timer
  const restartTimer = () => {
    if (!alarmTone.current.paused) alarmTone.current.pause()
    setStart(false)
    isKeyboardEnable.current = false
    setTime(totalTime.current)
    setProgressNumber(0)
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
  }

  return { time, start, startStopTimer, restartTimer, progressNumber, setTotalTime, setAlarmTone, isKeyboardEnable, setAlarmVolume, alarmVolume: alarmTone.current.volume }
}
