import React, { useRef, useEffect, useCallback } from 'react'
import { useSearch, extractSnippet, highlightSnippet, SUGGESTED_SEARCHES } from '../hooks/useSearch.js'

const CATEGORY_ORDER = ['Weeks', 'Concepts', 'Rules', 'Reference']

export default function SearchModal({ onClose, onNavigate }) {
  const { query, setQuery, results, activeIdx, setActiveIdx, resetActive } = useSearch()
  const inputRef = useRef(null)
  const bodyRef  = useRef(null)

  // Auto-focus input on mount
  useEffect(() => { inputRef.current?.focus() }, [])

  // ESC closes
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Prevent body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // ── Group results by category ──────────────────────────────────────────────
  const grouped = CATEGORY_ORDER.reduce((acc, cat) => {
    const hits = results.filter(r => r.item.category === cat)
    if (hits.length > 0) acc[cat] = hits.slice(0, 5) // max 5 per category
    return acc
  }, {})

  // Flat ordered list for keyboard navigation (matches visual order)
  const flatOrdered = CATEGORY_ORDER.flatMap(cat => grouped[cat] ?? [])

  const navigate = useCallback((item) => {
    onNavigate(item.url, item.anchor)
    onClose()
  }, [onNavigate, onClose])

  // ── Keyboard navigation ────────────────────────────────────────────────────
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIdx(i => Math.min(i + 1, flatOrdered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIdx(i => Math.max(i - 1, 0))
    } else if (e.key === 'Enter' && flatOrdered.length > 0) {
      e.preventDefault()
      navigate(flatOrdered[activeIdx]?.item)
    }
  }, [flatOrdered, activeIdx, setActiveIdx, navigate])

  // Scroll active result into view
  useEffect(() => {
    bodyRef.current?.querySelector('[data-active="true"]')
      ?.scrollIntoView({ block: 'nearest', behavior: 'instant' })
  }, [activeIdx])

  const handleQueryChange = (e) => {
    setQuery(e.target.value)
    resetActive()
  }

  // Build a lookup: result id → index in flatOrdered (for aria / active state)
  const idxMap = {}
  flatOrdered.forEach((r, i) => { idxMap[r.item.id] = i })

  return (
    <div
      className="search-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-label="Search curriculum"
    >
      <div className="search-modal">

        {/* ── Input row ──────────────────────────────────────────────────────── */}
        <div className="search-input-row">
          <svg className="search-icon-inline" aria-hidden="true" viewBox="0 0 20 20" fill="none">
            <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.6"/>
            <path d="M13 13l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>

          <input
            ref={inputRef}
            className="search-input"
            type="text"
            value={query}
            onChange={handleQueryChange}
            onKeyDown={handleKeyDown}
            placeholder="Search weeks, concepts, rules…"
            aria-label="Search curriculum"
            autoComplete="off"
            spellCheck={false}
          />

          {query && (
            <button
              className="search-clear"
              onClick={() => { setQuery(''); resetActive(); inputRef.current?.focus() }}
              aria-label="Clear search"
            >✕</button>
          )}

          <kbd className="search-esc" onClick={onClose}>ESC</kbd>
        </div>

        {/* ── Results body ───────────────────────────────────────────────────── */}
        <div className="search-body" ref={bodyRef}>

          {/* Empty / suggestions state */}
          {!query.trim() && (
            <div className="search-empty">
              <p className="search-empty__label">Suggested searches</p>
              <div className="search-suggestions">
                {SUGGESTED_SEARCHES.map(s => (
                  <button
                    key={s}
                    className="search-suggestion"
                    onClick={() => { setQuery(s); resetActive(); inputRef.current?.focus() }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Query too short */}
          {query.trim().length === 1 && (
            <p className="search-empty__hint" style={{ padding: '1.5rem 1.25rem' }}>
              Keep typing…
            </p>
          )}

          {/* No results */}
          {query.trim().length >= 2 && results.length === 0 && (
            <div className="search-empty">
              <p className="search-empty__label">
                No results for <strong>"{query}"</strong>
              </p>
              <p className="search-empty__hint">
                Try: "BOS", "drawdown", "session", "risk", "pip"
              </p>
            </div>
          )}

          {/* Results grouped by category */}
          {results.length > 0 && (
            <div className="search-results">
              {CATEGORY_ORDER.map(cat => {
                if (!grouped[cat]) return null
                return (
                  <div key={cat} className="search-category">
                    <div className="search-category__label">{cat}</div>

                    {grouped[cat].map(({ item, matches }) => {
                      const myIdx = idxMap[item.id]
                      const isActive = myIdx === activeIdx
                      const snippet = extractSnippet(item.text, matches, query.trim())
                      const highlighted = highlightSnippet(snippet, query.trim())

                      return (
                        <button
                          key={item.id}
                          className={`search-result${isActive ? ' search-result--active' : ''}`}
                          data-active={isActive ? 'true' : undefined}
                          onClick={() => navigate(item)}
                          onMouseEnter={() => setActiveIdx(myIdx)}
                          tabIndex={-1}
                        >
                          <div className="search-result__top">
                            <span className="search-result__title">{item.title}</span>
                            {item.phaseLabel && (
                              <span
                                className="phase-badge search-result__phase"
                                data-phase={item.phase}
                              >
                                {item.phaseLabel.toUpperCase()}
                              </span>
                            )}
                          </div>

                          {snippet && (
                            <p
                              className="search-result__snippet"
                              dangerouslySetInnerHTML={{ __html: highlighted }}
                            />
                          )}
                        </button>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* ── Footer keyboard hints ──────────────────────────────────────────── */}
        <div className="search-footer">
          <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
          <span><kbd>↵</kbd> open</span>
          <span><kbd>ESC</kbd> close</span>
          {results.length > 0 && (
            <span className="search-footer__count">
              {flatOrdered.length} result{flatOrdered.length !== 1 ? 's' : ''}
            </span>
          )}
        </div>

      </div>
    </div>
  )
}
