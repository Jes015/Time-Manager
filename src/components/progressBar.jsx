// Styles
import './progressBar.module.css'

export default function ProgressBar ({ value }) {
  return (
    <progress value={value} max={100} />
  )
}
