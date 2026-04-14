import React from 'react'
import { WEEKS, getPhaseForWeek, getClaudeStudyUrl } from '../data/curriculum.js'
import { getWeekMarkdown } from '../markdown.js'
import MarkdownRenderer from '../components/MarkdownRenderer.jsx'

export default function WeekView({ weekNumber, isComplete, toggleWeek }) {
  const week = WEEKS.find(w => w.number === weekNumber)
  const phase = week ? getPhaseForWeek(weekNumber) : null
  const content = getWeekMarkdown(weekNumber)

  const prevWeek = weekNumber > 1 ? WEEKS.find(w => w.number === weekNumber - 1) : null
  const nextWeek = weekNumber < 52 ? WEEKS.find(w => w.number === weekNumber + 1) : null
  const done = isComplete(weekNumber)

  if (!week) {
    return (
      <main className="page">
        <div className="state-empty">Week {weekNumber} not found.</div>
      </main>
    )
  }

  const claudeUrl = getClaudeStudyUrl(weekNumber, week.title, content)

  return (
    <main className="page">
      <button
        className="week-view__back"
        onClick={() => { window.location.hash = '#/' }}
        aria-label="Back to curriculum"
      >
        ← Curriculum
      </button>

      <div className="week-view__header">
        {phase && (
          <div className="week-view__phase-badge">
            <span className="phase-badge" data-phase={phase.id}>{phase.label.toUpperCase()} · {phase.name}</span>
          </div>
        )}
        <h1 className="week-view__title">
          Week {String(weekNumber).padStart(2, '0')} — {week.title}
        </h1>
        <p className="week-view__sub">
          {done ? '✓ Completed' : 'Not yet complete'}
        </p>
      </div>

      <div className="week-view__actions">
        <button
          className={`btn ${done ? 'btn-primary--done btn-primary' : 'btn-primary'}`}
          onClick={() => toggleWeek(weekNumber)}
        >
          {done ? '✓ Completed' : 'Mark Complete'}
        </button>

        <a
          className="btn btn-claude"
          href={claudeUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Open this week's content as a study session in Claude"
        >
          ✦ Study with Claude
        </a>
      </div>

      <MarkdownRenderer content={content} />

      <div className="week-view__nav">
        <button
          className="week-view__nav-btn"
          onClick={() => prevWeek && (window.location.hash = `#/week/${prevWeek.number}`)}
          disabled={!prevWeek}
        >
          ← {prevWeek ? `Week ${prevWeek.number}` : ''}
        </button>

        <button
          className="week-view__nav-btn"
          onClick={() => nextWeek && (window.location.hash = `#/week/${nextWeek.number}`)}
          disabled={!nextWeek}
        >
          {nextWeek ? `Week ${nextWeek.number}` : ''} →
        </button>
      </div>
    </main>
  )
}
