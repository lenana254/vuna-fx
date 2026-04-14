import React from 'react'
import { PHASES, WEEKS } from '../data/curriculum.js'
import ProgressBar from '../components/ProgressBar.jsx'

export default function Home({ isComplete, toggleWeek, completedCount, totalComplete }) {
  return (
    <main className="page page--wide">
      <div className="home-header">
        <h1>52-Week Forex Trading Curriculum</h1>
        <p>One pair · One session · One setup · Track your progress week by week.</p>

        <div className="overall-progress">
          <div className="progress-meta">
            <strong>Overall progress</strong>
            <span>{totalComplete} of 52 weeks complete</span>
          </div>
          <ProgressBar completed={totalComplete} total={52} />
        </div>
      </div>

      {PHASES.map((phase) => {
        const phaseWeeks = WEEKS.filter(w => phase.weeks.includes(w.number))
        const done = completedCount(phase.weeks)

        return (
          <section key={phase.id} className="phase-section">
            <div className="phase-header">
              <div className="phase-title-row">
                <span className="phase-badge" data-phase={phase.id}>{phase.label}</span>
                <h2 className="phase-name">{phase.name}</h2>
              </div>
              <p className="phase-desc">{phase.description}</p>
              <div className="phase-progress-row">
                <ProgressBar completed={done} total={phase.weeks.length} />
                <span className="phase-progress-count mono">{done}/{phase.weeks.length}</span>
              </div>
            </div>

            <div className="week-grid">
              {phaseWeeks.map((week) => {
                const done = isComplete(week.number)
                return (
                  <div
                    key={week.number}
                    className={`week-card${done ? ' week-card--done' : ''}`}
                    onClick={() => { window.location.hash = `#/week/${week.number}` }}
                    role="listitem"
                  >
                    <button
                      className={`week-card__check${done ? ' week-card__check--done' : ''}`}
                      aria-label={done ? `Mark week ${week.number} incomplete` : `Mark week ${week.number} complete`}
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleWeek(week.number)
                      }}
                    />
                    <div className="week-card__body">
                      <div className="week-card__number">Week {String(week.number).padStart(2, '0')}</div>
                      <div className="week-card__title">{week.title}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        )
      })}
    </main>
  )
}
