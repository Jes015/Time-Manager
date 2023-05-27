export const timerWorker = () => {
  class Timer {
    constructor (initialTime) {
      this.setTime(initialTime)
      this.interval = null
    }

    setTime (time) {
      this.time = time
    }

    startTimer () {
      this.interval = setInterval(() => { this.decreaseTime() }, 1000)
    }

    stopTimer () {
      clearInterval(this.interval)
    }

    decreaseTime () {
      if (this.time.seconds > 0) {
        this.time.seconds -= 1
      } else if (this.time.minutes > 0) {
        this.time.seconds = 59
        this.time.minutes -= 1
      } else if (this.time.hours > 0) {
        this.time = { seconds: 59, minutes: 59, hours: this.time.hours - 1 }
      }

      self.postMessage({ time: this.time })

      if (this.time.seconds === 0 && this.time.minutes === 0 && this.time.hours === 0) {
        self.postMessage({ type: 'end', time: this.time })
        this.stopTimer()
      }
    }
  }

  const timer = new Timer({ hours: 1, minutes: 11, seconds: 0 })

  self.onmessage = ({ data }) => {
    if (data.type === 'start') {
      timer.startTimer()
    } else if (data.type === 'stop') {
      timer.stopTimer()
    } else if (data.type === 'setInitial') {
      timer.setTime(data.time)
    }
  }
}
