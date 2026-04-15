import React from 'react'

const LINKS = [
  { label: 'Curriculum', hash: '#/' },
  { label: 'Reference',  hash: '#/reference' },
  { label: 'Appendices', hash: '#/appendices' },
]

export default function Nav({ currentHash, totalComplete, onSearchOpen }) {
  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <div className="nav__inner">
        <a className="nav__brand" href="#/">VunaFX</a>

        <div className="nav__links">
          {LINKS.map(({ label, hash }) => {
            const active =
              hash === '#/'
                ? currentHash === '#/' || currentHash === '#'
                : currentHash.startsWith(hash)

            return (
              <a
                key={hash}
                href={hash}
                className={`nav__link${active ? ' nav__link--active' : ''}`}
              >
                {label}
              </a>
            )
          })}
        </div>

        <div className="nav__right">
          <button
            className="nav__search-btn"
            onClick={onSearchOpen}
            aria-label="Search curriculum (Cmd+K)"
            title="Search (⌘K)"
          >
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" width="16" height="16">
              <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.6"/>
              <path d="M13 13l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
            <span className="nav__search-label">Search</span>
            <kbd className="nav__search-kbd">⌘K</kbd>
          </button>

          <span className="nav__progress">{totalComplete} / 52</span>
        </div>
      </div>
    </nav>
  )
}
