// Calculates the progress time to render the value in a progress bar component
const calcProgressBarTime = (totalTime, currentTime) => {
  const totalTimeInSeconds = totalTime.current.hours * 3600 + totalTime.current.minutes * 60 + totalTime.current.seconds
  const currentTimeInSeconds = currentTime.hours * 3600 + currentTime.minutes * 60 + currentTime.seconds
  const currentProgressInPercentage = ((totalTimeInSeconds - currentTimeInSeconds) / totalTimeInSeconds) * 100
  return currentProgressInPercentage
}

export { calcProgressBarTime }
