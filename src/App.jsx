import React, { useState, useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Home from './pages/Home.jsx'
import WeekView from './pages/WeekView.jsx'
import Reference from './pages/Reference.jsx'
import Appendices from './pages/Appendices.jsx'
import { useProgress } from './hooks/useProgress.js'

function useHashRouter() {
  const [hash, setHash] = useState(() => window.location.hash || '#/')

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || '#/')
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return hash
}

function parseRoute(hash) {
  // Normalise: '#/week/7' → { page: 'week', param: 7 }
  const path = hash.replace(/^#\/?/, '') // strip leading #/
  if (!path || path === '/') return { page: 'home' }

  const parts = path.split('/')
  if (parts[0] === 'week' && parts[1]) {
    const n = parseInt(parts[1], 10)
    if (!isNaN(n) && n >= 1 && n <= 52) return { page: 'week', param: n }
  }
  if (parts[0] === 'reference') return { page: 'reference' }
  if (parts[0] === 'appendices') return { page: 'appendices' }

  return { page: 'home' }
}

export default function App() {
  const hash = useHashRouter()
  const route = parseRoute(hash)
  const { isComplete, toggleWeek, completedCount, totalComplete } = useProgress()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [hash])

  return (
    <div className="app">
      <Nav currentHash={hash} totalComplete={totalComplete} />

      {route.page === 'home' && (
        <Home
          isComplete={isComplete}
          toggleWeek={toggleWeek}
          completedCount={completedCount}
          totalComplete={totalComplete}
        />
      )}

      {route.page === 'week' && (
        <WeekView
          weekNumber={route.param}
          isComplete={isComplete}
          toggleWeek={toggleWeek}
        />
      )}

      {route.page === 'reference' && <Reference />}

      {route.page === 'appendices' && <Appendices />}
    </div>
  )
}
