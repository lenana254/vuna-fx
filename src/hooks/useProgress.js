import { useState, useCallback } from 'react'

const STORAGE_KEY = 'vunafx_progress'

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  } catch {
    // localStorage may be unavailable in some contexts
  }
}

export function useProgress() {
  const [progress, setProgress] = useState(loadProgress)

  const isComplete = useCallback(
    (weekNumber) => !!progress[weekNumber],
    [progress]
  )

  const toggleWeek = useCallback((weekNumber) => {
    setProgress((prev) => {
      const next = { ...prev }
      if (next[weekNumber]) {
        delete next[weekNumber]
      } else {
        next[weekNumber] = true
      }
      saveProgress(next)
      return next
    })
  }, [])

  const completedCount = (weekNumbers) =>
    weekNumbers.filter((n) => !!progress[n]).length

  const totalComplete = Object.keys(progress).length

  return { isComplete, toggleWeek, completedCount, totalComplete }
}
