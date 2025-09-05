import React from 'react'

export default function ProgressBar({ value = 0, max = 100 }) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100))
  return (
    <div className="progress-track" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max} aria-label="Project progress">
      <div className="progress-bar" style={{ width: `${pct}%` }} />
    </div>
  )
}
