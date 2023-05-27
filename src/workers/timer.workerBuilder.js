
export class TimerWorkerBuilder extends Worker {
  constructor (worker) {
    const code = worker.toString()
    const blob = new Blob([`(${code})()`])

    super(URL.createObjectURL(blob))
  }

  startTimer () {
    this.postMessage({ type: 'start' })
  }

  stopTimer () {
    this.postMessage({ type: 'stop' })
  }

  setInitialTime (time) {
    this.postMessage({ type: 'setInitial', time })
  }
}
