import React from 'react'

export default function ProgressBar({ completed, total, label }) {
  const pct = total === 0 ? 0 : Math.round((completed / total) * 100)

  return (
    <div>
      {label && (
        <div className="progress-meta">
          <span>{label}</span>
          <span>{pct}%</span>
        </div>
      )}
      <div className="progress-bar" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
        <div className="progress-bar__fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}
