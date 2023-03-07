// React
import React from 'react'

// Styles
import './InputTime.css'

export default function Input ({ data, setTime, enable }) {
  const handleChange = (event) => {
    // Parse value
    event.target.value = event.target.value.substring(event.target.value.length - 2)
    // Verify value
    if (Number(event.target.value) > 59) event.target.value = 59
    // Set value
    setTime(Object.keys(data)[0], Number(event.target.value))
  }

  const handleClick = (event) => {
    event.target.select()
  }

  const format = (data2) => data2.toString().length === 1 ? `0${data2}` : data2

  return (
    <input type='number' value={format(data[Object.keys(data)[0]])} onChange={handleChange} onClick={handleClick} disabled={enable} />
  )
}
