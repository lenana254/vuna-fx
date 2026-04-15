import React, { useState, useEffect, useCallback } from 'react'
import Nav from './components/Nav.jsx'
import Home from './pages/Home.jsx'
import WeekView from './pages/WeekView.jsx'
import Reference from './pages/Reference.jsx'
import Appendices from './pages/Appendices.jsx'
import SearchModal from './components/SearchModal.jsx'
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
  const path = hash.replace(/^#\/?/, '')
  if (!path || path === '/') return { page: 'home' }

  const parts = path.split('/')
  if (parts[0] === 'week' && parts[1]) {
    const n = parseInt(parts[1], 10)
    if (!isNaN(n) && n >= 1 && n <= 52) return { page: 'week', param: n }
  }
  if (parts[0] === 'reference')  return { page: 'reference' }
  if (parts[0] === 'appendices') return { page: 'appendices' }

  return { page: 'home' }
}

export default function App() {
  const hash  = useHashRouter()
  const route = parseRoute(hash)
  const { isComplete, toggleWeek, completedCount, totalComplete } = useProgress()
  const [searchOpen, setSearchOpen] = useState(false)

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [hash])

  // Global Cmd+K / Ctrl+K shortcut
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(o => !o)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  /** Navigate to a search result URL then optionally scroll to section anchor */
  const handleSearchNavigate = useCallback((url, anchor) => {
    window.location.hash = url
    if (anchor) {
      // Allow new route to render before scrolling
      setTimeout(() => {
        document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 120)
    }
  }, [])

  return (
    <div className="app">
      <Nav
        currentHash={hash}
        totalComplete={totalComplete}
        onSearchOpen={() => setSearchOpen(true)}
      />

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

      {route.page === 'reference'  && <Reference />}
      {route.page === 'appendices' && <Appendices />}

      {searchOpen && (
        <SearchModal
          onClose={() => setSearchOpen(false)}
          onNavigate={handleSearchNavigate}
        />
      )}
    </div>
  )
}
