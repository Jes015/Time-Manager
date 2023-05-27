// React
import { useEffect, useRef, useState } from 'react'

// Utilities
import { setLocalStorage } from '@/utilities'

// Worker
import { TimerWorkerBuilder, timerWorker } from '../workers/'

const worker = new TimerWorkerBuilder(timerWorker)

export default function useTimer (defaultTime, defaultTimerRingtone, defaultTimerVolume) {
  if (!defaultTime || !defaultTimerRingtone || !defaultTimerVolume) throw new Error('You must provide valid values to useTimer')

  const [time, setTime] = useState(defaultTime)
  const [start, setStart] = useState(false)
  const totalTime = useRef(defaultTime)
  const alarmTone = useRef(new Audio(defaultTimerRingtone))

  useEffect(() => {
    alarmTone.current.volume = defaultTimerVolume
    worker.setInitialTime(totalTime.current)

    const workerEvent = ({ data }) => {
      if (document.visibilityState === 'visible') {
        setNewTime(data.time)
      }

      if (data.type === 'end') {
        setNewTime(data.time)
        alarmTone.current.play()
        setStart(false)
      }
    }

    const workerEventListener = worker.addEventListener('message', workerEvent)

    return () => {
      removeEventListener('message', workerEventListener)
    }
  }, [])

  useEffect(() => {
    if (start) {
      worker.startTimer()
    } else {
      worker.stopTimer()
    }
  }, [start])

  const setNewTime = (newTime) => {
    setTime(newTime)
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
    setNewTime(totalTime.current)
    worker.setInitialTime(totalTime.current)
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
