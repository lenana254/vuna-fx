import React from 'react'

const LINKS = [
  { label: 'Curriculum', hash: '#/' },
  { label: 'Reference',  hash: '#/reference' },
  { label: 'Appendices', hash: '#/appendices' },
]

export default function Nav({ currentHash, totalComplete }) {
  const base = currentHash.split('/')[0] + '/' + (currentHash.split('/')[1] ?? '')

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

        <span className="nav__progress">
          {totalComplete} / 52 weeks
        </span>
      </div>
    </nav>
  )
}
